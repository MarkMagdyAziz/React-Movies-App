import axios from "axios";

export function getMovies(page) {
  return axios
    .get(
      `https://api.themoviedb.org/3/movie/popular?api_key=1bf930564c40f793a655e46f89c489dc&page=${page}`
    )
    .then(({ data }) => {
      return data.results;
    })
    .catch((err) => alert(err));
}
export function getMovieDetails(id) {
  return axios
    .get(
      `https://api.themoviedb.org/3/movie/${id}?api_key=1bf930564c40f793a655e46f89c489dc&page=1`
    )
    .then(({ data }) => {
      return data;
    })
    .catch((err) => alert(err));
}
export function getSearch(query) {
  return axios
    .get(
      `https://api.themoviedb.org/3/search/movie?api_key=1bf930564c40f793a655e46f89c489dc&query=${query}`
    )
    .then(({ data }) => {
      return data.results;
    })
    .catch((err) => alert(err));
}
