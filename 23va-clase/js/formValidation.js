window.addEventListener('load', function(){
    let input = document.querySelector('.buscador')
    let form = document.querySelector('.formBuscador')

    formValidation(form, input)
})

function formValidation(form, input){
    input.addEventListener('focus', function(){
        console.log('ME ESTAN ENFOCANDO!!!')
    })
    input.addEventListener('blur', function(){
        console.log('ME DEJARON DE ENFOCAR, CAPAZ ME ESCRIBIERON ALGO')
    })

    input.addEventListener('input', function(){
        console.log(this.value)
    })

    form.addEventListener('submit', function(e){
        e.preventDefault()
        if(input.value.length < 6){
            alert('Es muy corta tu busqueda')
        } else {
            this.submit()
        }
    })
}

