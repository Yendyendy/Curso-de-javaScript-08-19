//31.Callbacks

//En esta clase aprenderemos que son los callbacks y usaremos una librería externa que se llama jQuery.

// Un callback es una función que se pasa a otra función como un argumento. Esta función se invoca, después,
// dentro de la función externa para completar alguna acción.

const API_URL = "https://swapi.co/api/"
const PEOPLE_URL = 'people/:id'

const lukeUrl = `${API_URL}${PEOPLE_URL.replace(':id', 1)}`
const opts = {crossDomain: true}

// const onResponse = function (luke){
//     console.log (`${luke.name}`)
// }

// const onResponse = luke => console.log (`${luke.name}`)

const onResponse =  ({name}) => console.log (`${name}`)

$.get(lukeUrl, opts, onResponse)