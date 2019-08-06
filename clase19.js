//22.Reducir un array a un valor

// El método reduce() nos permite reducir, mediante una función que se aplica a 
// cada uno de los elemento del array, todos los elementos de dicho array, a un valor único.



//Contar cuántos libros tienen las personas en total
var can = {
    nombre: 'Can',
    apellido: 'Cheasn',
    altura: 1.72,
    cantidadLibros:34,
}

var can2 = {
    nombre: 'Can2',
    apellido: 'Chenasdf',
    altura: 1.50,
    cantidadLibros: 93
}

var can3 = {
    nombre: 'Can3',
    apellido: 'Chenawefasdfa',
    altura: 2.12,
    cantidadLibros: 53,
}

var can4 = {
    nombre: 'Can4',
    apellido: 'Chenasdfagadsfafd',
    altura: 1.90,
    cantidadLibros: 12,
}

var personas = [can, can2, can3, can4]

//Alternativa 1

// var total = 0
// for (var i=0; i<personas.length; i++){
//     total += personas[i].cantidadLibros
// }

// console.log(total)



//Empleando reducer

// const reducer = (acum, persona) =>{
//     return acum + persona.cantidadLibros
// }
const reducer = (acum, {cantidadLibros}) => acum + cantidadLibros


var totalLibros = personas.reduce(reducer, 0)
console.log(totalLibros)