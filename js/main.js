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

// Objetos para validar si se completo la linea.

const validacionesCirculo = {
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

const validacionesXmark = {
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
            validar(jugadorUno, validacionesCirculo);
        }else if((!jugadorUno.includes(casilla, -10)) && (!jugadorDos.includes(casilla, -10))){
            slot.innerHTML = xmark;
            contador++;
            jugadorDos.push(casilla);
            validar(jugadorDos, validacionesXmark);
        }
    }
}

// Funcion para validar ganador

function validar(objeto1, objeto2){
    if(objeto1.includes(1,-10)){
        objeto2.A1 = true;
    }
    if(objeto1.includes(2,-10)){
        objeto2.A2 = true;
    }
    if(objeto1.includes(3,-10)){
        objeto2.A3 = true;
    }
    if(objeto1.includes(4,-10)){
        objeto2.B1 = true;
    }
    if(objeto1.includes(5,-10)){
        objeto2.B2 = true;
    }
    if(objeto1.includes(6,-10)){
        objeto2.B3 = true;
    }
    if(objeto1.includes(7,-10)){
        objeto2.C1 = true;
    }
    if(objeto1.includes(8,-10)){
        objeto2.C2 = true;
    }
    if(objeto1.includes(9,-10)){
        objeto2.C3 = true;
    }
    if((objeto2.A1 == true) && (objeto2.A2 == true) && (objeto2.A3 == true)){
        document.getElementById("hud").innerHTML = "<h2>GANASTE</h2>";
    }
    if((objeto2.B1 == true) && (objeto2.B2 == true) && (objeto2.B3 == true)){
        document.getElementById("hud").innerHTML = "<h2>GANASTE</h2>";
    }
    if((objeto2.C1 == true) && (objeto2.C2 == true) && (objeto2.C3 == true)){
        document.getElementById("hud").innerHTML = "<h2>GANASTE</h2>";
    }
    if((objeto2.A1 == true) && (objeto2.B1 == true) && (objeto2.C1 == true)){
        document.getElementById("hud").innerHTML = "<h2>GANASTE</h2>";
    }
    if((objeto2.A2 == true) && (objeto2.B2 == true) && (objeto2.C2 == true)){
        document.getElementById("hud").innerHTML = "<h2>GANASTE</h2>";
    }
    if((objeto2.A3 == true) && (objeto2.B3 == true) && (objeto2.C3 == true)){
        document.getElementById("hud").innerHTML = "<h2>GANASTE</h2>";
    }
    if((objeto2.A1 == true) && (objeto2.B2 == true) && (objeto2.C3 == true)){
        document.getElementById("hud").innerHTML = "<h2>GANASTE</h2>";
    }
    if((objeto2.C1 == true) && (objeto2.B2 == true) && (objeto2.A3 == true)){
        document.getElementById("hud").innerHTML = "<h2>GANASTE</h2>";
    }

}







