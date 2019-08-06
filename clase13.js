//15.Estructuras repetitivas: for

// En esta clase estudiaremos una de las estructuras básicas de control. 
// El bucle for, se utiliza para repetir una o más instrucciones un determinado número de veces.

// Para escribir un bucle for se coloca la palabra for seguida de paréntesis y llaves.
// Ej. for( ){ }. Dentro de los paréntesis irán las condiciones para ejecutar el bucle, 
// y dentro las llaves irán las instrucciones que se deben repetir.

// En este ejemplo la variable i la utilizamos como contador.


// var can ={
//     name: "Can",
//     weight: 53,
// }

// //Simulación para ver el peso de can dentro de un anio

// console.log(`Al inicio del año, ${can.name} pesa ${can.weight} kg.`)

// const increase_decrease = 0.2
// const years_day= 365

// const increaseWeight = person => person.weight += increase_decrease
// const loseWeight = person =>person.weight -= increase_decrease

// for (var i = 1; i <= years_day; i++ ) {
//     var random = Math.random()
//     if (random <0.25){
//         increaseWeight(can)
//     } else if (random < 0.5) {
//         loseWeight(can)
//     }

// }
// console.log(`Al final del año, ${can.name} pesa ${can.weight.toFixed(2)} kg.`)






                        // var can ={
                        //     nombre:"can",
                        //     apellido:"chen"
                        // }

                        // // function hola(persona) {
                        // //     return persona.nombre
                        // // }

                        // const hola = (nombre) => nombre)
                        // console.log(hola(can))
                        














                        
                        
                        
                        
//16.Estructuras repetitivas: while

// En esta clase estudiaremos otra estructura repetitiva llamada while. 
// While se ejecuta únicamente mientras la condición que se está evaluando es verdadera.

// En ocasiones nuestro código puede fallar por errores de syntaxis o errores lógicos.
//  En caso de que quieras verificar tu código, debes utilizar un debugger. El código se 
//  detiene cada vez que lee esta palabra.

var can ={
    name: "Can",
    weight: 53,
}

//Simulación para vajar 3kg en X días

console.log(`Al inicio del año, ${can.name} pesa ${can.weight} kg.`)

const increase_decrease = 0.3
const years_day= 365

const increaseWeight = person => person.weight += increase_decrease
const loseWeight = person =>person.weight -= increase_decrease


const eatToMuch = () => Math.random() < 0.3
const doSport = () => Math.random() < 0.4
const goal = can.weight - 3

var days = 0

while (can.weight > goal){
    debugger  
    if (eatToMuch()){
        increaseWeight(can)
    }else if (doSport()) {
        loseWeight(can)
    }
    days +=1
}
console.log(`Pasaron ${days} hasta que Can adelgazó 3kg`)






