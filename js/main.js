let tablero = document.getElementById("table");
let casilla = document.querySelector(".casilla");

let xmark =  `<i class="fa-solid fa-xmark"></i>`;
let circle = `<i class="fa-regular fa-circle"></i>`;

for(let i = 1; i <= 9; i++){
    tablero.innerHTML += `<div id="${i}" class="casilla"></div>`
}


