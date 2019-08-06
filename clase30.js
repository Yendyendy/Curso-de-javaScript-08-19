//35

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
    .then(function(personaje){
        console.log(`Hola, me llamo ${personaje.name}`)
    })
    .catch(onError)

console.log('Aquí es lo que primero se debe ver en pantalla, y aquí va un codigo muyy largo')
//