let queryString = location.search;
let queryStringObj = new URLSearchParams(queryString);
let id = queryStringObj.get("id");
let nombre = queryStringObj.get("nombre")
let tipo = queryStringObj.get("tipo")
let titulo = document.querySelector(".tituloterror")
let section = document.querySelector(".terror")

titulo.innerHTML = ${tipo} de ${nombre}
if (tipo == "pelicula") {
    let url = 'https://api.themoviedb.org/3/discover/movie?api_key=b04e301645ef571f2efbccb360411716&with_genres=${id}'

    fetch(url)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            console.log(data);

            for (let i = 0; i < data.results.length; i++) {
                section.innerHTML += `
            <article class="peli1">     
            <img class="laballena" src= "https://image.tmdb.org/t/p/w500/${data.results[i].poster_path}" alt="Movie Poster">  
                <h3>${data.results[i].title}</h3>
                <p> Fecha de estreno: ${data.results[i].release_date}</p>
                <nav> 
                  <ul> 
                      <li class="ver"> <a href="./detallepelicula.html?id=${data.results[i].id}"> VER MAS </a></li>
                  </ul>
                </nav>
            </article>
              `
            }


        })
        .catch(function (error) {
            console.log("el error es:" + error);
        });

} else {
    let url = 'https://api.themoviedb.org/3/discover/tv?api_key=b04e301645ef571f2efbccb360411716&with_genres=${id}'

    fetch(url)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            console.log(data);

            for (let i = 0; i < data.results.length; i++) {
                section.innerHTML += `
        <article class="peli1">     
        <img class="laballena" src= "https://image.tmdb.org/t/p/w500/${data.results[i].poster_path}" alt="Movie Poster">  
            <h3>${data.results[i].name}</h3>
            <p> Fecha de estreno: ${data.results[i].release_date}</p>
            <nav> 
              <ul> 
                  <li class="ver"> <a href="./detalleserie.html?id=${data.results[i].id}"> VER MAS </a></li>
              </ul>
            </nav>
        </article>
          `
            }


        })

        .catch(function (error) {
            console.log("el error es:" + error);
        });
}