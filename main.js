let name_movie = document.querySelector('.input-search');
const btn = document.querySelector('.search-btn');
const home_page = document.querySelector(".container");

async function main (){
    let movie = name_movie.value;
    const api_key = '56fecb03baf7574b5540869a273b92ca';
    const token_api = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1NmZlY2IwM2JhZjc1NzRiNTU0MDg2OWEyNzNiOTJjYSIsInN1YiI6IjYzM2YwYzg1YTRhZjhmMDA3ZDFhZmEwMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.n-EaG6A6_VGqPXeCGr7bO8_Kn0sY8tyblx5DBstRT0g';
    const url_api = `https://api.themoviedb.org/3/search/movie?api_key=${api_key}&language=pt-BR&query=${movie}`;

    //home_page.style.display = "none";
    const data_api = await fetch(url_api).then((res) => res.json())
    console.log(data_api);
}

btn.addEventListener("click", main)
