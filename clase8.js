//10. Parámetros como referencia o como valor

var can ={
    name:"Can",
    surname:"Chen",
    age: 17,
}

var dario = {
    name:"Darío",
    surname: "Gomez",
    age:19,
}


// function cumpleanios(person){
//     person.age += 1
// }

    // function birthday({age}){
    //     console.log(age +=1)
    // }

    // birthday(can)
    // birthday(dario)

function birthday(person){
    return{
        ...person, 
        age: person.age +1
    }
}