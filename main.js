let name_movie = 'Senhor dos aneis';
const api_key = '56fecb03baf7574b5540869a273b92ca';
const token_api = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1NmZlY2IwM2JhZjc1NzRiNTU0MDg2OWEyNzNiOTJjYSIsInN1YiI6IjYzM2YwYzg1YTRhZjhmMDA3ZDFhZmEwMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.n-EaG6A6_VGqPXeCGr7bO8_Kn0sY8tyblx5DBstRT0g';
const url_api = `https://api.themoviedb.org/3/search/movie?api_key=${api_key}&language=pt-BR&query=${name_movie}` ;

fetch(url_api)
.then((res)=>res.json())
.then((data)=> console.log(data));