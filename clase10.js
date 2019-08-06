//Estructuras de control

//12.Condiciones
// En esta clase empezaremos a trabajar con estructuras de control, éstas nos permiten decidir el 
// flujo de nuestro código.

// Empezaremos con los condiconales. Los condicionales nos permiten decidir si un código se ejecuta o no. 
// También introducimos un nuevo tipo de datos primitivos: el booleano, que determina si un valor es falso 
// o verdadero. Mediante un condicional (if) decidiremos si se ejecuta una parte de nuestro código cuando 
// se cumpla o no cierta condición.

var can = {
    nombre: "Can",
    apellido: "Chen",
    edad: 17,
    ingeniero: false,
    cocinero: true,
    cantante: false,
    dj: false,
    drone: true,
}

// function outputProfetion(persona){
//     console.log(`${persona.nombre} es:`)

//     if (persona.ingeniero) {
//         console.log("Ingeniero")
//     } else {
//         console.log("No es ingenireo")
//     }

//     if (persona.cocinero){
//         console.log("Cocinero")
//     }

//     if (persona.contante){
//         console.log("Cantante")
//     }

//     if (persona.dj){
//         console.log("DJ")
//     }

//     if (persona.drone){
//         console.log("Drone")
//     }

// }

// console.log(outputProfetion(can))




//Reto
var sacha = {
    name: "Sacha",
    surname: "Gomez",
    age: 27,

}

function printAge(person){
    if(person.age >= 18){
        console.log(`${person.name} es mayor de edad, tiene ${person.age} años.`)
    }else{
        console.log(`${person.log} no es mayor de edad, tiene ${person.age} años.`)
    }
}

printAge(sacha)