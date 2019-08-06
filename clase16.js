//Introducción a arrays

// Los arrays son estructuras que nos permiten organizar elementos dentro de una 
// collección. Estos elementos pueden ser números, 
// strings, booleanos, objetos, etc.

var can = {
    nombre: 'Can',
    apellido: 'Cheasn',
    altura: 1.720,
}

var can2 = {
    nombre: 'Can2',
    apellido: 'Chenasdf',
    altura: 1.702,
}

var can3 = {
    nombre: 'Can3',
    apellido: 'Chenawefasdfa',
    altura: 1.072,
}

var can4 = {
    nombre: 'Can4',
    apellido: 'Chenasdfagadsfafd',
    altura: 10.72,
}

var personas =[can, can2, can3, can4]


//RECORRER EL ARRAY IMPRIMIENDO LAS PERSONAS QUE HAYA DENTRO
for (var i = 0; i<personas.length; i ++){
    var persona = personas[i]
    console.log(`${persona.nombre} mide ${persona.altura}`)
}


