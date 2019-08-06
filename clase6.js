//8.Objeto
var can = {
    nombre: 'Can',
    apellido: 'Chen',
    edad: 28,
}

var dario = {
    nombre: 'Darío',
    apellido: "Don Juan",
    edad: 'Infinito',
}
    // function imprimirUpper(nombre){
    //     // nombre = window.nombre
    //     nombre = nombre.toUpperCase()
    //     console.log(nombre)
    // }
    // imprimirUpper(can.nombre)
    // imprimirUpper(dario.nombre)

// function  imprimirUpper(person) {
//     var name = person.nombre.toUpperCase()
//     console.log(name)

// }
// imprimirUpper(can)
// imprimirUpper(dario)


    // function  imprimirUpper(person) {
    //     console.log(person.nombre.toUpperCase())
    // }
    // imprimirUpper(can)
    // imprimirUpper(dario)

function imprimirUpper({nombre}) {
    console.log(nombre.toUpperCase())
}
imprimirUpper(can)
imprimirUpper(dario)
//podemos definir un nuevo atributo de un supuesto objeto de esta forma
imprimirUpper({nombre:"Que tal"})