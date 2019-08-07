//40.Iluminando una secuencia de colores

//En esta clase se observa la diferencia entre el uso de let y var para la declaración de variables y cómo esta diferencia afecta el alcance de la variable dentro de un ciclo for. Se recomienda siempre el uso de let cuando se trata de estructuras for, ya que al usar var, el valor de dicha variable se va a remplazar cada vez con la última asignación que se haga, mientras que con let, conservará su valor dentro de cada iteración.
// Siempre que sea posible debemos usar const sobre let, y let sobre var.


const celeste = document.getElementById('celeste')
const violeta = document.getElementById('violeta')
const naranja = document.getElementById('naranja')
const verde = document.getElementById('verde')
const btnEmpezar = document.getElementById('btnEmpezar')


class Juego{
    constructor(){
        this.inicializar()
        this.generarSecuencia()

        this.siguienteNivel()

        
    }
    inicializar(){
        btnEmpezar.classList.add('hide')
        this.nivel = 10
        this.colores = {
            celeste,
            violeta,
            naranja,
            verde,
        }
    }
    generarSecuencia(){
        this.secuencia = new Array(10).fill(0).map(n=>Math.floor(Math.random()*4))
    }
    

    siguienteNivel(){
        this.iluminarSecuencia()
    }
    transformarNumeroColor(color){
        switch(color){
            case 0:
                return 'celeste'
            case 1:
                return 'violeta'
            case 2:
                return 'naranja'
            case 3:
                return 'verde'
        }
    }

    iluminarSecuencia(){
        for (let i=0; i<this.nivel; i++){
            const color = this.transformarNumeroColor(this.secuencia[i])

            setTimeout(()=>this.iluminarColor(color), 1000*i)
        }
        
    }
    iluminarColor(color){
        this.colores[color].classList.add('light')
        setTimeout(()=>this.apagarColor(color), 350)
        
    }
    apagarColor(color){
        this.colores[color].classList.remove('light')

    }
    
}

function empezarJuego() { 
    var juego = new Juego()
}
