// Crar variables
// var - nombre - signo igual - valor.

var aprendiendo99 = true;

aprendiendo99 = false;
aprendiendo99 = 'Aprendiendo JS';
aprendiendo99 = 100;

console.log(aprendiendo99);

// variables const let y const 
//const siempre tiene un valor de inicio y nunca cambia. CONSTANTE

const aprendiendo = 'valor de inicio';
console.log(aprendiendo);

// variable con let ( muy similar a var)

let aprendiendo2 = true;
console.log(aprendiendo2);

// SCOPE
//saber cuando una variable está o no dispnible y en qué parte d etu programa
//ejemplo: e el siguiente ejemplo, la variable musica se reescribe por completo, y tanto dentro como fuera del if se imprime "rap" en a consola.
var musica = 'Rock';

if(musica) {
    var musica = 'rap';
    console.log('dentro del IF', musica);
}
console.log('fuera del IF', musica);
// Termia ejemplo de SCOPE con var

//SCOPE con Let

let music = 'Rock';

if(music) {
    let music = 'rap';
    console.log('dentro del IF2', music);
}
console.log('fuera del IF2', music);

// Termina ejemplo de SCIPE con let

//SCOPE con const

const musique = 'Rock';

if(musique) {
    const musique = 'rap';
    console.log('dentro del IF3', musique);
}
console.log('fuera del IF3', musique);

//Template strings

const nombre = 'Karla';
let trabajo = 'Developer';

//Concatenar en JS simple:(forma anterior)

console.log('Nombre:' + nombre + ', Trabajo:' + trabajo);

//Concatenar en ES6 :
console.log(`Nombre: ${nombre}, Trabajo: ${trabajo}`);

//Concatenar múltiples líneas en JS simple:

const contenedorApp = document.querySelector('#app');
let html= '<ul>' +
                '<li> Nombre:' + nombre +'</li>' +
                '<li> Trabajo:' + trabajo +'</li>' +
            '</ul>';

contenedorApp.innerHTML = html;

// Concatenar con ES6:

const contenedorApp2 = document.querySelector('#app');
let html2 = `
        <ul>
            <li>Nombre: ${nombre} </li>
            <li>Trabajo: ${trabajo} </li>
        </ul>
        `;

contenedorApp2.innerHTML = html2;

