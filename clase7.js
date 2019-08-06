//9. Desestrucutración de datos

// var can = {
//     nombre:"Can",
//     apellido:"Chen",
//     edad: 17
// }

// function imprimirUpper(persona){
//     var {nombre} = persona
//     console.log(nombre.toUpperCase())
// }

// imprimirUpper(can)

var sacha = {
    nombre:"Sacha",
    apellido: "Lifszyc",
    edad:"28",
}

var dario = {
    nombre: "Dario",
    apellido: "Gomez",
    edad: "27",
}

// function presentacion({nombre, apellido, edad}) {
//     console.log(`Hola, mi nombre es ${nombre} ${apellido}, y tengo ${edad} anios.`)
// }

function presentacion(persona) {
    var {nombre, apellido, edad} = persona
    console.log(`Hola, mi nombre es ${nombre} ${apellido}, y tengo ${edad} anios.`)
}


presentacion(sacha)
presentacion(dario)