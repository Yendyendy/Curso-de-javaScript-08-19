//39.Comenzando el juego

// Crearemos el juego Simon (Simón dice), en el que se van iluminando una secuencia de 
// botones que el jugador tendrá que ir repitiendo, si se equivoca volverá a comenzar. 
// El juego tendrá 10 niveles de dificultad, que deberán ser superados para ganar.

const celeste = document.getElementById('celeste')
const violeta = document.getElementById('violeta')
const naranja = document.getElementById('naranja')
const verde = document.getElementById('verde')
const btnEmpezar = document.getElementById('btnEmpezar')


class Juego{
    constructor(){
        this.inicializar()
    }
    inicializar(){
        btnEmpezar.classList.add('hide')
    }
}

function empezarJuego(){
    var juego = new Juego()
}


// const celeste = document.getElementById('celeste')
// const violeta = document.getElementById('violeta')
// const naranja = document.getElementById('naranja')
// const verde = document.getElementById('verde')
// const btnEmpezar = document.getElementById('btnEmpezar')

// class Juego {
// constructor() {
//     this.inicializar()
// }

// inicializar() {
//     btnEmpezar.classList.add('hide')
// }
// }

// function empezarJuego() {
// var juego = new Juego()
// }




