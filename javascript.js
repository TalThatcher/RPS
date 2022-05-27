document.querySelector('#clickMe').addEventListener('click', makeReq)

async function makeReq(){

  const userName = document.querySelector("#userName").value;
  const res = await fetch(`/api?student=${userName}`)
  const data = await res.json()

  console.log(data);
//data provided by server will be an object and have an enemy move and win status properties.
if(data.winStatus === 'win'){
  // win here
  console.log('win')
}
else if(data.winStatus === 'tie'){
//tie here
console.log('tie')
}
else{
  //loss
  console.log('loss')
}
}