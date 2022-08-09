import axios from "axios";
import IMovieTheatre from "../models/IMovieTheatre";

const getTopRatedMovies = () =>{
    return axios.get<IMovieTheatre[]>(`http://localhost:3001/top-rated-movies` )
    .then(response => response.data)
};
 
export{
    getTopRatedMovies
}