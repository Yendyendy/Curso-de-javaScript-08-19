//23.Cómo funcionan las clases en JavaScript

// Las clases son funciones cuya sintaxis tiene dos componentes:

// expresiones
// declaraciones
// En esta clase veremos el uso de this. Dentro de una función,
// el valor de this depende de cómo es llamada ésta.

// Reto: agrega el atributo altura y la función soyAlto.


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

Persona.prototype.altoNo = function (){
    if (this.altura>=1.8){
        console.log('Soy alto.')
    }else{
        console.log('No soy alto.')
    }
}


var can = new Persona('Can', 'Chen', 1.73)
var sacha = new Persona('Sacha', 'Gomez', 2.22)

can.saludar()
can.altoNo()

sacha.saludar()
sacha.altoNo()