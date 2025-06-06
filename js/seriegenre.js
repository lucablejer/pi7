// Atrapar los selectores //

let queryString = location.search
let queryObj = new URLSearchParams (queryString)
let movie =  queryObj.get ('.typem')
let gen = document.querySelector('.generos') 
let generos = ""; 

let url = 'https://api.themoviedb.org/3/genre/tv/list?api_key=b04e301645ef571f2efbccb360411716&language=es-ES'

fetch (url)
.then(function(response) {
    return response.json()
  })
.then(function(data) {
  
    for (let i=0; i < data.genres.length; i++){
        console.log('vuelta ', [i], generos);
        generos += `<a class=".generos" href= "detailsgenre.html?id=${data.genres[i].id}> ${data.genres[i].genre}</a>`
    }
    
    gen.innerHTML = generos

   })
   

.catch(function(error) {
    console.log("Error: " + error);
 })
 
  