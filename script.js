let body = document.querySelector("body");
let button = document.querySelector(".reset");

let container;

generateGrid(16);

button.addEventListener('click', () => {
    let dimentions = prompt("How many rows and columns do you want?");
    generateGrid(dimentions);
})

//functions

function generateGrid(number){
    
    if(document.contains(document.querySelector(".grid-container"))){
        body.removeChild(document.querySelector(".grid-container"));
    }

    title = document.createElement('h1');
    title.textContent = "Etch-a-Sketch!";
    body.appendChild(title);

    para = document.createElement('p');
    para.textContent = "By Joe Blakey";
    body.appendChild(para);

    container = document.createElement('div');
    container.setAttribute("class", "grid-container");
    container.setAttribute("style", "grid-template: repeat(" + number + ", 1fr) / repeat(" + number + ",1fr)");
    body.appendChild(container);

    for (let i=0; i < number * number; i++){

        let box = document.createElement("div");
        box.setAttribute("class", "grid-item");
        container.appendChild(box);

        box.addEventListener("mouseenter", () => {
            box.setAttribute("class", "permahover");
            box.setAttribute("style", "background-color:" + randomColor());
        })

    }
}

function randomColor(){
    return 'hsla(' + (Math.random() * 360) + ', 100%, 50%, 1)';
}