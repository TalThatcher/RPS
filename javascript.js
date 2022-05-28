//variables for our audio
const rockAudio = new Audio(document.querySelector('#rockAudio').src);
const paperAudio = new Audio('media/paper.mp3');
const scissorsAudio = new Audio('media/scissors.mp3');
const winAudio = new Audio('media/win.mp3');
const lossAudio = new Audio('media/loss.mp3');

//this keeps the images from allowing a ghost image from being dragged. It kept happening by accident during testing. visual improvement only.
document.querySelectorAll('img').forEach(imageElement => imageElement.setAttribute('draggable', false));

//sets variable for our h3 result text
let resultText = document.querySelector('h3');

//event listeners for our game choices.
document.querySelector('#rock').addEventListener('click', function(){makeReq('rock')})
document.querySelector('#paper').addEventListener('click', function(){makeReq('paper')})
document.querySelector('#scissors').addEventListener('click', function(){makeReq('scissors')})

async function makeReq(choice){
  if(choice === 'rock'){
    rockAudio.load();
    rockAudio.play();
  }
  else if(choice === 'paper'){
    paperAudio.load();
    paperAudio.play();
  }
  else{
    scissorsAudio.load();
    scissorsAudio.play();
  }
  resultText.style.color = 'white'
  resultText.innerText = 'Result calculating... ...';
  let res = await fetch(`/api?choice=${choice}`)
  let data = await res.json()
  
//data provided by server will be an object and have an enemy move and win status properties.
if(data.winStatus === 'win'){
  // win here
  resultText.innerText = "Result: YOU WIN!! Your server side enemy foolishly chose " + data.enemyMove + ".";
  resultText.style.color = 'orange'
  winAudio.load()
  winAudio.play()
}
else if(data.winStatus === 'tie'){
//tie here
resultText.innerText = "Result: YOU TIE!! Your server side enemy chose the SAME MOVE!"
resultText.style.color = 'pink'
}
else{
  //loss
  resultText.innerText = "Result: YOU LOSE!! Your server side enemy chose " +data.enemyMove +" and defeated your foolish move."
  resultText.style.color = 'cyan'
  lossAudio.load()
  lossAudio.play()
}
}