/* 
let divisor = 5

function duplicar(number){
    let resultado = number * 2 / divisor
    return resultado
} 

function calcArea(altura, ancho, forma ){
    if(forma === 'rectangulo'){
        let area = altura * ancho
        return area
    } else {
        let areaTriangulo = altura * ancho / 2
        return areaTriangulo
    }
}

let miRectangulo = calcArea(15, 10, 'rectangulo')
console.log(miRectangulo)

let miTriangulo = calcArea(15, 10, 'triangulo')
console.log(miTriangulo)

let estudiantes = [
    'Joaquin', 
    'Daniela', 
    'Pedro',
    'Pepe'
]

function contarArray(array){
    return array.length
}

console.log(contarArray(estudiantes))


let resultaDeDuplicar = duplicar(30)
 */

/* let duplicar = function( number, divisor){
    let resultado = number * 2 / divisor    
    return resultado 
} */
/* console.log(resultaDeDuplicar )*/

function cantidadDeLetras(palabraRecibida){
    let cantidad = palabraRecibida.length 
    // console.log('Este es el console de la palabra ' + palabraRecibida)
    // console.log(cantidad)
    return cantidad
}

/* let data = [
    'Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado', 'Domingo'
]
console.log(data) */

const user = 'admin@admin.com'
cantidadDeLetras('Everaldo Cruz')
cantidadDeLetras(user)


function diaSegunNumero(arr, numero){
    console.log(arr[numero - 1])
}

let dias = [
    'Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado', 'Domingo'
]

diaSegunNumero(dias, 7)