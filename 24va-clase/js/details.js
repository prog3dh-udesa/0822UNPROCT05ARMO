let query = location.search
console.log(query)
let objQuery = new URLSearchParams(query)
/*
{
    id: 1,
}
*/
let id = objQuery.get('id')
let container = document.querySelector('.container')


fetch(`https://fakestoreapi.com/products/${id}`)
.then(function(resp){
    return resp.json()
})
.then(function(data){

    let favoritos = getStorage() //[] o [1, 4, 674]
    //si data.id es igual a 56
    let estaMiProducto = favoritos.includes(data.id) 
    //El includes va a buscar ese 56 dentro del array
    //Y lo que va a retornar es true o false
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
        console.log(e)        
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
    //Storage es esto [1, 4, 674]
    let position = storage.indexOf(id) //aca por id recibio a 674
    //Entonces position va a valer 2
    storage.splice(position, 1)
    //[1, 4,||674] se para en la posicion 2 y saca un elemento
    let storageToString = JSON.stringify(storage)
    localStorage.setItem('favoritos', storageToString)
}
