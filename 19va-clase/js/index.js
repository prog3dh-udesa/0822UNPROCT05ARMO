let list = document.querySelector('.container ul')
let liHtml = ''

fetch('https://rickandmortyapi.com/api/character')
.then(function(response){
    return response.json()
})
.then(function(data){
    
    for(let i = 0; i < data.results.length; i++){

/*        liHtml += '<li>' + data.results[i].name + '</li>'  */
       liHtml += `<li>Pepe${data.results[i].name}</li>`
    }
    list.innerHTML = liHtml
})
.catch(function(error){
    console.log(error)
})