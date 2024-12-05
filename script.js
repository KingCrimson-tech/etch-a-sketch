const container = document.querySelector('.container')
const btn = document.querySelector('button');
const rainBtn = document.querySelector('.rainbow');
const defaultBtn = document.querySelector('.black-button');
const eraser = document.querySelector('.eraser');

function setColor() {
    const colors = ['rgb(148, 0, 211)', 'rgb(75, 0, 130)', 'rgb(0, 0, 255)', 'rgb(0, 255, 0)', 'rgb(255, 255, 0)', 'rgb(255, 127, 0)', 'rgb(255, 0 , 0)'];
    let rgbColor = colors[Math.floor(Math.random() * colors.length)];

    return rgbColor;   
}

let defaultColor = 'black';
let rainbowEnable = false;
let defaultEnable = false;
let eraserEnable = false;

rainBtn.addEventListener('click', () => {
    rainbowEnable = true;
    defaultEnable = false;
    eraserEnable = false;
});

defaultBtn.addEventListener('click', () => {
    defaultEnable = true;
    rainbowEnable = false;
    eraserEnable = false;
});

eraser.addEventListener('click', () => {
    eraserEnable = true;
    rainbowEnable = false;
    defaultEnable = false;
});

function createGrid(size) {
    container.replaceChildren();
    for(let i = 1; i <= size * size; i++) {
        let div = document.createElement('div');
        div.style.cssText = "border: 1px solid black;";
        div.style.backgroundColor = 'white';
        div.style.width = 600 / size + "px";
        div.style.height = 600 /size + "px";
        div.addEventListener('mouseover', () => {
            if(rainbowEnable){
                div.style.backgroundColor = setColor();
            } else if (defaultEnable) {
                div.style.backgroundColor = defaultColor;
            } else if (eraserEnable){
                div.style.backgroundColor = 'white';
            }
        });
        container.appendChild(div);
    }
}

btn.addEventListener('click', () => {
    size = prompt('Enter grid size)');
    if (size > 100){
        return alert('Please select a lesser size');
    }
    createGrid(size);
});

createGrid(16);