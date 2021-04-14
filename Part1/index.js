const board = [""];

function play(clickedId) {
    const clickedElement = document.getElementById(clickedId);
    const playerSpan = document.getElementById("player")

    if (!board[clickedId]) {
        board[clickedId] = player.innerText;
        clickedElement.innerText = playerSpan.innerText;

        if (checkWinner()) {
            window.alert(`Player ${playerSpan.innerText} Wins!`)
            reset();
        }
        else if (!board.includes(undefined) && board.length === 9) {
            window.alert("Cat's Game");
            reset();
        }

        playerSpan.innerText === 'X' ? player.innerText = 'O' : player.innerText = 'X';
    }
    console.log(board.length);
}

function checkWinner() {
    if ((board[0] !== undefined && board[0] === board[1] && board[1] == board[2])

        || (board[3] !== undefined && board[3] === board[4] && board[5] == board[3])

        || (board[6] !== undefined && board[6] === board[7] && board[8] == board[6])

        || (board[0] !== undefined && board[0] === board[3] && board[3] == board[6])

        || (board[1] !== undefined && board[1] === board[4] && board[1] == board[7])

        || (board[2] !== undefined && board[2] === board[5] && board[8] == board[2])

        || (board[0] !== undefined && board[0] === board[4] && board[8] == board[0])

        || (board[2] !== undefined && board[2] === board[4] && board[4] == board[6])) {
        return true;
    }
    return false;
}

function reset(){
    for (let i = 0; i < 9; i++) {
        document.getElementById(i).innerText = "";
        board[i] = undefined;
    }
    
}