let lastScroll = window.scrollY;
let bayernScore = 0;
let tsvScore = 0;
let roundsToPlay = 0;
let roundsPlayed = 0;
let gameOver = false;

window.addEventListener('load', function() {
    const loader = document.querySelector('.loader');
    setTimeout(() => {
      loader.classList.add('fade-out');
    }, 1000);
  });

window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    const currentScroll = window.scrollY;
    const bottom = document.documentElement.scrollHeight - window.innerHeight;
    
    if (currentScroll < lastScroll && currentScroll > 60 && currentScroll < bottom - 10) {
        header.classList.remove('hide');
    } else if (currentScroll > lastScroll && currentScroll > 60) {
        header.classList.add('hide');
    }

    lastScroll = currentScroll;
});

const ROWS = 6;
const COLS = 7;
let board = [];
let currentPlayer = 'red';

const gameBoard = document.getElementById('gameBoard');
const message = document.getElementById('message');

// Show round selection modal initially
document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('roundModal').style.display = 'flex';
});

function startGame(rounds) {
    roundsToPlay = rounds;
    roundsPlayed = 0;
    bayernScore = 0;
    tsvScore = 0;
    updateScores();
    document.getElementById('roundModal').style.display = 'none';
    resetGame();
}

function createBoard() {
    board = [];
    gameBoard.innerHTML = '';
    for (let r = 0; r < ROWS; r++) {
        board[r] = [];
        for (let c = 0; c < COLS; c++) {
            board[r][c] = '';
            const cell = document.createElement('div');
            cell.classList.add('cell');
            cell.dataset.row = r;
            cell.dataset.col = c;
            cell.addEventListener('click', () => handleMove(c));
            gameBoard.appendChild(cell);
        }
    }
    updateMessage();
}

function handleMove(col) {
    if (gameOver) return;
    for (let r = ROWS - 1; r >= 0; r--) {
        if (!board[r][col]) {
            board[r][col] = currentPlayer;
            const cell = document.querySelector(
                `.cell[data-row='${r}'][data-col='${col}']`
            );
            cell.classList.add(currentPlayer);
            if (checkWin(r, col)) {
                if (currentPlayer === 'red') {
                    bayernScore++;
                } else {
                    tsvScore++;
                }
                updateScores();
                
                message.textContent = `${currentPlayer === 'red' ? 'Bayern' : '1860'} scores!`;
                gameOver = true;
                
                setTimeout(() => {
                    roundsPlayed++;
                    if (roundsPlayed >= roundsToPlay) {
                        endTournament();
                    } else {
                        resetGame();
                    }
                }, 3000);
                return;
            }
            if (board.flat().every(cell => cell)) {
                message.textContent = `It's a draw! No goal this round.`;
                gameOver = true;
                setTimeout(() => {
                    roundsPlayed++;
                    if (roundsPlayed >= roundsToPlay) {
                        endTournament();
                    } else {
                        resetGame();
                    }
                }, 2000);
                return;
            }
            currentPlayer = currentPlayer === 'red' ? 'blue' : 'red';
            updateMessage();
            return;
        }
    }
    const topCell = document.querySelector(
        `.cell[data-row='0'][data-col='${col}']`
    );
    topCell.classList.add('shake');
    setTimeout(() => topCell.classList.remove('shake'), 400);
}



function updateScores() {
    document.getElementById('bayernScore').textContent = bayernScore;
    document.getElementById('tsvScore').textContent = tsvScore;
}

function updateMessage() {
    message.textContent = `${currentPlayer === 'red' ? 'Bayern' : '1860'}'s turn`;
}

function checkWin(row, col) {
    const directions = [
        { dr: 0, dc: 1 },
        { dr: 1, dc: 0 },
        { dr: 1, dc: 1 },
        { dr: 1, dc: -1 }
    ];
    for (const { dr, dc } of directions) {
        let count = 1;
        for (let d = -1; d <= 1; d += 2) {
            let r = row + dr * d;
            let c = col + dc * d;
            while (
                r >= 0 && r < ROWS &&
                c >= 0 && c < COLS &&
                board[r][c] === currentPlayer
            ) {
                count++;
                r += dr * d;
                c += dc * d;
            }
        }
        if (count >= 4) return true;
    }
    return false;
}

function endTournament() {
    if (bayernScore > tsvScore) {
        message.textContent = `Bayern wins the tournament ${bayernScore}-${tsvScore}!`;
    } else if (tsvScore > bayernScore) {
        message.textContent = `1860 wins the tournament ${tsvScore}-${bayernScore}!`;
    } else {
        message.textContent = `The tournament ends in a draw ${bayernScore}-${tsvScore}!`;
    }
    gameOver = true;
    setTimeout(() => {
        document.getElementById('roundModal').style.display = 'flex';
    }, 5000);
}

function resetGame() {
    currentPlayer = Math.random() < 0.5 ? 'red' : 'blue';
    gameOver = false;
    createBoard();
}