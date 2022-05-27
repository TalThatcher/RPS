document.querySelector("button").addEventListener('click', rps)


async function rps(){
    let playerChoice = document.querySelector('input').value

    const res = await fetch(`api/choice?${action}`)
    const data = await res.json
    console.log(data)
    
    
}