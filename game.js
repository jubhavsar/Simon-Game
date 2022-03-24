let gamePattern = [];
let buttonColours = ["red", "blue", "green", "yellow"]
let randomNumber;
let randomChosenColour;
// generate random number
function getRandomNumberBetween(min,max){
  return Math.floor(Math.random()*(max-min+1)+min);
}

function nextSequence() {
  
  randomNumber = getRandomNumberBetween(0,3);
  randomChosenColour = buttonColours[randomNumber];
  gamePattern.push(randomChosenColour);

  //Use jQuery to select the button with the same id as the randomChosenColour.
  //Use jQuery to animate a flash to the button
  $(`#${randomChosenColour}`).fadeIn(100).fadeOut(100).fadeIn(100);
  
  //To play the sound for the button colour selected. 
  let audio = new Audio(`sounds/${randomChosenColour}.mp3`);
   audio.play();
  
 
}
nextSequence();
