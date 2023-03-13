/**
 * TIC TAC TOE
 */
// Puntuacion de los jugadores
let jugadorX = 0;
let jugadorO = 0;

// Variable para el turno de cada jugador
let turno = true;

let tablero = document.getElementsByClassName('casilla');
let terminar=document.getElementsByClassName('terminar');
let reiniciar=document.getElementsByClassName('reiniciar');

terminar[0].setAttribute("onclick", "terminarJuego()");
reiniciar[0].setAttribute("onclick", "reiniciarJuego()");

// Generar eventos de click para todas las casillas del tablero
for (let i = 0; i < tablero.length; i++) {
    // a) Recorrer tablero y hacer setAttribute ("onclick", funcion)
    tablero[i].setAttribute("onclick", "pintaCasilla(" + i + ")");
    // b) Recorrer tablero y crear listener que relacione click con funcion
    // tablero[i].addEventListener("click", pintaCasilla(i));
}

let posicionesX = [];
let posicionesO = [];

let combinacionGanadora = [
    [3, 4, 5],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
    [0, 1, 2],
    [6, 7, 8]
];

function pintaCasilla(posicion) {
    let finalizado = false;
    if (turno) {
        tablero[posicion].textContent = "X";
        posicionesX.push(posicion);
        posicionesX.sort;
        if (posicionesX.length >= 3) {
            finalizado = hayGanador(posicionesX);
        }
    } else {
        tablero[posicion].textContent = "O";
        posicionesO.push(posicion);
        posicionesO.sort;
        if (posicionesO.length >= 3) {
            finalizado = hayGanador(posicionesO);
        }
    }
    tablero[posicion].removeAttribute("onclick");
    if (finalizado) {

        for (let i = 0; i < tablero.length; i++) {
            tablero[i].removeAttribute("onclick");
        }
        if(turno){
            jugadorX+=1;
        }
        else{
            jugadorO+=1;
        }
    }
    turno = !turno;
}

function hayGanador(posicion) {
    let finalizado = false;
    for (let i = 0; i < combinacionGanadora.length; i++) {
        let contador = 0;
        for (let j = 0; j < posicion.length; j++) {
            if (combinacionGanadora[i].includes(posicion[j])) {
                contador++;
            }
        }
        if (contador == 3) {
            finalizado = true;
            for (let k = 0; k < combinacionGanadora[i].length; k++) {
                tablero[combinacionGanadora[i][k]].style.backgroundImage = "repeating-radial-gradient(lightgreen, azure 20%, beige 20%)";
            }
            if (turno) {
                alert("Han ganado las X");
            } else {
                alert("Han ganado las O");
            }
        }
    }
    return finalizado;
}

function terminarJuego(){
console.log("terminar juego");
}

function reiniciarJuego(){
console.log("reiniciar juego");
}