const buttonColors = ["red", "blue", "green", "yellow"];
let gamePattern = [];  
let userClickedPattern = [];
let level = 0;

const nextSequence = () => {

    userClickedPattern = [];
    
    randomNumber = Math.floor(Math.random() * 4);

    let randomChosenColor = buttonColors.at(randomNumber);
   
    gamePattern.push(randomChosenColor);
        
    $(`#${randomChosenColor}`).fadeOut(100).fadeIn(100); //flashes random button
    playSound(randomChosenColor);
    level++;

    $("#level-title").text(`Level ${level}`); //changes the h1
}

const userPlay = () => { //user game play

    $(".btn").on("click", function() {
        let userChosenColor = this.id;
        userClickedPattern.push(userChosenColor);

        playSound(userChosenColor);
        animatePress(userChosenColor);

        checkAnswer(userClickedPattern.length - 1); //the parameter is the last index of the user array
        
    });
};

const playSound = (input) => {
    let audio = new Audio(`sounds/${input}.mp3`);
        audio.play();
}

const animatePress = (currentColor) => {
        $(`.${currentColor}`).addClass("pressed");

        setTimeout(function() {
            $(`.${currentColor}`).removeClass("pressed");
        }, 100);
}

const checkAnswer = (currentLevel) => {
    if (userClickedPattern[currentLevel] === gamePattern[currentLevel]) {
        if(userClickedPattern.length === gamePattern.length) {
            setTimeout(function() {
                nextSequence();
            }, 1000); 
        };

    } else {
        playSound("wrong");

        $("body").addClass("game-over"); //flashes red to indicate wrong answer

        setTimeout(function() {
            $("body").removeClass("game-over");
        }, 200);

        $("#level-title").text(`Game Over`); //changes the h1

        setTimeout(function() {
            location.reload();
        }, 500);
    }
}

const startGame = () => {
    $(document).one("keypress",function() { //keypress starts game (user must interact for audio to work)        
        userClickedPattern = [];
        gamePattern = [];
        level = 0;
        nextSequence();
        userPlay();
    });
}

startGame();





