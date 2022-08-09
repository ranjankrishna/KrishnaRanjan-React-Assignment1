import React, { useEffect, useState } from "react";
import { Alert, Row, Col, Badge } from "react-bootstrap";
import IMovieTheatre from "../../models/IMovieTheatre";
import { LoadingStatus } from '../../models/types';
import LoadingIndicator from '../common/LoadingIndicator';


type Props = {
};

const movieDetail = {
    "id": "1",
    "title": "Black Panther",
    "year": "2018",
    "genres": [
        "Action",
        "Adventure",
        "Sci-Fi"
    ],
    "ratings": [
        4,
        1,
        9,
        6,
        2,
        10,
        6,
        5,
        1,
        7,
        4,
        5,
        6,
        5,
        6,
        3,
        10,
        10,
        8,
        2,
        5,
        3,
        4,
        6,
        6,
        7,
        9,
        4,
        4,
        9
    ],
    "poster": "MV5BMTg1MTY2MjYzNV5BMl5BanBnXkFtZTgwMTc4NTMwNDI@._V1_SY500_CR0,0,337,500_AL_.jpg",
    "contentRating": "15",
    "duration": "PT134M",
    "releaseDate": "2018-02-14",
    "averageRating": 0,
    "originalTitle": "",
    "storyline": "After the events of Captain America: Civil War, King T'Challa returns home to the reclusive, technologically advanced African nation of Wakanda to serve as his country's new leader. However, T'Challa soon finds that he is challenged for the throne from factions within his own country. When two foes conspire to destroy Wakanda, the hero known as Black Panther must team up with C.I.A. agent Everett K. Ross and members of the Dora Milaje, Wakandan special forces, to prevent Wakanda from being dragged into a world war.                Written by\nEditor",
    "actors": [
        "Chadwick Boseman",
        "Michael B. Jordan",
        "Lupita Nyong'o"
    ],
    "imdbRating": 7,
    "posterurl": "sample-files/MV5BMTg1MTY2MjYzNV5BMl5BanBnXkFtZTgwMTc4NTMwNDI@._V1_SY500_CR0,0,337,500_AL_.jpg"
};

const MovieDetails = (props: Props) => {
    const [status, setStatus] = useState<LoadingStatus>('LOADING');
    const [movie, setMovie] = useState<IMovieTheatre | null>(null);
    const [error, setError] = useState<Error | null>(null);

    const fetchMovieDetails = () => {
        setTimeout(() => {
            setMovie(movieDetail)
            setStatus('LOADED');
        }, 2000);
    };

    useEffect(fetchMovieDetails, []);
    let el;

    switch (status) {
        case 'LOADING':
            el = (
                <LoadingIndicator
                    size="large"
                    message="We are fetching details of the movie, please wait.."
                />
            );
            break;
        case 'LOADED':
            const {
                id,
                title,
                year,
                genres,
                ratings,
                poster,
                contentRating,
                duration,
                releaseDate,
                averageRating,
                originalTitle,
                storyline,
                actors,
                imdbRating,
                posterurl
            } = movie as IMovieTheatre;
            el = (

                <Row>

                    <Col xs={12} lg={4}>
                        <img
                            src={`${process.env.REACT_APP_API_BASE_URL}${posterurl}`}
                            alt={title}
                            className="w-100" />
                    </Col>
                    <Col>
                        <Row><Col>
                            <div className="me-2"><h2>{title} ( {year} )</h2></div>
                        </Col></Row>
                        <Row><Col xs={12} lg={4}>Imdb Rating</Col><Col>{imdbRating}</Col></Row>
                        <Row><Col xs={12} lg={4}> Content Rating</Col><Col>{contentRating}</Col></Row>
                        <Row><Col xs={12} lg={4}> Average Rating</Col><Col>{ratings}</Col></Row>
                        <Row><Col xs={12} lg={4}> Duration</Col><Col>{duration}</Col></Row>
                        <Row><Col xs={12} lg={4}> Genres</Col><Col>{genres}</Col></Row>
                        <Row><Col xs={12} lg={4}> Actors</Col><Col>{actors}</Col></Row>
                        <Row><Col xs={12} lg={4}> Release Date</Col><Col>{releaseDate}</Col></Row>
                        <Row><Col xs={12} lg={4}> Story Line</Col><Col>{storyline}</Col></Row>
                    </Col>
                </Row>

            );
            break;
        case 'ERROR_LOADING':
            break;
    }
    return el;
}

export default MovieDetails;