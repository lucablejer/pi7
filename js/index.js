// Atrapar a los selectores //

let movies = document.querySelector('.movies');
let series = document.querySelector('.series');
let newsmo = document.querySelector('.news');
console.log(movies)
console.log(series)
console.log(newsmo)

// Cambiar los textos de la pagina principal de peliculas populares //

fetch ('https://api.themoviedb.org/3/movie/top_rated?api_key=b04e301645ef571f2efbccb360411716')

.then (function (response) {
    return response.json(); 
  })

.then (function (data) {
  let info = data.results
  console.log(info);
  for (let i = 0; i <5 ; i++) {

    movies.innerHTML +=
      `<article class="movis">
          <a href="./detailmovie.html?id=${info[i].id}"><img src= "https://image.tmdb.org/t/p/w500/${info[i].poster_path}" alt="${info[i].title}" class="img">
          <h3 class="titulos">${info[i].title}</h3>
          <p class="fecha">(${info[i].release_date})</p></a>
      </article>`
  }
  })

  .catch(function(error) {
  console.log("Error: " + error);
})


// cambiar los textos de popular series //


fetch('https://api.themoviedb.org/3/tv/popular?api_key=b04e301645ef571f2efbccb360411716')
  
.then (function (response) {
    return response.json(); 
  })

  .then (function (data) {
  let info = data.results
  console.log(info);
  for (let i = 0; i < 5 ; i++) {
    series.innerHTML +=
    ` 
    <article class="movis">
        <a href="./detailserie.html?id=${info[i].id}"><img src= "https://image.tmdb.org/t/p/w500/${info[i].poster_path}" alt="${info[i].name}" class="img">
        <h3 class="titulos">${info[i].name}</h3>
        <p class="fecha">(${info[i].first_air_date})</p></a>
    </article>`
  }
  })

  .catch(function(error) {
  console.log("Error: " + error);
})


// cambiar los textos de la pagina principal upcoming movies//

fetch('https://api.themoviedb.org/3/movie/upcoming?api_key=b04e301645ef571f2efbccb360411716')

.then(function (response) {
    return response.json(); 
  })

  .then(function (data){
  let info = data.results
  console.log(info);
  for (let i = 0; i < 5 ; i++) {
    newsmo.innerHTML +=
    ` <article class="movis">
        <a href="./detailmovie.html?id=${info[i].id}"><img src= "https://image.tmdb.org/t/p/w500/${info[i].poster_path}" alt="${info[i].title}" class="img">
        <h3 class="titulos">${info[i].title}</h3>
        <p class="fecha">(${info[i].release_date})</p></a>
    </article>`
  }
  })
  
  .catch(function(error) {
  console.log("Error: " + error);
})
