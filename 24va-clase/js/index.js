window.addEventListener('load', function(){
    let body = document.querySelector('body')
    let buttonMode  = document.querySelector('.color-mode__btn')
    let allCards = document.querySelectorAll('.card')

    for(let i = 0; i < allCards.length; i++){
        allCards[i].addEventListener('mouseover', function(e){
            e.target.innerText= 'Pase con el hover por aqui'
        })
    }

    buttonMode.addEventListener('click', function(event){
        // body.classList.add('dark')
        // body.classList.remove('clase-que-quier-sacar')
        body.classList.toggle('dark')
    })

})
