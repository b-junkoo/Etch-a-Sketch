document.body.onload = createGrid;
let gridLength = 16;

function createGrid () {
    for (let i=1; i<=gridLength*gridLength; i++) {
        const newDiv = document.createElement("div");
        newDiv.classList.add("block");
        const text = document.createTextNode("");
        newDiv.appendChild(text);

        let element = document.getElementById("grid")
        element.appendChild(newDiv)
    }
}

let grid = document.getElementById("grid");

grid.addEventListener("mouseover", e => {
    e.target.style.backgroundColor = "orange";
}, false)

let clear = document.getElementById('clear');
clear.addEventListener("mousedown", () => {
    let blocks = document.querySelectorAll('div.block');
    console.log(blocks);
    blocks.forEach((block) => {
        block.style.backgroundColor = "white";
    })
});

let color = document.getElementById('color');

let eraser = document.getElementById('eraser');
