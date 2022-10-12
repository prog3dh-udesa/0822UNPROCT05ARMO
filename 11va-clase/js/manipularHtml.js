let miPerro = 'Pogo'
let elementoHtml = document.getElementById('elemento')
console.log(elementoHtml)


let miPrimerSuma = 25 + 25
let validacion = miPrimerSuma >= 50

let primerNombre = 'Nelson '
let apellido = 'Salazar'

let miPrimerConcatenacion = apellido + primerNombre

let miPrimerArray = [true, apellido, 4 + 5, miPrimerSuma, 'Este es un array']

let frutas = ['Pera', 'Manzana', 'Coco']
frutas.push('Melocoton')
frutas.push('Fresa')
frutas.push('Banana')
console.log(frutas)

frutas.pop()
console.log(frutas)


elementoHtml.innerText = frutas

console.log(miPrimerArray)

console.log(miPrimerConcatenacion)
console.log(validacion)

