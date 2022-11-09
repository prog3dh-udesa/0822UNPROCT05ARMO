let container = document.querySelector('.container')

fetch('https://fakestoreapi.com/products')
.then(function (resp) {
    return resp.json()
})
.then(function (data){
    let elementos = ''
    
    for(let i = 0; i < data.length; i++){
        elementos +=`
        <article>
            <img class='img_producto' src=${data[i].image}>
            <a href='./resultado.html?id=${data[i].id}'>
            <h2>${data[i].title}</h2>
            </a>
        </article>
        `
    }

    container.innerHTML = elementos

})
.catch(function (error) {
    console.log(error)
})