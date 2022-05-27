//this keeps the images from allowing a ghost image from being dragged. It kept happening by accident during testing. visual improvement only.
document.querySelector('img').setAttribute('draggable', false)
//sets variable for our h3 result text
let resultText = document.querySelector('h3')
//event listeners for our game choices.
document.querySelector('#rock').addEventListener('click', function(){makeReq('rock')})
document.querySelector('#paper').addEventListener('click', function(){makeReq('paper')})
document.querySelector('#scissors').addEventListener('click', function(){makeReq('scissors')})
console.log('test')
async function makeReq(choice){
  resultText.innerText = 'result';
  let res = await fetch(`/api?choice=${choice}`)
  let data = await res.json()
  
  console.log(data);
//data provided by server will be an object and have an enemy move and win status properties.
if(data.winStatus === 'win'){
  // win here
  resultText.innerText = "Result: YOU WIN!! Your server side enemy foolishly chose " + data.enemyMove + ".";
  resultText.style.color = 'orange'

}
else if(data.winStatus === 'tie'){
//tie here
resultText.innerText = "Result: YOU TIE!! Your server side enemy chose the SAME MOVE!"
resultText.style.color = 'gray'
}
else{
  //loss
  resultText.innerText = "Result: YOU LOSE!! Your server side enemy chose " +data.enemyMove +" and defeated your foolish move."
  resultText.style.color = 'cyan'
}
}