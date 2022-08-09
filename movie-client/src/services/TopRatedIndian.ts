import axios from "axios";
import IMovieTheatre from "../models/IMovieTheatre";

const getTopRatedIndian = () =>{
    // return axios.get<IMovieTheatre[]>( '${process.env.REACT_APP_API_BASE_URL}/movies-in-theaters' )
    return axios.get<IMovieTheatre[]>(`http://localhost:3001/top-rated-india` )
    .then(response => response.data)
};
 
export{
    getTopRatedIndian
}