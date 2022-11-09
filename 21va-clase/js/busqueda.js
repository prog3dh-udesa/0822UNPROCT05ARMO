let searchQuery = location.search
let objQuery = new URLSearchParams(searchQuery)
let productName = objQuery.get('producto')

let url = "https://rickandmortyapi.com/api/character/?name=" + productName

fetch(url)
.then(function(response){
    console.log(response)
    return response.json()
})
.then(function(data){
    console.log(data)
    let container = document.querySelector('.container')

    let elementos = ''

    for(let i = 0; i < data.results.length; i++){
        elementos += `
        <article>
            <img src='${data.results[i].image}'>
            <h2>${data.results[i].name}</h2>
        </article>
        `
    }
    console.log(elementos)

    container.innerHTML = elementos

})
.catch(function (error){
    console.log(error)
})