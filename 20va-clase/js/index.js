let amigo = [
    'Eve',
    'Riquelme',
    'Duki'
]
let amigosToString = JSON.stringify(amigo)
localStorage.setItem('misAmigos', amigosToString)

let quieresBorrar= confirm('Quieres borrar a tus amigos')

if(quieresBorrar === true){
    localStorage.removeItem('misAmigos')
} else {
    let recuperoAmigos = localStorage.getItem('misAmigos')
    let amigosParsed = JSON.parse(recuperoAmigos)//['Eve', 'Riquelme', 'Duki']
    let body = document.querySelector('body')
    let data = ''

    for(let i = 0; i < amigosParsed.length ; i++){
        data += `<h1>${amigosParsed[i]}</h1>`
    }
    
    body.innerHTML = data

}