console.log("Script Loaded");

const gridContainer = document.querySelector(".grid-container");
const sizeInput = document.querySelector(".size-input");
const sizeBtn = document.querySelector(".size-btn");

sizeBtn.addEventListener("click", getGridSize);
createGrid(16);

function createGrid(squaresPerSide){
    gridContainer.innerHTML = ''; // Clear existing grid
    const boxSize = 960 / squaresPerSide; // Calculate the size of each box
    for (let i = 0; i < squaresPerSide* squaresPerSide; i++){
        const box = document.createElement("div");
        box.classList.add("box");
        box.style.height = (`${boxSize}px`);
        box.style.width = (`${boxSize}px`);

        gridContainer.appendChild(box);
    
        box.addEventListener("mouseover", () =>{
            box.classList.add("hover");
        });
    }
}

function getGridSize(){
    let squaresPerSide = parseInt(sizeInput.value);

    if (squaresPerSide && squaresPerSide > 0 && squaresPerSide <=100){
        createGrid(squaresPerSide);
    }
    else{
        alert("Enter a number between 1 - 100");
    }
}








