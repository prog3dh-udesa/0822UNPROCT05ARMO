window.addEventListener('load', function(){
    let listContainer = document.querySelector('.lista-productos')
    let info = ''
    let form = document.querySelector('#buscador')
    let input = document.querySelector('[name=pelicula]')


    getAllProducts(listContainer, info)
    
})

function getAllProducts(container, infoToPrint){
    fetch('https://fakestoreapi.com/products')
    .then(function(resp){
        return resp.json()
    })
    .then(function(data){
        for(let i = 0; i < data.length ; i++){
            infoToPrint += `
            <li>
                <img class='imagen' src='${data[i].image}' />
                <a href='./details.html?id=${data[i].id}'>${data[i].title}</a>
            </li>
            `
        }

        container.innerHTML = infoToPrint
    })
    .catch(function(error){
        console.log(error)
    })
}

