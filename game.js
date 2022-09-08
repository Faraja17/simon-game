const buttonColors = ["red", "blue", "green", "yellow"];
const gamePattern = [];  
const userClickedPattern = [];

const nextSequence = () => {
    randomNumber = Math.floor(Math.random() * 4);

    let randomChosenColor = buttonColors.at(randomNumber);
    
    gamePattern.push(randomChosenColor);

    $(document).on("keypress",function() { //keypress starts game (user must interact for audio to work)

        $(`#${randomChosenColor}`).fadeOut(100).fadeIn(100); //flashes random button
        playSound(randomChosenColor);
    });
}

$(".btn").on("click", function() {
    let userChosenColor = this.id;
    userClickedPattern.push(userChosenColor);
    playSound(userChosenColor);
    animatePress(userChosenColor);
});

const playSound = (input) => {
    let audio = new Audio(`sounds/${input}.mp3`);
        audio.play();
}

const animatePress = (currentColor) => {
        $(`.${currentColor}`).addClass("pressed");

        setTimeout(function() {
            $(`.${currentColor}`).removeClass("pressed");
        }, 1000);
}

    
nextSequence();



