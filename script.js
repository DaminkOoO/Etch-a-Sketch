
let getColor = () => document.querySelector("#colorInput").value;
let container = document.querySelector(".container");
let slider = document.querySelector("#myRange");
let sliderSpan = document.querySelector(".sliderValue");
const resetButton = document.querySelector("#reset");
let isClicking = false;
container.onmousedown = () => {

    isClicking = true;
}
container.onmouseup = () => {
    isClicking = false;

}
function render() {
    sliderSpan.textContent = `${slider.value} x ${slider.value}`;
    clearGrid(container);
    generateDivs(slider.value, container);
}

function generateDivs(numberOfDivs, container) {
    let boxSize = (container.offsetWidth) / numberOfDivs;
    let listOfDivs = [];
    numberOfDivs = numberOfDivs * numberOfDivs;
    for (let j = 0; j < numberOfDivs; j++) {
        let div = document.createElement("div");
        div.setAttribute("id", j);
        div.setAttribute("class", 'box');
        div.setAttribute("draggable", 'false');
        div.style.backgroundColor = '#FFF5EA'
        div.onmouseover = () => {
            if (isClicking)
                div.style.backgroundColor = getColor();
        }
        div.setAttribute("style",
            `width:${boxSize}px;height:${boxSize}px`)
        container.appendChild(div);
    }

    return listOfDivs;
}
function clearGrid(container) {
    container.innerHTML = '';
}
function resetGrid(container) {
    console.log("rest");
    const boxes = document.querySelectorAll('.box');
    boxes.forEach(box => {
        box.style.backgroundColor = '#FFF5EA';
    });
}

