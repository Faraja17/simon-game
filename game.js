const buttonColors = ["red", "blue", "green", "yellow"];
const gamePattern = [];  
let userClickedPattern = [];
let level = 0;

const nextSequence = () => {
    
    randomNumber = Math.floor(Math.random() * 4);

    let randomChosenColor = buttonColors.at(randomNumber);
   
    gamePattern.push(randomChosenColor);
        
    $(`#${randomChosenColor}`).fadeOut(100).fadeIn(100); //flashes random button
    playSound(randomChosenColor);
    level++;
    console.log(level);

    $("#level-title").text(`Level ${level}`); //changes the h1
    
    userClickedPattern = [];
}

//user game play

$(".btn").on("click", function() {
    let userChosenColor = this.id;
    userClickedPattern.push(userChosenColor);
    let lastAnswer = userClickedPattern[userClickedPattern.length - 1];
    let gamePrompt = gamePattern[gamePattern.length - 1];
    playSound(userChosenColor);
    animatePress(userChosenColor);
    if (userClickedPattern.length === gamePattern.length) { //allows user to keep playing until player array length matches game array
        checkAnswer(lastAnswer, gamePrompt);
    }
});

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

const checkAnswer = (currentLevel, gamePrompt) => {
    if (currentLevel === gamePrompt) {
        console.log("success");

        setTimeout(function() {
            nextSequence();
        }, 1000); 
    } else {
        console.log("wrong");
        playSound("wrong");

        $("body").addClass("game-over"); //flashes red to indicate wrong answer

        setTimeout(function() {
            $("body").removeClass("game-over");
        }, 200);

        $("#level-title").text(`Game Over, Press Any Key to Restart`); //changes the h1


    }
    console.log(userClickedPattern, gamePattern)
    
}

$(document).one("keypress",function() { //keypress starts game (user must interact for audio to work)        
    nextSequence();
});





