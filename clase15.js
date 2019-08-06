//Condicional múltiple: switch

// Una ultima estructura de control se llama switch. Switch se utiliza para realizar 
// diferentes acciones basadas en múltiples condiciones.

// Prompt, muestra un cuadro de mensaje que le pide al usuario que ingrese algúna información.

// Break, sirve para que el browser se salte un bucle.


var signo = prompt('¿Cuál es tu signo?')

switch (signo){
    case 'acuario':
        console.log('acuario')
        break
    case `cancer`:
        console.log('cancer')
        break
    case 'acuario':
        console.log('acuario')
        break
    default:
        console.log('No se encuentra lo que a introducido en el input.')
}

// if (signo === acuario){
// }

// if (signo === cancer){
// }

// if (signo === piscis){
// }
