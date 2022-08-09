import React, { ReactPropTypes } from "react";
import IMovieTheatre from '../../models/IMovieTheatre';
import Card from 'react-bootstrap/Card';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { text } from "stream/consumers";
import '../common/Heart.css';
import '../../components/common/App.css';
import onHandleFavourite from './onHandleFavourite';
import PropTypes from 'prop-types';
import { getComingSoon } from '../../services/ComingSoon';





type Props = {
    movie: IMovieTheatre
    // onHandleFavourite: PropTypes.func.isRequired,
    }
const MoveieListItem = ({ movie }: Props) => {
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
    } = movie;

    return (
        <Card style={{ width: '16rem' }}>
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
                        onClick={()=> onHandleBookMark()}
                        />
                    </button>
                </Card.Text>
            </Card.Body>
        </Card>
    );
}

export default MoveieListItem;
function onHandleBookMark(): void {
    throw new Error("Function not implemented.");
}

