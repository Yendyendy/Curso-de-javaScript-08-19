//36.Promesas encadenadas
// A diferencia de los callbacks en el CallbackHell, 
// que terminan estando anidados unos dentro de otros, cuando se usan Promesas la ejecución de 
// las llamadas no se hacen de manera anidada sino de manera encadenada, al mismo nivel una debajo de la otra, 
// lo que hace que el código sea mucho más legible y mantenible.


const API_URL = "https://swapi.co/api/"
const PEOPLE_URL = 'people/:id'



const opts = {crossDomain: true}

// // // //

//

function obtener_personaje (id) {
    return new Promise(function(resolve, reject){
        const url = `${API_URL}${PEOPLE_URL.replace(':id', id)}`
        $.get(url, opts, function(data){
            resolve(data)
        })
        .fail( () => reject(id))
    })
}

function onError(id){
    console.log(`ERROR, ${id}`)
}

obtener_personaje(1)
    .then(personaje1=>{
        console.log(`1)Hola num1, me llamo ${personaje1.name}`)
        return obtener_personaje(2)
    })
    .then(personaje2=>{
        console.log(`2) Hola, me llamo ${personaje2.name}`)
        return obtener_personaje(3)
    })
    .then(personaje3=>{
        console.log(`3) Hola, me llamo ${personaje3.name}`)
        return obtener_personaje(4)
    })
    .then(personaje4=>{
        console.log(`4) Hola, me llamo ${personaje4.name}`)
        return obtener_personaje(5)
    })
    .then(personaje5=>{
        console.log(`5) Hola, me llamo ${personaje5.name}`)
        return obtener_personaje(6)
    })
    .then(personaje6=>{
        console.log(`6) Hola, me llamo ${personaje6.name}`)
    })
    .catch(onError)

console.log('Aquí es lo que primero se debe ver en pantalla, y aquí va un codigo muyy largo')
//