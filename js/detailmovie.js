// Atrapar selectores// 

let queryString = location.search;
console.log(queryString);
let queryStringobj = new URLSearchParams(queryString);
let id = queryStringobj.get('id');
let section = document.querySelector(".detalles");
console.log(id)

fetch ('https://api.themoviedb.org/3/movie/top_rated?api_key=b04e301645ef571f2efbccb360411716/${id}')

.then(function(response) {
  return response.json()
})

.then(function(data) {
  let info = data.response;
    section.innerHTML = `

    <h1 class="h1-Cars-Detail">${data.title}</h1>
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



















