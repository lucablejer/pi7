// atrapar selectores// 

let queryString = location.search;
let queryStringobj = new URLSearchParams(queryString);
let id = queryStringobj.get('id');
let section = document.querySelector(".detalles");
console.log(id)
let url = `https://api.themoviedb.org/3/tv/${id}?api_key=b04e301645ef571f2efbccb360411716 `


// a donde  te lleva al clickear x serie//

fetch (url)

.then(function(response) {
  return response.json()
})

.then(function(data) {
  console.log (data);

  let generos = ""; 

  for (let i=0; i < data.genres.length; i++){

    generos += `<a class="li-Cars-Detail" href= "detailserie.html?id=${data.genres[i].id}&nombre=${data.genres[i].name}&tipo=serie"> ${data.genres[i].name}</a>`
    }

    section.innerHTML = `
   
    <img class="image-movie" src="https://image.tmdb.org/t/p/w500/${data.poster_path}" alt="Serie Poster">
    
    <article class="detail-section"> 
          
          <h1 class= "detail-title">${data.name}</h1>
          <ul class="overview">
            <li class="title">${generos}</li>
            <li> Rating:${data.vote_average}</li>
            <li> Release date: ${data.first_air_date}</li>
        </ul>
        <p class="overview">${data.overview} </p>
    </article>
   
    ` 
 })

  .catch(function(error) {
   console.log("Error: " + error);
})
