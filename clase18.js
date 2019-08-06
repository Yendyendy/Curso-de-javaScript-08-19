//21.Transformar un array

// En esta clase veremos cómo transformar un array. 
// El método map() itera sobre los elementos de un array 
// en el orden de inserción y devuelve array nuevo con los elementos modificados.


//Vamos a cambiar la medida de altura que está en metros a CENTÍMETROS

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
    altura: 2.12,
}

var can4 = {
    nombre: 'Can4',
    apellido: 'Chenasdfagadsfafd',
    altura: 1.90,
}

var personas =[can, can2, can3, can4]

//Este coódifo Modifica el ARRAY ORIGINAL
// const pasarAlturaCTM = persona =>{
//     persona.altura *= 100
//     return persona
// }

//PARA QUE ESTO NO PASE
// const pasarAlturaCTM = persona => {
//     return{
//         ...personas,
//         altura: persona.altura * 100
//     }
// }

const pasarAlturaCTM = persona => ({
    ...personas,
    altura: persona.altura * 100
})

var alturaCTM = personas.map(pasarAlturaCTM)

console.log(alturaCTM)