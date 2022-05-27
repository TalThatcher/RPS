
document.querySelector('button').addEventListener('click', makeReq)
let resultText = document.querySelector('h3')
console.log('test')
async function makeReq(){
  resultText.innerText = 'result';
  let choice = document.querySelector("input").value;
  let res = await fetch(`/api?choice=${choice}`)
  let data = await res.json()
  
  console.log(data);
//data provided by server will be an object and have an enemy move and win status properties.
if(data.winStatus === 'win'){
  // win here
  resultText.innerText = figlet("Result: YOU WIN!! Your server side enemy foolishly chose " + data.enemyMove + ".");

}
else if(data.winStatus === 'tie'){
//tie here
resultText.innerText = "Result: YOU TIE!! Your server side enemy chose the SAME MOVE!"
}
else{
  //loss
  resultText.innerText = "Result: YOU LOSE!! Your server side enemy chose " +data.enemyMove +" And defeated your foolish move."
}
}