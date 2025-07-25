let button = document.querySelectorAll(".box")
let btn = document.querySelector("#reset")
let turnO = true;
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg")
let NewGameBtn = document.querySelector("#new-btn")
let resetBtn = document.querySelector("#reset-btn")

let winpattern = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8]
]
let resetGame = () => {
    turnO = true;
    enableBtn()
    msgContainer.classList.add("hide");

}


button.forEach((button) => {
    button.addEventListener("click", () => {
        if (turnO) {
            button.innerText = "O"
            turnO = false;
        } else {
            button.innerText = "X"
            turnO = true;
        }
        button.disabled = true;
        checkwinner()
    })
})
let enableBtn = () => {
    turnO = true;
    for (let buttons of button) {
        buttons.disabled = false;
        buttons.innerText = ""
    }
}
let disableBtn = () => {
    turnO = true;
    for (let buttons of button) {
        buttons.disabled = true;
    }
}
const showWinner = (winner) => {
    msg.innerText = `Congratulations the winner is ${winner} `
    msgContainer.classList.remove("hide")
    disableBtn()
}
let checkwinner = () => {
    for (let patterns of winpattern) {
        let pos1Val = button[patterns[0]].innerText;
        let pos2Val = button[patterns[1]].innerText;
        let pos3Val = button[patterns[2]].innerText;
        if (pos1Val != "" && pos2Val != "" && pos3Val != "") {
            if (pos1Val === pos2Val && pos2Val === pos3Val) {
                console.log("winner", pos1Val)
                showWinner(pos1Val)
            }
        }
    }

}
NewGameBtn.addEventListener("click", resetGame)
resetBtn.addEventListener("click", resetGame)