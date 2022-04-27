const statusDisplay = document.querySelector('.game--status');

let currentPlayer = "";

const winningMessage = () => `Player ${currentPlayer} has won!`;
const drawMessage = () => `Game ended in a draw!`;
const currentPlayerTurn = () => `It's ${currentPlayer}'s turn`;

const winningConditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

function selectPlayer(name) {
    if (currentPlayer === "") {
        currentPlayer = name;
        document.getElementsByClassName("button").disabled = true;
    }
    statusDisplay.innerHTML = currentPlayerTurn();

    document.getElementById('p1').style.pointerEvents = 'none';
    document.getElementById('p2').style.pointerEvents = 'none';
}


let box = [];
for (let i = 0; i < 9; i++) {
    box[i] = document.getElementById(`btn${i}`);
}

function clickcell(id) {

    if (currentPlayer === "") {
        document.getElementsByClassName("box").disabled = true;
        statusDisplay.innerHTML = "Please Select Player";
        return;
    } else {
        document.getElementsByClassName("box").disabled = false;
    }


    if (currentPlayer === "X") {
        document.getElementById(id).innerHTML = "X";
        currentPlayer = "O";
    }
    else {
        document.getElementById(id).innerHTML = "O";
        currentPlayer = "X";
    }

    document.getElementById(id).style.pointerEvents = 'none';
    statusDisplay.innerHTML = currentPlayerTurn();

    winningConditions.forEach((pattern) => {
        if (box[pattern[0]].innerHTML === box[pattern[1]].innerHTML &&
            box[pattern[1]].innerHTML === box[pattern[2]].innerHTML &&
            box[pattern[0]].innerHTML === `${currentPlayer === 'X' ? 'O' : 'X'}`) {
            statusDisplay.innerHTML = `player ${currentPlayer === 'X' ? 'O' : 'X'} Win!`;
            for (let i = 0; i < 9; i++) {
                document.getElementById(`btn${i}`).style.pointerEvents = 'none';
            }
        }
    });
    if (statusDisplay.innerHTML.includes("Win")) {
        return;
    }

    if (
        box[0].innerHTML !== "" &&
        box[1].innerHTML !== "" &&
        box[2].innerHTML !== "" &&
        box[3].innerHTML !== "" &&
        box[4].innerHTML !== "" &&
        box[5].innerHTML !== "" &&
        box[6].innerHTML !== "" &&
        box[7].innerHTML !== "" &&
        box[8].innerHTML !== ""
    ) {
        statusDisplay.innerHTML = "It's a Draw";
        return;
    }
}

function restart() {
    document.querySelectorAll('.cell').forEach(cell => {
        cell.innerHTML = "";
        cell.style.pointerEvents = 'auto';
    });
    document.getElementById('p1').style.pointerEvents = 'auto';
    document.getElementById('p2').style.pointerEvents = 'auto';
    currentPlayer = "";
    statusDisplay.innerHTML = "Please Select Player";
}
