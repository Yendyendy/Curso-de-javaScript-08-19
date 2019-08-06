//38.Async-await: lo último en asincronismo

//Async-await es la manera más simple y clara de realizar tareas asíncronas.
//Await detiene la ejecución del programa hasta que todas las promesas sean 
//resueltas. Para poder utilizar esta forma, hay que colocar async antes de la 
//definición de la función, y encerrar el llamado a Promises.all() dentro de un
//bloque try … catch.



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

async function obtenerPersonaje (){
    var ids = [1, 2, 3, 4, 5, 6, 7]
    var promesas = ids.map(id => obtener_personaje(id))

    try{
        var personajes = await Promise.all(promesas)
        console.log(personajes)
    }catch (id){
        onError (id)
    }
}

obtenerPersonaje()
console.log('Aquí es lo que primero se debe ver en pantalla, y aquí va un codigo muyy largo')
//