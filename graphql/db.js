import axios from "axios";
import fetch from "node-fetch";

const BASE_URL = "https://yts-proxy.now.sh/";
const LIST_MOVIES_URL = `${BASE_URL}list_movies.json`;
const MOVIE_DETAILS_URL = `${BASE_URL}movie_details.json`;
const MOVIE_SUGGESTIONS_URL = `${BASE_URL}movie_suggestions.json`;

// export const getMovies=(limit,rating)=>{
//     return fetch(`${API_URL}`)
//          .then(res=>res.json())
//          .then(json=>json.data.movies);
// }

export const getMovies= async (limit,rating)=>{
    const {
        data:{
            data:{movies}
        }
    }=await axios(LIST_MOVIES_URL,{
        params:{
            limit,
            minimum_rating:rating
        }
    });

    return movies;
}

export const getMovie = async id => {
    const {
      data: {
        data: { movie }
      }
    } = await axios(MOVIE_DETAILS_URL, {
      params: {
        movie_id: id
      }
    });
    return movie;
  };
  
export const getSuggestions = async id => {
    const {
        data: {
        data: { movies }
        }
    } = await axios(MOVIE_SUGGESTIONS_URL, {
        params: {
        movie_id: id
        }
    });
    return movies;
  };