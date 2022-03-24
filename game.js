let gamePattern = [];
let buttonColours = ["red", "blue", "green", "yellow"];
let userClickedPattern = [];

// generate random number
function getRandomNumberBetween(min,max){
  return Math.floor(Math.random()*(max-min+1)+min);
}

//Use jQuery to detect when any of the buttons are clicked and trigger a handler function.
$(".btn").click(function() {

  //create a new variable to store the id of the button that got clicked.
  let userChosenColour = $(this).attr("id");

  //Add the contents to the end of this new userClickedPattern
  userClickedPattern.push(userChosenColour);

  playSound(userChosenColour);
  animatePress(userChosenColour);
});

function nextSequence() {
  
  let randomNumber = getRandomNumberBetween(0,3);
  let randomChosenColour = buttonColours[randomNumber];
  gamePattern.push(randomChosenColour);

  //Use jQuery to select the button with the same id as the randomChosenColour.
  //Use jQuery to animate a flash to the button
  $(`#${randomChosenColour}`).fadeIn(100).fadeOut(100).fadeIn(100);
  
  //To play the sound for the button colour selected. 
  playSound(randomChosenColour);
 
}

function playSound(name) {

let audio = new Audio(`sounds/${name}.mp3`);
audio.play();

}

function animatePress(currentColour) {
  
// Use jQuery to add this pressed class to the button 
$(`#${currentColour}`).addClass('pressed');
  setTimeout(()=>{
   $(`#${currentColour}`).removeClass('pressed');
  }, 100);
}
nextSequence();
