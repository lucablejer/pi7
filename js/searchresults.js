let queryString = location.search;
let queryObj = new URLSearchParams(queryString);
let buscar = queryObj.get("nav");
let series = queryObj.get("types");
let peliculas = queryObj.get("typem");
let oculto = document.querySelector(".hidden");
let encontrado = document.querySelector(".found");
let texto = document.querySelector(".h2-ds")

console.log(buscar);


if (peliculas) {
    
    let urlif= `https://api.themoviedb.org/3/search/movie?api_key=b04e301645ef571f2efbccb360411716&query=${buscar}`;

    fetch(urlif)

    .then(function (response) {
            return response.json();
        })

    .then(function (data) {
            let info = data.results;
            let allCharacters = "";

     if (info.length === 0) {
                oculto.style.display = "block";
                encontrado.style.display = "none";
            } 

     else {
           texto.innerText = 
           
           `Movies found for: ${buscar}`;
                for (let i = 0; i < info.length; i++) {
                    const element = info[i];
                    allCharacters += 
                    `<article class="article">
                        <a href="detailmovie.html?id=${element.id}">
                            <img src="https://image.tmdb.org/t/p/w500/${element.poster_path}" alt="${element.title}" class="img">
                            <h3 class="titulos">${element.title}</h3>
                            <p class="fecha">(${element.release_date})</p>
                        </a>
                    </article>`;
                }

                encontrado.innerHTML = allCharacters;
                oculto.style.display = "none";
                encontrado.style.display = "flex";
            }
        })
        .catch(function (error) {
            console.log("Error: " + error);
        });

} else if (series) {
    let urls = `https://api.themoviedb.org/3/search/tv?api_key=b04e301645ef571f2efbccb360411716&query=${buscar}`;
        fetch(urls)
        .then(function (response) {
            return response.json();
        })

        .then(function (data) {
            let info = data.results;
            let allCharacters = "";

            if (info.length === 0) {
                oculto.style.display = "block";
                encontrado.style.display = "none";

            } else {
                texto.innerText = 
                
                `Series found for: ${buscar}`;
                for (let i = 0; i < info.length; i++) {
                    const element = info[i];
                    allCharacters += `
                    <article class="articulo">
                        <a href="detailserie.html?id=${element.id}">
                            <img src="https://image.tmdb.org/t/p/w500/${element.poster_path}" alt="${element.name}" class="img">
                            <h3 class="titulo">${element.name}</h3>
                            <p class="fecha">(${element.first_air_date})</p>
                        </a>
                    </article>`;
                }
                encontrado.innerHTML = allCharacters;
                oculto.style.display = "none";
                encontrado.style.display = "flex";
            }
        })

  .catch(function (error) {
        console.log("Error: " + error);
        });
}