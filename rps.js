



const randomRPS = () => {
    let num = Math.random()
    return num < 0.33 ? 'rock' :
    num < 0.66 ? 'paper' : 'scissors'
}

const rockPaperScissors = (choice, botChoice) => {
    if ( choice == botChoice ) return "Tied!"
    else if (( choice == 'rock' && botChoice == 'scissors') ||
        ( choice == 'scissors' && botChoice == 'paper') ||
        ( choice == 'paper' && botChoice == 'rock')) { 
            return "Win!"
        } else return "Lose!"
}



// creates array of choices
// const arrRPS = (num) => {
//     let arr = []
//     for (let i = 0; i < num; i++){
//         arr.push(randomRPS())
//     }
//     console.log(arr)
//     return arr
// }

//plays an arrays of choices
// const playRPS = (choice, botChoice) => {
//     for (let i = 0; i < choice.length; i++) {
//         console.log(rockPaperScissors(choice[i], botChoice[i]))
//     }
// }