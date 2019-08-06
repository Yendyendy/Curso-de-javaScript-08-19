// console.log('Hola mundo de JavaScript!');


//Concatenar textos
var nombre = "Can";
console.log('Hola ' + nombre);

var apellido = "Chen"

console.log('Hola ' + nombre + ' ' + apellido);

//En JS se puede declarar variables seguidas
var num1=1, num2=2;

var nombre_MAYUSC = nombre.toUpperCase()
var apellido_minus = apellido.toLowerCase()

var primera_letra = nombre.charAt(0)

var cantidad_letras_nombre= nombre.length
//nombre = "Samuelechedey"
//cantidad_letras_nombre
//cantidad_letras_nombre = nombre.lenght

var nombre_Completo = nombre + ' ' + apellido

//Interpolación de texto
var nombre_completo2 = `${nombre} ${apellido}`

var str = nombre.substr(1,5)

// var nombre = 'aoba'
// var longitud = nombre.length
// var ultima_letra = nombre.charAt(longitud)