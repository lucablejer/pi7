// Redireccion a peliculas que seleccione el usuario //  

let mainjs = document.querySelector('.main-js')

const options1 = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3YWY5ZTY4ZjAwZDk2YjMwNmNjMGFiMmU1MmNlYWY5YyIsIm5iZiI6MTc0ODQzNjE2My41NjE5OTk4LCJzdWIiOiI2ODM3MDRjM2U4YmJkN2MwZDZlYjQwYTAiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.549fvUnBzos7VJDClsuRSkuZ_HeiJEQuucUegBVJJTk'
  }
};

fetch(`https://api.themoviedb.org/3/movie/5678?language=es-ES`,options1)
.then (function (response) {
    return response.json(); 
  })
.then (function (data) {
  console.log(data);

    mainjs.innerHTML +=
      `<h1 class="h1-Cars-Detail">${data.title}</h1>
        <ul>
            <li class="li-Cars-Detail">${data.release_date}</li>
            <li class="li-Cars-Detail">${data.runtime}</li>
            <li class="li-Cars-Detail">${data.genres}</li>
        </ul>

<section class="Cars-Section">
<div>
    <img class="Cars-Photo" src="https://image.tmdb.org/t/p/w500${data.poster_path}" alt="${data.title}">
</div>
<div>
    <p class="Cars-Text-Detail">${data.vote_average} <br> <br> ${data.overview}</p>
</div>
</section>`
  })

  .catch(function(error) {
  console.log("Error: " + error);
})
