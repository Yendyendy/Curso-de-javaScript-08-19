//13.Funciones que retornan valores

// En esta clase seguiremos trabajando con condicionales para desglosar las funciones en funciones 
// más pequeñas que retornen un valor.

// Debemos de tener en cuenta que el número 18 esta incluido dentro del rango de edad. Para ello 
// utilizamos los símbolos >=.

// Return detiene la ejecución de una función y devuelve el valor de esa función.

// Las variables definidas con const se comportan como las variables, excepto que no 
// pueden ser reasignadas. Las constantes pueden ser declaradas en mayúsculas o minúsculas. 
// Pero por convención, para distinguirlas del resto de variables, se escribe todo en mayusculas.

var can ={
    name:"Can",
    age:17
}

// function printAge(person){
//     if (person.age >= 18){
//         console.log(`${person.name}, es mayor de edad`)
//     } else {
//         console.log(`${person.name}, es menor de edad`)
//     }
// }

// printAge(can)




// funtion adultOrNot(){
//     return person.age >= 18
// }

// function printAge(person){
//    if (adultOrNot(person)){
//        console.log(`${person.name}, es mayor de edad`)
//    } else {
//        console.log(`${person.name}, es menor de edad`)
//    }
// }

// console.log(printAge(can))




const LEGAL_AGE = 18

function adultOrNot(person){
    return person.age >= LEGAL_AGE
}

function printAge(person){
   if (adultOrNot(person)){
       console.log(`${person.name}, es mayor de edad`)
   } else {
       console.log(`${person.name}, es menor de edad`)
   }
}

console.log(printAge(can))

