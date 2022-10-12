
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


/* let duplicar = function( number, divisor){
    let resultado = number * 2 / divisor    
    return resultado 
} */
/* console.log(resultaDeDuplicar )*/
