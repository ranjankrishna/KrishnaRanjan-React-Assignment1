import React, { Component, useEffect, useState } from "react";
import { Alert, Row, Col } from "react-bootstrap";
import IMovieTheatre from "../../models/IMovieTheatre";
import { LoadingStatus } from '../../models/types';
import LoadingIndicator from '../common/LoadingIndicator';
import MovieListItem from "./MovieListItem";
import { getMoviesInTheatre } from '../../services/moviesInTheatre';

type Props = {

};

type State = {
    status: LoadingStatus,
    movies: IMovieTheatre[]
    error?: Error
};

class MoviesListInTheatre extends Component<Props, State>{
    state: State = {
        status: 'LOADING',
        movies: []
    };
    render() {
        let el;
        const { status, movies, error } = this.state;

        switch (status) {
            case 'LOADING':
                el = (
                    <LoadingIndicator
                        size="large"
                        message="We are loading movies, please wait.."
                    />
                );
                break;
            case 'LOADED':
                el = (
                    <Row xs={1} md={2} lg={6}>
                        {
                            movies.map(
                                movie => (
                                    <Col key={movie.id}>
                                        <MovieListItem
                                            movie={movie} />
                                    </Col>
                                )
                            )
                        }
                    </Row>
                );
                break;
            case 'ERROR_LOADING':
                break;
        }
        return el;
    }
    async componentDidMount() {
        this.setState({
            status: 'LOADING'
        });

        try {
            const data = await getMoviesInTheatre();
            this.setState({
                status: 'LOADED',
                movies: data
            })
        } catch (error) {
            this.setState({
                status: 'ERROR_LOADING'
            })
        }
    }
}

export default MoviesListInTheatre;