const buttonColors = ["red", "blue", "green", "yellow"];
const gamePattern = [];  

const nextSequence = () => {
    randomNumber = Math.floor(Math.random() * 4);

    let randomChosenColor = buttonColors.at(randomNumber);
    
    gamePattern.push(randomChosenColor);

    $(document).on("keypress",function() {

        $(`#${randomChosenColor}`).fadeOut(100).fadeIn(100);

        let audio = new Audio(`sounds/${randomChosenColor}.mp3`);
        audio.play();
    });
    
}
    
nextSequence();



