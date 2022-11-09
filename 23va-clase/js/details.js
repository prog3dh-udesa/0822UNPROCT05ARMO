let query = location.search
console.log(query)
let objQuery = new URLSearchParams(query)
let id = objQuery.get('id')
let container = document.querySelector('.container')


fetch(`https://fakestoreapi.com/products/${id}`)
.then(function(resp){
    return resp.json()
})
.then(function(data){
    let favoritos = getStorage()
    let estaMiProducto = favoritos.includes(data.id)
    let textoInicial = ''
    if(estaMiProducto){
        textoInicial = 'Sacar de favoritos'
    } else {
        textoInicial = 'Agregar a Favoritos'
    }

    container.innerHTML = `
        <img class='imagen' src='${data.image}' />
        <h1>${data.title}</h1>
        <p>${data.price}</p>
        <button class='favoritos'>${textoInicial}</button>
    `

    let btnFavs = document.querySelector('.favoritos')

    btnFavs.addEventListener('click', function(e){
        
        let favoritos = getStorage()
        let estaMiProducto = favoritos.includes(data.id)

        if(estaMiProducto){
            removeFavorite(data.id, favoritos)
            e.target.innerText='Agregar a Favoritos'
        } else {
            addFavorite(data.id, favoritos)
            e.target.innerText='Sacar a Favoritos'

        }

    })
})
.catch(function(error){
    console.log(error)
})

function getStorage(){
    let storage = localStorage.getItem('favoritos')
    if(storage !== null && storage !== undefined){
        return JSON.parse(storage)
    } else {
        return []
    }
}

function addFavorite(id, storage){
    storage.push(id)
    let storageToString = JSON.stringify(storage)
    localStorage.setItem('favoritos', storageToString)
}

function removeFavorite(id, storage){
    let position = storage.indexOf(id)
    storage.splice(position, 1)
    let storageToString = JSON.stringify(storage)
    localStorage.setItem('favoritos', storageToString)
}
