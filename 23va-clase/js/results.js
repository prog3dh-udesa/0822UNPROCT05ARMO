let endpoint = 'https://api.themoviedb.org/3/search/multi'
let apiKey = '?api_key=ba0b591fbb4dcbf21e7a279fceca5d5e'

let movie = location.search
console.log(location)
let objMovie = new URLSearchParams(movie)
let keyword = objMovie.get('pelicula')


fetch(`${endpoint}${apiKey}&query=${keyword}`)
.then(function (resp){
    return resp.json()
})
.then(function(data){
    console.log(data)
})
.catch(function(error){
    console.log(error)
})