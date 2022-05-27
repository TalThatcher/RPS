
let newElement = new Audio('rock.mp3');

document.querySelector('button').addEventListener('click', playIt);

function playIt(){
    console.log('trying to play')
    newElement.load()
    newElement.play()
}