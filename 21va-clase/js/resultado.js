let query = location.search
let queryObj = new URLSearchParams(query)
let id = queryObj.get('id')

let body = document.querySelector('body')
let container = document.querySelector('.container')
let buttonMode = document.querySelector('.color-mode')


let colorMode = localStorage.getItem('color')


if(colorMode === null || colorMode === undefined){
    localStorage.setItem('color', 'light')
    buttonMode.innerText='Dark Mode'
} else {
    if(colorMode === 'dark'){
        buttonMode.innerText = 'Light Mode'
    } else {
        buttonMode.innerText = 'Dark Mode'
    }
}

function switchMode(mode, e){
    if(mode === 'dark'){
        body.style.color='white'
        body.style.backgroundColor = 'black'
        e.target.innerText = 'Light Mode'
        localStorage.setItem('color', 'light')
    } else {
        body.style.color='blue'
        body.style.backgroundColor = 'white'
        e.target.innerText = 'Dark Mode'
        localStorage.setItem('color', 'dark')
    }
}

buttonMode.addEventListener('click', function (e){
    let storage = localStorage.getItem('color')
    switchMode(storage, e)
})


fetch(`https://fakestoreapi.com/products/${id}`)
.then(function (resp){
    return resp.json()
})
.then(function(data){

    let favs = getStorage('favoritos')
    let thisMovieIsFav = favs.includes(data.id)
    let initialText

    if(thisMovieIsFav){
        initialText = 'Sacar de favoritos'
    } else {
        initialText = 'Agregar a favoritos'
    }


    let elementos = `
    <img class='img_producto' src='${data.image}'>
    <h2>${data.title}</h2>
    <p>Precio: ${data.price}</p>
    <p>${data.description}</p>
    <button class='btn-favs'>${initialText}</button>
    `
    container.innerHTML = elementos

    let btn = document.querySelector('.btn-favs')

    btn.addEventListener('click', function(e){
        let favs = getStorage('favoritos')
        let thisMovieIsFav = favs.includes(data.id)

        if(thisMovieIsFav){
            removeFav(data.id, favs)
            btn.innerText = 'Agregar a favoritos'
        } else {
            addFav(data.id, favs)
            btn.innerText = 'Sacar de favoritos'
        }
    })
})
.catch(function (error){
    console.log(error)
})

function getStorage(propiedad){
    let storage=localStorage.getItem(propiedad)
    if(storage !== null && storage !== undefined){
        return JSON.parse(storage)
    } else {
        return []
    }
}

function addFav(id, arrFavs){
    console.log('entra a añadir')
    arrFavs.push(id)
    let arrToString = JSON.stringify(arrFavs)
    localStorage.setItem('favoritos', arrToString)
}

function removeFav(id, arrFavs){
    console.log('entra a sacar')
    let thePositionOfMyFav = arrFavs.indexOf(id)
    arrFavs.splice(thePositionOfMyFav, 1)
    let arrToString = JSON.stringify(arrFavs)
    localStorage.setItem('favoritos', arrToString)
}