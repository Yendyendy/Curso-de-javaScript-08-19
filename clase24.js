//Asincronismo
//28.Funciones como Parámetro

//En JavaScript, los parámetros de funciones son por defecto undefined. De todos modos, 
// en algunas situaciones puede ser útil colocar un valor por defecto diferente que lo 
// evalúe como verdadero.

class Persona {
    constructor(nombre, apellido, altura){
        this.nombre = nombre 
        this.apellido = apellido
        this.altura = altura
    }
    saludar(fn){
        console.log(`Hola, mi nombre es ${this.nombre} ${this.apellido}`)
        if (fn){
            // var nombre = this.nombre
            // var apellido = this.apellido
            var {nombre, apellido} = this
            fn(nombre, apellido, false)
        }
    }
}

class Desarrollador extends Persona {
    constructor(nombre, apellido, altura){
        super(nombre, apellido, altura)
    }
    saludar(fn){
        console.log(`Hola mundo, soy ${this.nombre} ${this.apellido}`)
        if (fn){
            // var nombre = this.nombre
            // var apellido = this.apellido
            var {nombre, apellido} = this
            fn(nombre, apellido, true)
        }
    }
}
function responderSaludo(nombre, apellido, esDev) {
    if (esDev){
        console.log('A si que eres DESARROLLADOR!')
    }else{
        console.log(`Buen día ${nombre} ${apellido}`)

    }
}

var can = new Persona('Can', 'Chen', 17)
var sacha = new Desarrollador ('Sacha', 'Gomez', 28)
var luna = new Desarrollador('Luna', 'Noseas', 37)

sacha.saludar()
can.saludar(responderSaludo)
luna.saludar(responderSaludo)



