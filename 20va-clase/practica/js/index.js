// let miNombre = 'Marcos'

// localStorage.setItem('userName', miNombre)
// console.log(localStorage)

// let recuperoStorage = localStorage.getItem('userName')

// console.log(recuperoStorage)

// localStorage.clear()

let peliculasFavoritas = [
    'Prueba1',
    'Interstellar',
    'Prueba3',
]


localStorage.setItem('peliculaFavorita', peliculasFavoritas[1])

let traerPelicula= localStorage.getItem('peliculaFavorita')
// console.log(traerPelicula)

// let confirmaBorrado = confirm('Quieres borrar tu pelicula favorita?')
// if(confirmaBorrado){
//     localStorage.clear()
// }

// let peliculasJson = JSON.stringify(peliculasFavoritas)
// localStorage.setItem('favoritos', peliculasJson)

// let recuperoPelis = localStorage.getItem('favoritos')

// let parsedPelis = JSON.parse(recuperoPelis)

// parsedPelis[2] = 'Toy Story'
// parsedPelis.push('Shrek')

// let sumarABatman = confirm('Quiere sumar a Batman como favorita?')

// if(sumarABatman){
//     parsedPelis.push('Batman')
// }

// let stringifyPelis = JSON.stringify(parsedPelis)

// localStorage.setItem('favoritos', stringifyPelis)


let got = [
    {
        nombre: "Jon",
        apellido: "Snow",
        edad: 23,
        ciudad: "Winterfell"
    },
    {
        nombre: "Daenerys",
        apellido: "Targaryen",
        edad: 19
    },
    {
        nombre: "Arya",
        apellido: "Stark",
        edad: 12,
        ciudad: "Winterfell"
    },
    {
        nombre: "Tyrion",
        apellido: "Lannister",
        edad: 32,
        ciudad: "Casterly Rock"
    }
];

let winterIsComing = []

for(let i = 0; i < got.length; i++){
    let ciudad = got[i].ciudad
    
    if(ciudad === 'Winterfell'){
        winterIsComing.push(got[i])
    }
}

let winterStringify = JSON.stringify(winterIsComing)
localStorage.setItem('winterfell', winterStringify)


