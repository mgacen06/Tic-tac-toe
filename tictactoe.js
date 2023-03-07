/**
 * TIC TAC TOE
 */

let jugador1 = 'X';
let jugador2 = 'O';

/**
 * [0, 1, 2]
 * [3, 4, 5]
 * [6, 7, 8]
 */
// let tablero = ['','','','','','','','',''];
let tablero = document.getElementsByClassName('casilla');

/**
 * [3, 4, 5]
 * [0, 3, 6]
 * [1, 4, 7]
 * [2, 5, 8]
 * [0, 4, 8]
 * [2, 4, 6]
 */
let combinacionGanadora = [
    [3, 4, 5],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];




function GANAR_X(){
    let actual = [];
    // Recorrer las casillas para ver su contenido
    for (let i = 0; i < tablero.length; i++){
        if(tablero[i].innerHTML == 'X'){
            actual.push(i);
        }
    }
    /**
     * Utilizar Array.include para comprobar si una de las combinaciones correctas
     * esta incluida en mi array de actual
     */
    for(let i = 0; i < combinacionGanadora.length ; i++){
        if(actual.includes(combinacionGanadora[i][0]) && actual.includes(combinacionGanadora[i][1]) && actual.includes(combinacionGanadora[i][2])){
            alert('GANAN LAS X');
        }
    }
}

function GANAR_O(){
    let actual = [];
    // Recorrer las casillas para ver su contenido
    for (let i = 0; i < tablero.length; i++){
        if(tablero[i].innerHTML == 'O'){
            actual.push(i);
        }
    }
    /**
     * Utilizar Array.include para comprobar si una de las combinaciones correctas
     * esta incluida en mi array de actual
     */
    for(let i = 0; i < combinacionGanadora.length ; i++){
        if(actual.includes(combinacionGanadora[i][0]) && actual.includes(combinacionGanadora[i][1]) && actual.includes(combinacionGanadora[i][2])){
            alert('GANAN LAS O');
        }
    }
}

/**
 * La funcion ponerFicha pide al usuario una posicion para insertar la ficha.
 * Si la posicion esta vacia, inserta y en caso contrario, vuelve a pedir la posicion
 */
function ponerFicha(){
    /**
     * Utilizamos el prompt para recoger la casilla del usuario 
     */
    let c = prompt('Dime una casilla donde colocar la ficha');
    console.log(c);
    
    if(tablero[parseInt(c)].innerHTML == ''){
        tablero[parseInt(c)].innerHTML = 'X';
        GANAR_X();
    }else{
        alert('Esta casilla esta ocupada');
        ponerFicha();
    }
}
// ponerFicha();