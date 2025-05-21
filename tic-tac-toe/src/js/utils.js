function resetGame(board) {
    for (let i = 0; i < board.length; i++) {
        board[i] = '';
    }
}

function checkDraw(board) {
    return board.every(cell => cell !== '');
}

function updateDisplay(message) {
    const displayElement = document.getElementById('game-message');
    displayElement.textContent = message;
}