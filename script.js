const elements = document.querySelectorAll('i')
const container = document.querySelector('div.container')
// const winnerSpan = document.querySelector('span#winner')
const restartBtn = document.querySelector('.btn-restart')

const objectClass= {
    rock: "fa-solid fa-hand-back-fist fa-5x",
    scissor:"fa-solid fa-hand-scissors fa-5x",
    paper: "fa-solid fa-hand fa-5x"
}
const scorePlayer = document.querySelector('#score-player-number')
const scoreComputer = document.querySelector('#score-comp-number')

const modal = document.querySelector("div.modal")

elements.forEach(elem => elem.addEventListener('mouseover',(e) => {
    const list = e.target.classList
    list.remove('fa-regular')
    list.add('fa-solid')
}))

restartBtn.addEventListener('click',() => {
    scorePlayer.textContent = `0`
    scoreComputer.textContent = `0`
})

elements.forEach(elem => elem.addEventListener('mouseout',(e) => {
    const list = e.target.classList
    list.remove('fa-solid')
    list.add('fa-regular')
}))

elements.forEach(elem => elem.addEventListener('click',(e) => {
    // decisionMaker(e.target.id)
    decisionMaker(e.target.id,Math.random())
}))

modal.addEventListener("click",e => {
    modal.style.visibility = 'hidden'
})

function computerString(number){
    if(number <= 0.33){
        return "scissor"
    }
    else if(number >0.33 && number<=0.66){
        return "rock"
    }
    else{
        return "paper"
    }
}

function scoreChange(winner){
    if(winner === "You"){
        scorePlayer.textContent = parseInt(scorePlayer.textContent)+1
    }
    else if(winner === "Computer"){
        scoreComputer.textContent = parseInt(scoreComputer.textContent)+1
    }
    else{
        scorePlayer.textContent = parseInt(scorePlayer.textContent) + 1
        scoreComputer.textContent = parseInt(scoreComputer.textContent) + 1
    }
}

function renderModal(winner,computerChoice){

    modal.style.visibility = "visible"    
    // winnerSpan.textContent = winner
    container.innerHTML = `
    <h4>Winner is ${winner}</h4>
    <p>Computers Choice</p>
    <i class="${objectClass[computerChoice]}"></i>`

    scoreChange(winner)
}

function decisionMaker(choice,computer){
    const computerChoice = computerString(computer)
    if(choice == "rock"){
        if(computerChoice == "scissor"){
            renderModal("You",computerChoice)
        }
        else if(computerChoice == choice){
            renderModal("Draw",computerChoice)
        }
        else{
            renderModal("Computer",computerChoice)
        }
    }
    else if(choice == "paper"){
        if(computerChoice == "scissor"){
            renderModal("Computer",computerChoice)
        }
        else if(computerChoice == choice){
            renderModal("Draw",computerChoice)
        }
        else{
            renderModal("You",computerChoice)
        }
    }

    else if(choice == "scissor"){
        if(computerChoice == "paper"){
            renderModal("You",computerChoice)
        }

        else if(computerChoice == choice){
            renderModal("Draw",computerChoice)
        }

        else{
            renderModal("Computer",computerChoice)
        }
    }
}