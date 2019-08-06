//20.Filtrar un array

// En esta clase aprenderemos como filtrar los arrays. Para filtrar siempre necesitamos establecer una condición. En este ejemplo nuestra condición es que la estatura de las personas sea mayor de 1.80mts.

// El método filter ( ) crea una nueva matriz con todos los elementos que pasan la prueba implementada por la función proporcionada.

// Recuerda que si no hay elementos que pasen la prueba, filter devuelve un array vacío.

// Reto: escribe el filtrado de personas bajas.



var can = {
    nombre: 'Can',
    apellido: 'Cheasn',
    altura: 1.72,
}

var can2 = {
    nombre: 'Can2',
    apellido: 'Chenasdf',
    altura: 1.50,
}

var can3 = {
    nombre: 'Can3',
    apellido: 'Chenawefasdfa',
    altura: 2.2,
}

var can4 = {
    nombre: 'Can4',
    apellido: 'Chenasdfagadsfafd',
    altura: 1.90,
}

var personas =[can, can2, can3, can4]



//

var esAlto = (persona) => persona.altura > 1.7

//RETO
var esBaja= ({altura}) => altura <1.7
//

var personasAltas = personas.filter(esAlto)
//O directamente dentro de la función filter, creando una 
//función anónima (porque no tiene nombre)

// var personasAltas = personas.filter(function (persona){
//     return persona.altura > 1.7
// })


console.log(personasAltas)


