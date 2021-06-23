// import {getMovies,getMovie,getSuggestions,getVC} from "./db";
import {getVC} from "./db";
const resolvers={
    Query:{
        vc:()=>getVC(),
        // movies:(_,{rating,limit})=>getMovies(limit,rating),
        // movie: (_, { id }) => getMovie(id),
        // suggestions: (_, { id }) => getSuggestions(id)
    },
}

export default resolvers;