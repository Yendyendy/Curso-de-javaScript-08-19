//14.Arrow functions

// En esta clase aprenderemos a utilizar Arrow Functions que permiten una nomenclatura más 
// corta para escribir expresiones de funciones. Este tipo de funciones deben definirse antes de ser utilizadas.

// Al escribir las Arrow Functions no es necesario escribir la palabra function, la palabra return, ni las llaves.



var can ={
    name:"Can",
    age:17
}



//UNA FUNCIÓN NORMAL Y CORRIENTE

// const LEGAL_AGE = 18
// function adultOrNot(person){
//     return person.age >= LEGAL_AGE
// }

// function printAge(person){
//    if (adultOrNot(person)){
//        console.log(`${person.name}, es mayor de edad`)
//    } else {
//        console.log(`${person.name}, es menor de edad`)
//    }
// }

// console.log(printAge(can))





//ASIGNARLE UNA FUNCIÓN A UNA VARIABLE (Línea 42)

// const LEGAL_AGE = 18

// const adultOrNot = function (person){
//     return person.age >= LEGAL_AGE
// }

// function printAge(person){
//    if (adultOrNot(person)){
//        console.log(`${person.name}, es mayor de edad`)
//    } else {
//        console.log(`${person.name}, es menor de edad`)
//    }
// }

// console.log(printAge(can))




//ARROW FUNCTION  (línea 64)
// const LEGAL_AGE = 18


//Función normal
// const adultOrNot = (person) => {
//     return person.age >= LEGAL_AGE
// }

//si hay solo un parámetro, arrow function nos permite quitar paréntesis
// const adultOrNot = person => {

//Si sólo devuelve un valor (me refiero a que tenga un return, podemos obviarlo)
// const adultOrNot = person => person.age >= LEGAL_AGE
// function printAge(person){
//    if (adultOrNot(person)){
//        console.log(`${person.name}, es mayor de edad`)
//    } else {
//        console.log(`${person.name}, es menor de edad`)
//    }
// }

// console.log(printAge(can))




//DESESTRUCTURACIÓN DE DATOS + ARROW FUNCTION
const LEGAL_AGE = 18

const ifAdult = ({age}) => age >= LEGAL_AGE

const adultOrNot = (person) => {
    if (ifAdult(person)){
        console.log(`${person.name}, es mayor de edad`)
   } else {
       console.log(`${person.name}, es menor de edad`)
   }
}

console.log(adultOrNot(can))


function permit(person){
    if(!ifAdult(person)){
        console.log("Acceso denegado")
    }
}

console.log(permit(can))