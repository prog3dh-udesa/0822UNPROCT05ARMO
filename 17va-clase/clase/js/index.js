/* let saludo = 'Hola chicos y chicas'
let operacion = 3 + 5
alert(operacion)


let esMayor = prompt('Que edad tienes?', 22)
console.log(esMayor)

let quiereHelado = confirm('Te gustaria un heladito?')
console.log(quiereHelado) */

//Boliche

/* let consultaPatova = prompt('Cual es tu edad nene?', 16)

if(consultaPatova <= 28 && consultaPatova >18) {
    alert('Viva la party')
} else if(consultaPatova >= 28) {
    alert('A casa viejito')
}
else {
    alert('A casa nene!')
}

if(consultaPatova >= 28 || consultaPatova <= 18 ){
    alert('A casa querido')
} else {
    alert('Entramos a la fiesta')
} */

//Seleccionando elementos

let tituloPrincipal = document.querySelector('section .titulo_principal')
console.log(tituloPrincipal)
tituloPrincipal.innerText = 'Que pasa la banda?'

let todosLosTitulos = document.querySelectorAll('.titulo_principal')
console.log(todosLosTitulos)


let edad = prompt('Cual es tu edad?', 16)

if(edad < 18) {
    let body = document.querySelector('body')
    body.style.display = 'none'
} else {
    document.querySelector('h1').innerText = 'BIENVENIDO!!!'
    
}