
let getColor = () => document.querySelector("#colorInput").value;
function getContainer() {
    return document.querySelector(".container");
}
function generateDivs(numberOfDivs, container) {
    let boxSize = (container.offsetWidth) / numberOfDivs;
    console.log(boxSize);
    let listOfDivs = [];
    for (let i = 0; i < numberOfDivs; i++) {
        for (let j = 0; j < numberOfDivs; j++) {
            let div = document.createElement("div");
            div.setAttribute("id", i);
            div.setAttribute("class", 'box');
            div.textContent = j
            div.onmouseover = () => {
                div.style.backgroundColor = getColor();
            }
            div.setAttribute("style", `width:${boxSize}px;height:${boxSize}px`)
            container.appendChild(div);
        }

    }
    return listOfDivs;
}
generateDivs(16, getContainer());





