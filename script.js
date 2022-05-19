
const picker = document.querySelector('.picker');
const black = document.querySelector('.black');
const rainbow = document.querySelector('.rainbow');
const eraser = document.querySelector('.eraser');
const clear = document.querySelector('.clear');
const range = document.querySelector('.range');
const container = document.querySelector('.container');

/**Initialize */
setGrids(16);
let brushColor = "#333333";
let pixelSize = 16;

/**Get picker value for brush color */
picker.addEventListener('input', (e) => {
    brushColor = e.target.value;
    eraser.classList.remove('clicked');
    black.classList.remove('clicked');
    rainbow.classList.remove('clicked');
})

/**Get pixel size and draw canvas */
range.addEventListener('input', (e) => {
    pixelSize = e.target.value;
    setGrids(pixelSize);
})

/**Set brush to black */
black.addEventListener('click', (e) => {
    brushColor = "#333333";
    black.classList.add('clicked');
    eraser.classList.remove('clicked');
    rainbow.classList.remove('clicked');
})

/**Set brush to rainbow / random */
rainbow.addEventListener('click', (e) => {
    brushColor = 'hsla(' + (Math.random() * 360) + ', 100%, 50%, 1)';
    rainbow.classList.add('clicked');
    eraser.classList.remove('clicked');
    black.classList.remove('clicked');
})

/**Set bruch to white */
eraser.addEventListener('click', (e) => {
    brushColor = "white";
    eraser.classList.add('clicked');
    rainbow.classList.remove('clicked');
    black.classList.remove('clicked');
})

/**Clear canvas */
clear.addEventListener('click', clearGrids);


/**Helper functions */
function setGrids(p) {
    removeGrids(); 
    /**Create grids on certain pixel size*/
    for (let i = 0; i < p * p; i++) {
        let grid = document.createElement('div');
        grid.className = 'grid';
        grid.style.width = `${container.clientWidth / p}px`;
        grid.style.height = grid.style.width;
        grid.addEventListener('mouseenter', e => {
            e.target.style.backgroundColor = brushColor;
        });
        container.appendChild(grid);
    }
}

function getGrids() {
    return Array.from(document.querySelectorAll('.grid'));
}

function clearGrids() {
    let grids = getGrids();
    grids.forEach((grid) => {
        grid.style.backgroundColor = 'white';
    })
}

function removeGrids() {
    let grids = getGrids();
    if (grids) {
        grids.forEach((grid) => {
            grid.remove();
        })
    }
}

