

export default class ApiFetch {
  constructor(){
    // this.id = id
    this.BASA_URL = `https://api.themoviedb.org/3/`,
    this.allFilms = 'discover/',
    this.movie = 'movie/',
    this.api_key = '?api_key=62d44aec954e70e62cd2b71881d93db4',
    this.page = `&page=${1}`,
    this.limit = `limit=${4}`,
    this.language = '&language=en-US'
    this.sort = 'sort_by=popularity.desc'
    this.search = 'search/'
    this.include = '&include_adult=false'
    this.query = '&query='
  };
  infoAllFilm(){
    return fetch( this.BASA_URL + this.allFilms + 'movie' + this.api_key + this.page)
        .then(response => response.json())
        .then(data => data.results)
        .catch(error => console.error(error))
    
  }
  searchId(id){
        return fetch( this.BASA_URL + this.movie + id + this.api_key + this.page)
              .then(response => response.json())
              .then(data => data)
              .catch(error => console.error(error))
  }
  getMovie(searchText){
    return fetch(this.BASA_URL + this.search + 'movie' + this.api_key + this.query + searchText )
        .then(response => {
          console.log(response);
          if(response.ok){
            return response.json()
          }else{
            throw new error(console.error(error))
          }
        })
        .then(data => console.log(data))
        .catch(error => console.error(error))
  
  }

}


// let api = {  
// BASA_URL:`https://api.themoviedb.org/3/`,
// allFilms:'discover/',
// movie:'movie/',
// api_key:'?api_key=62d44aec954e70e62cd2b71881d93db4',
// }


// export default {
  
//   infoAllFilm(){
//       return fetch( api.BASA_URL + api.allFilms + 'movie' + api.api_key)
//           .then(response => response.json())
//           .then(data => data.results)
//           .catch(error => console.error(error))
      
//   },
//   searchId(id){
//     return fetch( api.BASA_URL + api.movie + id + api.api_key)
//           .then(response => response.json())
//           .then(data => data)
//           .catch(error => console.error(error))
//   },

// }

// 'https://api.themoviedb.org/3/discover/movie?api_key=62d44aec954e70e62cd2b71881d93db4',


// https://api.themoviedb.org/3/movie/550?api_key=62d44aec954e70e62cd2b71881d93db4
// let GetAPIConfigurationImages = {
//   base_url: 'http://image.tmdb.org/t/p/',
//   secure_base_url: 'https://image.tmdb.org/t/p/',
//   backdrop_sizes: ['w300', 'w780', 'w1280', 'original'],
// };

// fetch(
// )
//   .then(response => {
//     // console.log(response);
//     return response.json();
//   })
//   .then(data => {
//     // console.log(data);
//     return data
//     // return n.insertAdjacentHTML(
//     //   'beforeend',
//     //   `<img src='${GetAPIConfigurationImages.secure_base_url}${GetAPIConfigurationImages.backdrop_sizes[1]}${data.results[0].backdrop_path}' alt='img'/>`,
//   });

// //Для расшифровки жанров:
// fetch(
//   'https://api.themoviedb.org/3/genre/movie/list?api_key=62d44aec954e70e62cd2b71881d93db4',
// )
//   .then(response => {
//     // console.log(response);
//     return response.json();
//   })
//   .then(data => {
//     // console.log(data);
//   });
