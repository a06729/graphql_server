import axios from "axios";
import {config} from "dotenv";

//env 파일 config()함수로 값 불러오기
config();

const perPage=process.env.perPage;
const Service_Key=process.env.API_Key;
const BASE_URL = `https://api.odcloud.kr/api/15077586/v1/centers?page=1&perPage=${perPage}&serviceKey=${Service_Key}`;


export const getVC=async()=>{
  const {data}= await axios.get(BASE_URL)
  .then((res)=>{
    // console.log(res.data);
    return res.data;
  });
  console.log(data);
  return data;
}

// export const getMovies=(limit,rating)=>{
//     return fetch(`${API_URL}`)
//          .then(res=>res.json())
//          .then(json=>json.data.movies);
// }

// export const getMovies= async (limit,rating)=>{
//     const {
//         data:{
//             data:{movies}
//         }
//     }=await axios(LIST_MOVIES_URL,{
//         params:{
//             limit,
//             minimum_rating:rating
//         }
//     });

//     return movies;
// }

// export const getMovie = async id => {
//     const {
//       data: {
//         data: { movie }
//       }
//     } = await axios(MOVIE_DETAILS_URL, {
//       params: {
//         movie_id: id
//       }
//     });
//     return movie;
//   };
  
// export const getSuggestions = async id => {
//     const {
//         data: {
//         data: { movies }
//         }
//     } = await axios(MOVIE_SUGGESTIONS_URL, {
//         params: {
//         movie_id: id
//         }
//     });
//     return movies;
//   };