let estudiante = [
    {
        nombre:'Joaquin',
        edad:17
    },
    {
        nombre:'Nicole',
        edad:19
    },
    {
        nombre:'Ciro',
        edad:18
    },
    {
        nombre:'Giuliana',
        edad:20
    },
]

let container = document.querySelector('.container')
let parrafos = document.querySelectorAll('.texto')
console.log(parrafos)

for(let i = 0; i < parrafos.length; i++){
    let esPar = (i + 1) % 2 
    if(esPar === 0){
        parrafos[i].style.color = 'red'
    }
}

function saludo(nombre, horario){}

/* for(let i = 0; i < estudiante.length ; i++ ){
    if(estudiante[i].edad >= 18){
        console.log(estudiante[i].nombre)
    } else {

        container.insertAdjacentHTML('afterbegin', '<h1>' + estudiante[i].nombre + '</h1>')
    }
} */

for(let i = 1; i < 20; i += 2){
    console.log( i * 2 )
}

