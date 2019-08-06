//37.Múltiples promesas en paralelo

// Para hacer el llamado a múltiples promesas, nos apoyamos en un 
// array de ids con el que luego construimos otro arreglo de 
// Promesas, que pasaremos como parámetro a 
// Promise.all( arregloDePromesas ), con las promesas podemos 
// encadenar llamadas en paralelo, algo que no es posible usando callbacks.



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

var ids = [1, 2, 3, 4, 5, 6, 7]

var promesas = ids.map(function(id){
    return obtener_personaje(id)
})

Promise
    .all(promesas)
    .then(personajes => console.log(personajes))
    .catch(onError)

console.log('Aquí es lo que primero se debe ver en pantalla, y aquí va un codigo muyy largo')
//