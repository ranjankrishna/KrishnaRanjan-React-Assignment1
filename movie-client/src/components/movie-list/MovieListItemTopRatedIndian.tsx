import React from "react";
import IMovieTheatre from '../../models/IMovieTheatre';
import ITopRatedIndian from "../../models/ITopRatedIndian";
import Card from 'react-bootstrap/Card';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { text } from "stream/consumers";
import '../common/Heart.css';



type Props = {
    movieIndia: ITopRatedIndian
}

const MoveieListItemIndia = ({ movieIndia }: Props) => {
    const {
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
    } = movieIndia;

    return (
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={`${process.env.REACT_APP_API_BASE_URL}${posterurl}`} />
            <Card.Body>
                <Card.Title>
                    {title}
                </Card.Title>
                <Card.Text>
                    Add to Favourites
                    <button type="button" className="Heart">
                        <FontAwesomeIcon
                            icon={faHeart}
                            size='lg'
                            className="me-2"
                            // onClick={() => getComingSoon()}
                        />
                    </button>
                </Card.Text>
            </Card.Body>
        </Card>
    );
}

export default MoveieListItemIndia;
