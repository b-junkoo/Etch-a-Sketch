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

let toggle = true;
function colorIn(e) {
    e.target.style.backgroundColor="orange"
}

grid.addEventListener("mousedown", () => {
    toggle = !toggle;
    grid.addEventListener("mouseover", colorIn ,false);
    if (toggle) {
        grid.removeEventListener("mouseover", colorIn, false);
    }
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
color.addEventListener("mousedown", () => {
    grid.addEventListener("mouseover", e => {
        e.target.style.backgroundColor = "orange";
    }, false)
})

let eraser = document.getElementById('eraser');
eraser.addEventListener("mousedown", () => {
    grid.addEventListener("mouseover", e => {
        e.target.style.backgroundColor = "white";
    }, false)
})
