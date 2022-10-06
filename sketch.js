const colorPicker = document.getElementById('colorPicker');
const container = document.getElementById('container');






function makeRows(rows,cols) {
    container.style.setProperty('--grid-rows', rows);
    container.style.setProperty('--grid-cols', cols);

    for (c = 0; c < (rows * cols); c++) {
        let grid = document.createElement('div');
        grid.classList.add('grid-item');
        grid.addEventListener('mousedown', function() {
            grid.style.backgroundColor = colorPicker.value;
        }) 
        container.appendChild(grid);
    };
};



makeRows(16,16);