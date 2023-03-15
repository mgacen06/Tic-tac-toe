/**
 * TIC TAC TOE
 */

// VARIABLES FUERA DEL REINICIO DEL JUEGO
// Puntuacion de los jugadores
let jugadorX = 0;
let jugadorO = 0;
let contador = 0;

// Posiciones ocupadas
let posicionesX;
let posicionesO;

let finalizado = false;
let turno = true;
let jugador = "";

// Tablero
let tablero = document.getElementsByClassName('casilla');

//Mostrar a quien le toca
let quienJuega = document.getElementById("quienJuega");
// Mostrar contador
let turnoJugador = document.getElementById("turno");
// Contador tiempo
let x;

//Puntuaciones
let puntosX =document.getElementById("puntosX");
let puntosO =document.getElementById("puntosO");
puntosX.classList.add("bordeExterior");
puntosO.classList.add("bordeExterior");


//Botones reiniciar y terminar
let terminar = document.getElementById('terminar');
let reiniciar = document.getElementById('reiniciar');
reiniciar.setAttribute("onclick", "reiniciarJuego()");
terminar.setAttribute("onclick", "terminarJuego()");

// Combinaciones ganadoras
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

// Hacer que empiece al cargar por primera ver
document.addEventListener("load", reiniciarJuego());

//VARIABLES DENTRO DEL REINICIO DEL JUEGO:

function reiniciarJuego() {
    // Variable para el turno de cada jugador
    turno = true;
    jugador = "";
    finalizado = false;
    puntosX.textContent=jugadorX;
    puntosO.textContent=jugadorO;

    //posiciones recogidas inicio vacio
    posicionesX = [];
    posicionesO = [];

    x = 5;
    if (contador == 0) {
        window.setInterval(function () {
            turnoJugador.innerHTML = x;
            if (finalizado) {
                turnoJugador.innerHTML = "FIN";
            }
            else {
                x--;
            }
            if (turnoJugador.textContent == 0) {
                x = 5;
                turno = !turno;
                if (turno) {
                    jugador = "X";
                } else {
                    jugador = "O";
                }
                quienJuega.textContent = `Turno de las ${jugador}: `;
            }
        }, 1000);
    }

    // Creacion del tablero
    // Generar eventos de click para todas las casillas del tablero
    for (let i = 0; i < tablero.length; i++) {
        // a) Recorrer tablero y hacer setAttribute ("onclick", funcion)
        tablero[i].setAttribute("onclick", "finalizado=pintaCasilla(" + i + ")");
        tablero[i].textContent = "";
        tablero[i].style.backgroundColor = "#120458";
        // b) Recorrer tablero y crear listener que relacione click con funcion
        // tablero[i].addEventListener("click", pintaCasilla(i));
    }
    contador++;
}

// FUNCIONES FUERA DE REINICIO:

// FUNCION PRINCIPAL
//Poner X o O en la casilla seleccionada
function pintaCasilla(posicion) {
    let finalizado = false;
    if (turno) {
        tablero[posicion].textContent = "X";
        tablero[posicion].style.color="#ff124f"
        tablero[posicion].classList.add("bordeExterior");

        posicionesX.push(posicion);
        posicionesX.sort;
        jugador = "O";
        quienJuega.textContent = `Turno de las ${jugador}: `;
        if (posicionesX.length >= 3) {
            finalizado = hayGanador(posicionesX);
        }
    } else {
        tablero[posicion].textContent = "O";
        tablero[posicion].style.color="#7a04eb"
        tablero[posicion].classList.add("bordeExterior");

        posicionesO.push(posicion);
        posicionesO.sort;
        jugador = "X";
        quienJuega.textContent = `Turno de las ${jugador}: `;
        if (posicionesO.length >= 3) {
            finalizado = hayGanador(posicionesO);
        }
    }
    tablero[posicion].removeAttribute("onclick");
    if (finalizado) {

        for (let i = 0; i < tablero.length; i++) {
            tablero[i].removeAttribute("onclick");
        }
        if (turno) {
            jugadorX += 1;
        }
        else {
            jugadorO += 1;
        }
    }
    turno = !turno;
    x = 5;
    return finalizado;
}

// Si hay ganador avisa por alert y cambia color casillas ganadoras
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
            if (turno) {
                alert("Han ganado las X");
                for (let k = 0; k < combinacionGanadora[i].length; k++) {
                    tablero[combinacionGanadora[i][k]].style.backgroundColor = "#7a04eb";
                }
            } else {
                alert("Han ganado las O");
                for (let k = 0; k < combinacionGanadora[i].length; k++) {
                    tablero[combinacionGanadora[i][k]].style.backgroundColor = "#ff124f";
                }
            }
        }
    }
    return finalizado;
}

// Lo que se hace al darle a terminar juego, todo a 0
function terminarJuego() {
    console.log("terminar juego");
    jugadorX = 0;
    jugadorO = 0;
    puntosX.textContent=jugadorX;
    puntosO.textContent=jugadorO;
    finalizado=true;
    turnoJugador.innerHTML = "FIN";
}