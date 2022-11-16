window.addEventListener('load', function(){
    let listContainer = document.querySelector('.lista-productos')
    let info = ''
    
    fetch('https://fakestoreapi.com/products')
    .then(function(resp){
        return resp.json()
    })
    .then(function(data){
        for(let i = 0; i < data.length ; i++){
            info += `
            <li>
                <img class='imagen' src='${data[i].image}' />
                <a href='./details.html?id=${data[i].id}'>${data[i].title}</a>
            </li>
            `
        }

        listContainer.innerHTML = info
    })
    .catch(function(error){
        console.log(error)
    })
})