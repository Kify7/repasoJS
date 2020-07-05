// VARIABLES: se pueden inicializar sin valor y su valos se puede ir modificando.
// son variables 
var variable1
var variable1 = true;
var variable1 = 1234;
var variable1= "hello world";
var variable1= false;

// Variables con const no pueden ser modificadas. constantes)
const aprendiendo = 'JS';
const pi = 3.14159;

// Variables con let: Variables locales;

let arreglo = ['esto', 'es', 'un', 'arreglo'];

// SCOPE DE VARIABLES:
//El scope para las variables globales var, permite que este 
//sea mdificado  incluso después de bloques de código:

var musica = 'Rock'; 

if(musica){
    var musica = 'Pop';
    console.log('scope dentro del bloque ' + musica);
}
console.log('scope fuera del bloque ' + musica);

//  Diferencia con SCOPE de variables let
// la variable fuera del bloque se mantiene
// la variable dentro del bloque, solo es válda dentro del bloque

let music = 'B&B'
if(music){
    let music = 'Jazz';
    console.log('scope dentro del bloque ' + music);
}
console.log('scope fuera del bloque ' + music);

// Diferencia con variables CONST constantes:

const mSc = 'Rock&Roll'
if(mSc){
    const mSc = 'Electro';
    console.log('scope dentro del bloque ' + mSc);
}
console.log('scope fuera del bloque ' + mSc);

// Template Strings, (concatenacion en ES6)

const  name = 'Karla';
const adress = 'ID adress';
const nickN= 'Kify';
const edad = 32;
const hobbies = ['crocheting', 'programming', 'reading'];
const romanceRelationship = false;

const descripcion =  `Her name is ${name}, she is ${edad}, and she loves ${hobbies[0]}, and ${hobbies[2]}`;
 console.log(descripcion);
 
// FUNCIONES: bloques de código para reutilizar.
// se crea:
var miNombre = 'Karla';
function saludar(){
    console.log(`Hola! Bienvenidx ${miNombre}`);
}
// se manda llamar
saludar(); 

// FUNCIONES CON PARAMETROS:

function sayHeollo(nickName){
    console.log(`Hi!! Welcome ${nickName}`) ;
}
sayHeollo('Ruby');
sayHeollo('Sammy');
sayHeollo(nickN);
sayHeollo('R2D2');

// ARROW FUNCTIONS
//se crea
const suma = () => console.log('estoy sumando');

// se llama
suma()

//con parametros
 const multiplication = (x, y) => console.log(x * y);
 
multiplication(5,4);
multiplication(6,9);
multiplication(123,12);


// OBJETOS:

//OBJECT LITERAL

const persona = {
    apellido: 'Gonzalez',
    profesion: 'desarrollador',
    edad: 45,
    hobby: 'bailar'
};


//   OBJECT CONSTRUCTOS: onjetos d emanera dinámica
//forma anterior a ES6:

function Tarea(nombre, urgencia) {
    this.nombre = nombre;
    this.urgencia = urgencia;
}

//instancia del objeto:
const tarea1 = new Tarea('Aprender JS', 'urgente');
console.log(tarea1);
const tarea2 = new Tarea('Reparar microondas', 'media');
console.log(tarea2);
const tarea3 = new Tarea('Estudiar', 'baja');
console.log(tarea3);

// PROTOTYPES
function mostrarInfoTarea(task, prioridad){
    return `La tarea ${tarea1.nombre} tiene una prioridad ${tarea1.urgencia}`
}
console.log(mostrarInfoTarea()); //ejemplo sin prototype

//ejemplo con prototype
 
function Task(name, priority){
    this.name = name;
    this.priority = priority;
}

// Añadiendo PROTOTYPE:

Task.prototype.showTask = function() {
    return `Task ${this.name} has a priority ${this.priority}`;
}

const task1 = new Task('learn JS', 'urgent')
const task2 = new Task('do laundry', 'medium')
console.log(task2.showTask());

// Distructoring --> Extraer valores de un objeto:


const learningJS = {
    version: {
        nueva:'ES6',
        anterior: 'ES5'
    },

    frameworks: ['React', 'VueJS', 'AngularJS'],
}

//Destructuring learningJS

const { version, frameworks } = learningJS;
const { nueva } = learningJS.version;

console.log(version, frameworks);


// OBJECT LITERAL ENHANCEMENT
//metodo anterior:
const band = 'Metalica';
const genero = "HEavy Metal";
const canciones = [ 'Master of puppets', 'Seek & destroy', 'Enter Sandman'];


const meatalica = {
    banda: band,
    genero: genero,
    canciones: canciones
}

console.log(meatalica )
// FORMA ACTUAL:

const metallica = {band, genero, canciones};
console.log(metallica);


// FUNCIONES EN OBJETOS
const perro = {
    nombre: 'Pantone',
    raza: 'maltez',
    edad: 10,
    food: 'dogchow',
    jump: true,
    presentarse: function(){
        console.log(`The dog is ${this.nombre}, it is a ${this.raza} dog, and it is ${this.edad} years old`);      
    }
}

perro.presentarse()

// ARREGLOS /. MAP /

const carrito = ['producto 1', 'producto2', 'producto3'];
console.log(carrito);


// añadiendo productos al carrito de compras
// const appContenedor = document.querySelector('#app');
// let html = " ";
// carrito.forEach(producto => {
//     html+=`<li>${producto}</li>`;
// })
//  appContenedor.innerHTML = html;

 //Segundo método:

 carrito.map(producto => {
     return `El producto es: ${producto}`;
 })

console.log(carrito.map);

// OBJECT KEYS
const gato = {
    nombre: 'Haruki',
    raza: 'americano',
    edad: 5,
    food: 'kirland',
    jump: true,
    describirse: function(){
        console.log(`The cat is ${this.nombre}, it is a ${this.raza} cat, and it is ${this.edad} years old`);      
    }
}

//accedemos a las llaves de este objeto:

console.log(Object.keys(gato));
 

/// METODOS /. FIND . /FILTER /.REDUCE

const alumnos = [
    {nombre: 'Pablo', edad: 34, curso: 'JavaScript'},
    {nombre: 'Kren', edad: 27, curso: 'Python'},
    {nombre: 'Felipe', edad: 22, curso: 'Java'},
    {nombre: 'Alejandra', edad: 33, curso: 'PHP'},
    {nombre: 'Enrique', edad: 25, curso: 'SQL'}
]

//Filtar personas mayores de 28
alumnos.filter(alumnos => {
    console.log();
});

const mayores = alumnos.filter(alumnos => {
    return alumnos.edad > 28;
});

console.log(mayores);

/// Encontrar un alumno:

const alejandra = alumnos.filter(alumnos => {
    return alumnos.nombre == 'Alejandra';
});
console.log(alejandra);

//Encontrar el curso PHP
const cursos= alumnos.filter(alumnos => {
    return alumnos.curso == 'PHP';
});

console.log(cursos);

// REDUCE= 
//total de edades

let total = alumnos.reduce((edadTotal, alumnos) => {
    return edadTotal + alumnos.edad;
}, 0);

console.log(total);
console.log('promedio de edad: ', total/alumnos.length);


// PROMISES

const aplicarDescuento = new Promise((resolve, reject) => {
//simulando un llamado asincrono:
setTimeout(() => {
    let descuento = false;
    if(descuento) {
        resolve('Descuelto aplicado');
    } else {
        reject('No se pudo aplicar descuento');
    }
}, 5000);
});

aplicarDescuento
.then(resultado => console.log(resultado))
.catch(reject => console.log(reject)
)

// PROMISES WITH AJAX
const XMLHttpRequest = require('xmlhttprequest');
const decargarUsuarios = cantidad => new Promise((resolve, reject) =>{
    //pasar la cantidad a la API
    const api = `https://randomuser.me/api/?results=${cantidad}`;
    //llamado AJAX
    const xhr = new XMLHttpRequest();
    //abrir la conexión
    xhr.open('GET', api, true );
    // on load
    xhr.onload = () => {
        if(xhr.status === 200){
            resolve(JSON.parse(xhr.responseText).results); // esta linea convierte el string solisitado, a un objeto de javascript para poder ser tratado
        }else {
            reject(Error(xhr.statusText));
        }
    }
    //opcional on error
    xhr.onerror = (error) => reject(error);

    // SEND
    xhr.send();
});

decargarUsuarios(10)
.then(miembros => console.log(miembros),   
)
.catch(
    error => console.error(
        new Error('Hubo un error ' + error)
    )
)


