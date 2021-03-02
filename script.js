function computerPlay() {
    let weapons = Array("Rock", "Paper", "Scissors")
    return weapons[Math.floor(Math.random() * weapons.length)];
}

function determineWinner(playerSelection, computerSelection) {
    const p = playerSelection.toLowerCase()
    const c = computerSelection.toLowerCase()
    console.log("human says", p);
    console.log("robot says", c);
    if (p === c) {
        return "Draw!"
    } else if (p === "rock" && c === "scissors") {
        return true
    } else if (p === "paper" && c === "rock") {
        return true
    } else if (p === "scissors" && c === "paper") {
        return true
    } else {
        return false;
    }

}

function theGame(theChoice) {
    // let hCount = 0
    // let rCount = 0
    // for (i = 0; i != 5; i++) {
    const q = document.querySelector("#result")
    let computerFight = computerPlay()
    const result = determineWinner(theChoice, computerFight)
    const h1 = document.createElement("h1");
    h1.classList.add("result-display")
    if (result === false) {
        console.log("Robot wins")
        h1.textContent = "Robot wins"
            //rCount++
    } else if (result === true) {
        console.log("Human wins!!!")
        h1.textContent = "Human wins!!!"
            // hCount++;
    } else {
        console.log("NO ONE WINS!")
        h1.textContent = "NO ONE WINS!"
    }
    q.appendChild(h1)
    document.getElementById("#result").q
        // }
        /* if (hCount > rCount) {
             console.log("Human wins for real!!!")
         } else if (hCount > rCount) {
             console.log("Robot wins for real!!!")
         } else {
             console.log("A DRAAAAAW!")
         }
         */
}
const buttons = document.querySelectorAll('button');

function chooseOption() {
    buttons.forEach((button) => {

        // and for each one we add a 'click' listener
        button.addEventListener('click', () => {
            theGame(button.id);
            console.log("hi")
        });
    });

}

chooseOption()