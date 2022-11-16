let apiKey = 'ba0b591fbb4dcbf21e7a279fceca5d5e'
let endPointMovies = 'https://api.themoviedb.org/3/movie/popular?api_key='
let endpointSeries = 'https://api.themoviedb.org/3/tv/popular?api_key='

fetch(`${endPointMovies}${apiKey}`)
.then(function(resp){
    return resp.json()
})
.then(function(data){
    console.log(data)
})
.catch(function(error){
    console.log(error)
})

fetch(`${endPointSeries}${apiKey}`)
.then(function(resp){
    return resp.json()
})
.then(function(data){
    console.log(data)
})
.catch(function(error){
    console.log(error)
})

