//33.Manejando el orden  y el asincronismo en javascript

// Una manera de asegurar que se respete la secuencia en que hemos realizado 
// múltiples tareas es utilizando callbacks, con lo que se ejecutará luego, en 
// cada llamada. Lo importante es que el llamado al callback se haga a través de una 
// función anónima. Sin embargo, al hacerlo de esta manera generamos una situación 
// poco deseada llamada CallbackHell.

const API_URL = "https://swapi.co/api/"
const PEOPLE_URL = 'people/:id'

const opts = {crossDomain: true}

// // // //

// const onResponse =  ({name}) => console.log (`${name}`)

function obtener_personaje (id, callback){
    var url = `${API_URL}${PEOPLE_URL.replace(':id', id)}`

    $.get(url, opts, (persona)=> console.log(`${persona.name}`))

    if (callback){
        callback()
    }
}


//Callback hell
obtener_personaje(1, function(){
    obtener_personaje(2, function(){
        obtener_personaje(3, function(){
            obtener_personaje(4)
        })
    })
})

console.log('ESto se debe ejecutar primero en teoría, eso es lo que he aprendido')

//