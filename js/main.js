let tablero = document.getElementById("table");


/*
for(let i = 1; i <= 9; i++){
    
    tablero.innerHTML += `<div id="1" class="casilla" onClick="marcador()"></div>`
}
*/

const casillas = [
    {
        id:1,
        container: ""
    },
    {
        id:2,
        container: ""
    },
    {
        id:3,
        container: ""
    },
    {
        id:4,
        container: ""
    },
    {
        id:5,
        container: ""
    },
    {
        id:6,
        container: ""
    },
    {
        id:7,
        container: ""
    },
    {
        id:8,
        container: ""
    },
    {
        id:9,
        container: ""
    },
]

let xmark =  `<i class="fa-solid fa-xmark"></i>`;
let circle = `<i class="fa-regular fa-circle"></i>`;

casillas.forEach((elemento, index) => { 
    elemento.container = `<div id="${elemento.id}" class="casilla" onClick="marcador(${index})"></div>`
    tablero.innerHTML += `${elemento.container}`;
})


function marcador(index){
    console.log(index);
}





