//42.Obteniendo el input del usuario

//Para obtener el input del usuario agregamos un manejador para el evento click del mouse usando addEventListener para cada uno de los colores del juego. Utilizando la propiedad target devuelta por el evento click podemos identificar cuál es el botón que ha sido presionado.




const celeste = document.getElementById('celeste')
const violeta = document.getElementById('violeta')
const naranja = document.getElementById('naranja')
const verde = document.getElementById('verde')
const btnEmpezar = document.getElementById('btnEmpezar')
const ULTIMO_NIVEL = 10

class Juego{
    constructor(){
        this.inicializar()
        this.generarSecuencia()

        this.siguienteNivel()

        
    }
    inicializar(){
        //this.elegirColor = this.elegirColor.bind(this)
        //this.siguienteNivel = this.siguienteNivel(this)

        btnEmpezar.classList.add('hide')
        this.nivel = 1
        this.colores = {
            celeste,
            violeta,
            naranja,
            verde,
        }
    }
    generarSecuencia(){
        this.secuencia = new Array(ULTIMO_NIVEL).fill(0).map(n=>Math.floor(Math.random()*4))
    }
    

    siguienteNivel(){
        this.subnivel = 0

        this.iluminarSecuencia()
        this.agregarEventosClick()
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
    transformarColorNumero(color){
        switch(color){
            case 'celeste':
                return 0
            case 'violeta':
                return 1
            case 'naranja':
                return 2
            case 'verde':
                return 3
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
    agregarEventosClick(){
        //this.colores.violeta, es el botón violeta, en el html

        //1º FORMAPara que JS no pierda el contexto de quien es this
        //var _this = this
        //var sefl = this
        // this.colores.violeta.addEventListener('click', this.elegirColor.bind(_this))
        // this.colores.violeta.addEventListener('click', this.elegirColor.bind(self))

        //2º FORMA: mirar función inicializar línea (24-25)
        //en ella igualamos this.elegirColor con this.elegirColor.bind(this)

        this.colores.violeta.addEventListener('click', this.elegirColor.bind(this))
        this.colores.verde.addEventListener('click', this.elegirColor.bind(this))
        this.colores.naranja.addEventListener('click', this.elegirColor.bind(this))
        this.colores.celeste.addEventListener('click', this.elegirColor.bind(this))
    }
    eliminarEventosClick(){
        this.colores.violeta.removeEventListener('click', this.elegirColor.bind(this))
        this.colores.verde.removeEventListener('click', this.elegirColor.bind(this))
        this.colores.naranja.removeEventListener('click', this.elegirColor.bind(this))
        this.colores.celeste.removeEventListener('click', this.elegirColor.bind(this))
    }


    //recive un parámetro, devido a que es llamada por .addEventListener,
    //y dicho parámetro se suele llamar 'ev'
    elegirColor(ev){
        const nombreColor = ev.target.dataset.color
        const numeroColor = this.transformarColorNumero(nombreColor)
        this.iluminarColor(nombreColor)
        if (numeroColor === this.secuencia[this.subnivel]){
            this.subnivel++
            if (this.subnivel === this.nivel){
                this.nivel++
                this.eliminarEventosClick()
                if (this.nivel === (ULTIMO_NIVEL + 1)){
                    //Has ganado
                }else{
                setTimeout(this.siguienteNivel.bind(this), 2000)
            }
            }
        }else{
            //Has perdido
        }
                
    }
}

function empezarJuego() { 
    var juego = new Juego()
}
