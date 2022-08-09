import axios from "axios";
import IMovieTheatre from "../models/IMovieTheatre";

const getComingSoon = () =>{
    return axios.get<IMovieTheatre[]>(`http://localhost:3001/movies-coming` )
    .then(response => response.data)
};
 
export{
    getComingSoon
}