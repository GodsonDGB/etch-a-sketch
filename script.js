const container = document.getElementById('container');
const resetBtn = document.getElementById('reset');

function clearGrid() {
    container.innerHTML = '';
}

function createSquare(size) {
    const square = document.createElement('div');
    square.classList.add('square');
    square.style.width = `${size}px`;
    square.style.height = `${size}px`;
    square.dataset.opacity = 0;

    square.addEventListener('mouseenter', () => applyHoverEffect(square));

    return square;
}


function applyHoverEffect(square) {
    const {r, g, b} = getRandomColor();
    let opacity = parseFloat(square.dataset.opacity);

    if (opacity < 1) opacity += 0.1;
    square.dataset.opacity = opacity;

    square.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
    square.style.opacity = opacity;
}

function createGrid(size) {
    clearGrid();
    const squareSize = 960 / size;

    for (let i = 0; i < size * size; i++){
        const square = createSquare(squareSize);
    container.appendChild(square);
    }
}

function getRandomColor() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);

    return {r, g, b};
}

function handleSet () {
    let newSize = parseInt(prompt('Taille de la grille ? (max 100'), 16);
    if (isNaN(newSize) || newSize < 1 || newSize > 100) {
        alert('Veuillez entrer un nombre entre 1 et 100');
        return;
    }
    createGrid(newSize);
}

function init () {
    createGrid(16);
    resetBtn.addEventListener('click', handleSet);
}

init();