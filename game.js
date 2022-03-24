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
  console.log(randomNumber, randomChosenColour,gamePattern);
}
nextSequence();