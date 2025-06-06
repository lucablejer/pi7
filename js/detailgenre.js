// Sitio donde el usuario selecciona un genero y lo redirecciona a una pagina con todas las peliculas/series de ese genero // 

let queryString = location.search; 
let queryStringobj = new URLSearchParams(queryString); 
let genres = queryStringobj.get(`genres`)
let main = document.querySelector(`.section-container-genre`)

fetch (`https://api.themoviedb.org/3/discover/movie?api_key=b04e301645ef571f2efbccb360411716&language=es-ES&with_${genres}`)

.then (function (response) {
    return response.json(); 
  })

.then (function (data) {
  console.log(`Console log`,data);
  
  for (let i = 0; i < data.results.length; i++) {
    console.log(i)

    main.innerHTML +=
      `<section class="section-container-genre">

        <div class="disneymovies-genre">
        
           <a class="a-genre" href="detailmovie.html?id=${data.results[i].id}">
            <img class='imggenre' src="http://image.tmdb.org/t/p/w500/${data.results[i].poster_path}" alt="${data.results[i].title}">
            <h2 class="titlegenre">${data.results[i].title}</h2>
            </a>
        </div>
        </section>`
  }
  })

  .catch(function(error) {
  console.log("Error: " + error);
})