import axios from "axios";
import IMovieTheatre from "../models/IMovieTheatre";

const getMoviesInTheatre = () =>{
    return axios.get<IMovieTheatre[]>(`http://localhost:3001/movies-in-theaters` )
    .then(response => response.data)
};
 
export{
    getMoviesInTheatre
}