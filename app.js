/**
 * getElementById
 * Metodo en JavaScript proporciona el acceso a un elemento con un id correspondiente.
 * 
 * SINTAXIS:
 * document.getElementById(ID_DEL_ELEMENTO);
 * 
 * innerHTML / textContent
 * Recoge el texto de un elemento HTML
 * 
 * classList
 * Recoge un array con los nombres de las clases de un elemento
 * 
 */

// Guardo en variable el elemento con id 'parrafo' que esta en el documento HTML
let variable = document.getElementById('parrafo');
console.log(variable.innerHTML);
console.log(variable.textContent);
console.log(variable.classList);

let contenedor = document.getElementById('contenedor');
console.log(contenedor);

/**
 * getElementsByClassName
 * Metodo en JavaScript proporciona el acceso a los elementos con una clase determinada
 * 
 * SINTAXIS:
 * document.getElementsByClassName(CLASE_DEL_ELEMENTO);
 * 
 */
let claseFila = document.getElementsByClassName('fila');
console.log(claseFila);

let casilla3 = document.getElementsByClassName('casilla')[2];
casilla3.innerHTML = 'Estamos en la casilla numero 3';

/** 
 * Ejercicio.
 * Recoge todas capacidades de las mesas del objeto 'contenido' e introducelas como
 * texto en los elementos con clase 'casilla' dentro del HTML
*/
let contenido =  {
    mesa1: {
        capacidad : 5
    },
    mesa2: {
        capacidad : 8
    },
    mesa3: {
        capacidad : 6
    },
    mesa4: {
        capacidad : 4
    },
    mesa5: {
        capacidad : 2
    },
    mesa6: {
        capacidad : 1
    },
    mesa7: {
        capacidad : 4
    },
    mesa8: {
        capacidad : 2
    },
    mesa9: {
        capacidad : 1
    }
};

/**
 * Procedimiento.
 * 1. Guardo en una variable los elementos con clase 'casilla'
 * 2. Realiza un FOR..IN para recorrer las mesas de la variable 'contenido'
 * 3. Realizar un innerHTML para insertar el valor de 'capacidad' en la casilla correspondiente.
 * 
 */

/** Paso 1. 
 * Guardar todas las etiquetas que tienen clase 'casilla' en una variable.
 * 
 * [0] => Casilla linea 26
 * [1] => Casilla linea 27
 * [2] => Casilla linea 28
 * ...
 */
let casillas = document.getElementsByClassName('casilla');

/**
 * Paso 2.
 * Recorrer el FOR .. IN para tener acceso a todos los elementos del objeto 'contenido'
 */
let contador = 0;
for(mesa in contenido){
    console.log(contenido[mesa]['capacidad']);
    // Paso 3. Realizar el innerHTML de cada capacidad
    casillas[contador].innerHTML += contenido[mesa]['capacidad'];
    contador++;
    casillas[contador].style.backgroundColor = 'blue';
    casillas[contador].style.color = 'white';
    casillas[contador].style.fontSize = '30px';
}
