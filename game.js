const buttonColors = ["red", "blue", "green", "yellow"];
const gamePattern = [];  
const userClickedPattern = [];
let level = 0;

const nextSequence = () => {
    randomNumber = Math.floor(Math.random() * 4);

    let randomChosenColor = buttonColors.at(randomNumber);
    
    gamePattern.push(randomChosenColor);
        $(`#${randomChosenColor}`).fadeOut(100).fadeIn(100); //flashes random button
        playSound(randomChosenColor);
        level++;
        $(".level-title").text(`Level ${level}`);
        console.log(level);
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
        }, 100);
}

$(document).one("keypress",function() { //keypress starts game (user must interact for audio to work)        
    nextSequence();
});





