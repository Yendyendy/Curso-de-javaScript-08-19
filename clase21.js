//24. MOdificando un prototipo

// En esta clase veremos cómo se modifican las clases de herencias. JavaScript funciona con una estructura
//  orientada a objetos y cada objeto tiene una propiedad privada que mantiene un enlace a otro objeto llamado prototipo.

function Persona(nombre, apellido, altura) {
    this.nombre = nombre
    this.apellido = apellido
    this.edad= 20
    this.altura = altura

    // return this (no hace falta, está de forma implícita en el navegador, y JS)
} 

Persona.prototype.saludar = function (){
    console.log(`Hola, mi nombre es ${this.nombre}`)
}

// Persona.prototype.altoNo = function (){
//     if (this.altura>=1.8){
//         console.log('Soy alto.')
//     }else{
//         console.log('No soy alto.')
//     }
// }

// Persona.prototype.altoNo = function (){
//     return persona.altura > 1.8
// }
Persona.prototype.altoNo = function(){
    return this.altura > 1.8
}

var can = new Persona('Can', 'Chen', 1.73)
var sacha = new Persona('Sacha', 'Gomez', 2.22)

can.saludar()
console.log(can.altoNo())

sacha.saludar()
console.log(sacha.altoNo())


//25.El contexto de las funciones: quién es THIS
// n esta clase explicamos por qué al introducir el arrow function salió un error. 
// El error del contexto de this en javascrip es uno de los errores más comunes.

// Recuerda que dentro de la arrow function, this está haciendo referencia al espacio global, a windows.