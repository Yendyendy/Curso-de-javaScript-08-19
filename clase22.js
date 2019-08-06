//26.La verdad oculta sobre las claes en JS

// Los objetos en JavaScript son “contenedores” dinámicos de propiedades. Estos objetos 
// poseen un enlace a un objeto prototipo. Cuando intentamos acceder a la propiedad de un 
// objeto, la propiedad no sólo se busca en el propio objeto sino también en el prototipo del 
// objeto, en el prototipo del prototipo, y así sucesivamente hasta que se encuentre una 
// propiedad que coincida con el nombre o se alcance el final de la cadena de prototipos.

//Hay que crear un una función que se encargue de la herencia

function herencia(prototipoHijo, prototipoPadre) {
    var fn =function (){}
    fn.prototype = prototipoPadre.prototype
    prototipoHijo.prototype = new fn
    prototipoHijo.prototype.constructor = prototipoHijo

}


function Persona(nombre, apellido, altura) {
    this.nombre = nombre
    this.apellido = apellido
} 
Persona.prototype.saludar = function (){
    console.log(`Hola, mi nombre es ${this.nombre}`)
}


 
function Desarrollador(nombre, apellido) {
    this.nombre = nombre
    this.apellido = apellido
}
//
//IMportante, para que PISE el saludo() de Persona
herencia(Desarrollador, Persona)
//
Desarrollador.prototype.saludar = function (){
    console.log(`Hola mundo, soy ${this.nombre}`)
}


