//40.Generando una secuencia de números

//Para generar la secuencia del juego usaremos un array con números aleatorios, que representarán el color del botón que se iluminará cada vez. Usamos new Array() para crear el arreglo de manera dinámica, y llamamos al método fill para rellenar ese array con ceros y poder luego iterar sobre éste con map()


const celeste = document.getElementById('celeste')
const violeta = document.getElementById('violeta')
const naranja = document.getElementById('naranja')
const verde = document.getElementById('verde')
const btnEmpezar = document.getElementById('btnEmpezar')


class Juego{
    constructor(){
        this.inicializar()
        this.generarSecuencia()
    }
    inicializar(){
        btnEmpezar.classList.add('hide')
    }
    generarSecuencia(){
        // this.secuencia = [1,2,3,4,5]
        this.secuencia = new Array(10).fill(0).map(n => Math.floor(Math.random()*4))
    }
     
}

function empezarJuego(){
    window.juego = new Juego()
}



