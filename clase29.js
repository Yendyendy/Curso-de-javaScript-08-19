//34.Manejo de errores con callbacks

// Para solucionar el problema de quedarnos sin conexión, u otro error similar, 
// en medio de una sucesión de callbacks utilizamos el método fail().



const API_URL = "https://swapi.co/api/"
const PEOPLE_URL = 'people/:id'



const opts = {crossDomain: true}

// // // //

//

function obtener_personaje (id, callback){
    var url = `${API_URL}${PEOPLE_URL.replace(':id', id)}`
    $
        .get(url, opts,callback)
        .fail( () => console.log(`no se pudo obtener ${id}`)
        )
}

obtener_personaje(1, function(personaje){
    console.log(`${personaje.name}`)

    obtener_personaje(2, function(personaje){
        console.log(`${personaje.name}`)

        obtener_personaje(3, function(personaje){
            console.log(`${personaje.name}`)

            obtener_personaje(4, function(personaje){
                console.log(`${personaje.name}`)

                obtener_personaje(5, function(personaje){
                    console.log(`${personaje.name}`)

                    obtener_personaje(6, function(personaje){
                        console.log(`${personaje.name}`)

                        obtener_personaje(7, function(personaje){
                            console.log(`${personaje.name}`)

                            obtener_personaje(8, function(personaje){
                                console.log(`${personaje.name}`)

                                obtener_personaje(9, function(personaje){
                                    console.log(`${personaje.name}`)

                                    obtener_personaje(10, function(personaje){
                                        console.log(`${personaje.name}`)

                                        obtener_personaje(11, function(personaje){
                                            console.log(`${personaje.name}`)
                                        })
                                    })
                                })
                            })
                        })
                    })
                })
            })
        })
    })
})

console.log('Aquí es lo que primero se debe ver en pantalla, y aquí va un codigo muyy largo')
//