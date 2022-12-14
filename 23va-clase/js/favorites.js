let container = document.querySelector('.favs-container');
let listContainer = document.querySelector('.list-container')

window.addEventListener('load', function(){
    let favs = getFavsStorage()
    if(favs.length == 0){
        container.innerHTML = `
        <li>
            <h4>No tienes favoritos</h4>
        </li>
        `
    } else {
        listContainer.innerHTML += `
        <h2>
            Tienes ${favs.length} favoritos
        </h2>
        ` 
        getAllFavsAndPrint(favs)
    }
})


function getFavsStorage(){
    let storage = localStorage.getItem('favoritos')

    if(storage !== null && storage !== undefined){
        return JSON.parse(storage)
    } else {
        return []
    }
}

function getAllFavsAndPrint(arrFavs){
    /*
    arrFavs vale [4, 8, 12]
    */
    for(let i = 0; i < arrFavs.length ; i++){
        fetch(`https://fakestoreapi.com/products/${arrFavs[i]}`)
        .then(function(resp){
            return resp.json()
        })
        .then(function(data){
            container.innerHTML += `
            <li>
                <article>
                    <img class='imagen' src='${data.image}' >
                    <a href='./details.html?id=${data.id}'>
                    <h5>${data.title}</h5>
                    </a>
                </article>
            </li>
            `
        })
        .catch(function(error){
            console.log(error)
        })
    }
}