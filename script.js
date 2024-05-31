console.log("Script Loaded");

const gridContainer = document.querySelector(".grid-container");

let boxNum = 256;

for (let i = 0; i < boxNum; i++){
    const box = document.createElement("div");
    box.classList.add("box");
    gridContainer.appendChild(box);

    box.addEventListener("mouseover", () =>{
        box.classList.add("hover");
    });
}








