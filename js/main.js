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

const loadTablero = () => { localStorage.setItem("tablero", JSON.stringify(casillas))};


const getTablero = () => {
    return tableroLocal = JSON.parse(localStorage.getItem("tablero"));
}

loadTablero();

let xmark =  `<i class="fa-solid fa-xmark"></i>`;
let circle = `<i class="fa-regular fa-circle"></i>`;

casillas.forEach((elemento, index) => { 
    elemento.container = `<div id="${elemento.id}" class="casilla" onClick="marcador(${index})"></div>`
    tablero.innerHTML += `${elemento.container}`;
})

let contador = 0;
const jugadorUno = [];
const jugadorDos = [];

function marcador(index){
    let casilla = index + 1;
    let slot = document.getElementById(`${casilla}`);
    if((jugadorUno.length < 5) && (jugadorUno.length < 5)){ 
        if((contador % 2 == 0) && (!jugadorDos.includes(casilla, -1)) && (!jugadorUno.includes(casilla, -1))){
            console.log((!jugadorDos.includes(casilla, -1)))
            console.log((!jugadorUno.includes(casilla, -1)))
            slot.innerHTML = circle;
            contador++;
            jugadorUno.push(index + 1);
            console.log(`Jugador A ${jugadorUno}`);
        }else if((!jugadorUno.includes(casilla, -1)) && (!jugadorDos.includes(casilla, -1))){
            console.log((!jugadorDos.includes(casilla, -1)))
            console.log((!jugadorUno.includes(casilla, -1)))
            slot.innerHTML = xmark;
            contador++;
            jugadorDos.push(index + 1);
            console.log(`Jugador B ${jugadorDos}`);
        }
    }
    console.log(contador);
}







