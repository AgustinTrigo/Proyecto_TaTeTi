let tablero = document.getElementById("table");

const casillas = [
    {id:1, container: ""},
    {id:2, container: ""},
    {id:3, container: ""},
    {id:4, container: ""},
    {id:5, container: ""},
    {id:6, container: ""},
    {id:7, container: ""},
    {id:8, container: ""},
    {id:9, container: ""}
]

// Iconos
let xmark =  `<i class="fa-solid fa-xmark"></i>`;
let circle = `<i class="fa-regular fa-circle"></i>`;

casillas.forEach((elemento, index) => { 
    elemento.container = `<div id="${elemento.id}" class="casilla" onClick="marcador(${index})"></div>`
    tablero.innerHTML += `${elemento.container}`;
})

let contador = 0;
const jugadorUno = [];
const jugadorDos = [];
let referencia = -10;

// Objetos para validar si se completo la linea.

const validarCirculo = {
    A1: false,
    A2: false,
    A3: false,
    B1: false,
    B2: false,
    B3: false,
    C1: false,
    C2: false,
    C3: false,
}

const validarEquis = {
    A1: false,
    A2: false,
    A3: false,
    B1: false,
    B2: false,
    B3: false,
    C1: false,
    C2: false,
    C3: false,
}

// Funcion para marcar el tablero por turnos.


function marcador(index){
    let casilla = index + 1;
    let slot = document.getElementById(`${casilla}`);
    if((jugadorUno.length < 5) && (jugadorUno.length < 5)){ 
        if((contador % 2 == 0) && (!jugadorDos.includes(casilla, -10)) && (!jugadorUno.includes(casilla, -10))){
            slot.innerHTML = circle;
            contador++;
            jugadorUno.push(casilla);
            buscar(jugadorUno, validarCirculo, casilla, referencia, circle);
        }else if((!jugadorUno.includes(casilla, -10)) && (!jugadorDos.includes(casilla, -10))){
            slot.innerHTML = xmark;
            contador++;
            jugadorDos.push(casilla);
            buscar(jugadorDos, validarEquis, casilla, referencia, xmark);
        }
    }
}

// Funcion para validar ganador

function buscar(objeto1, objeto2, celda, referencia, jugador){
    if(objeto1.includes(celda, referencia)){
        switch(celda){
            case 1:
                objeto2.A1 = true;
            break
            case 2:
                objeto2.A2 = true;
            break
            case 3:
                objeto2.A3 = true;
            break
            case 4:
                objeto2.B1 = true;
            break
            case 5:
                objeto2.B2 = true;
            break
            case 6:
                objeto2.B3 = true;
            break
            case 7:
                objeto2.C1 = true;
            break
            case 8:
                objeto2.C2 = true;
            break
            case 9:
                objeto2.C3 = true;
            break
        }
    }

    if((objeto2.A1) && (objeto2.A2) && (objeto2.A3)){
        mensaje(jugador);
    } else if((objeto2.B1) && (objeto2.B2) && (objeto2.B3)){
        mensaje(jugador);
    } else if((objeto2.C1) && (objeto2.C2) && (objeto2.C3)){
        mensaje(jugador);
    } else if((objeto2.A1) && (objeto2.B1) && (objeto2.C1)){
        mensaje(jugador);
    } else if((objeto2.A2) && (objeto2.B2) && (objeto2.C2)){
        mensaje(jugador);
    } else if((objeto2.A3) && (objeto2.B3) && (objeto2.C3)){
        mensaje(jugador);
    } else if((objeto2.A1) && (objeto2.B2) && (objeto2.C3)){
        mensaje(jugador);
    } else if((objeto2.C1) && (objeto2.B2) && (objeto2.A3)){
        mensaje(jugador);
    }
}

function mensaje(jugador){
    document.getElementById("hud").innerHTML = `<h2>GANADOR</h2> ${jugador}`;
}




