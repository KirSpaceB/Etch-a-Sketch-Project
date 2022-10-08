const colorPickerMode = document.getElementById('colorPicker');

var activeMode = 'colorPicker.value';

function currentMode(mode) {
    activeMode = mode;
}



function createGrid(size) {
    let board = document.getElementById('board');
    board.style.gridTemplateColumns = `repeat(${size}, 1fr)`
    board.style.gridTemplateRows = `repeat(${size}, 1fr)`
    
    gridSize = size * size;

    for (i = 0; i < gridSize; i++) {

        let grid = document.createElement('div');

        grid.addEventListener('mousedown' && 'mouseover', colorPickerModeX)

        grid.style.backgroundColor = 'white';

        board.insertAdjacentElement('beforeend', grid);
    }
}

function changeSize(input) {
    if (input >= 2 || input <= 100) {
        createGrid(input);
    } else {
        console.log('error, too many squares');
    }
}

function resetGrid() {
    board.innerHTML = '';
}

function colorPickerModeX() {
    this.style.backgroundColor = colorPicker.value;

    if (activeMode === 'black') {
        this.style.backgroundColor = activeMode;
    } else if (activeMode === 'random') {
        this.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`
    } else if (activeMode === 'white') {
        this.style.backgroundColor = 'white'
    } else {
        console.log('error');
    }
};

//were trying to create multiple functions to have different modes in out etch a sketch