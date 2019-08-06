//32.Haciendo múltiples requests

//En esta clase accederemos a múltiples datos al mismo tiempo.
// Continuaremos trabajando con los jQuery y swapi

const API_URL = "https://swapi.co/api/"
const PEOPLE_URL = 'people/:id'

// const lukeUrl = `${API_URL}${PEOPLE_URL.replace(':id', 1)}`
const opts = {crossDomain: true}

// // // //

const onResponse =  ({name}) => console.log (`${name}`)


function obtener_personaje (id){
    var url = `${API_URL}${PEOPLE_URL.replace(':id', id)}`
    $.get(url, opts, onResponse)

}

// obtener_personaje(1)
// obtener_personaje(2)
// obtener_personaje(3)
// obtener_personaje(7)

for (i=1; i<25; i++){
    obtener_personaje(i)
}
