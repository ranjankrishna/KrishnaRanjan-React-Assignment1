import React, { Component } from "react";
import { Alert, Row, Col } from "react-bootstrap";
import ITopRatedIndian from "../../models/ITopRatedIndian";
import { LoadingStatus } from '../../models/types';
import LoadingIndicator from '../common/LoadingIndicator';
import MovieListItemTopRatedIndian from "./MovieListItemTopRatedIndian";
import { getTopRatedIndian } from '../../services/TopRatedIndian';

type Props = {

};

type State = {
    status: LoadingStatus,
    movies: ITopRatedIndian[],
    error?: Error
};



class MoviesListIndia extends Component<Props, State>{
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
                                    <Col key={movie.title}>
                                        <MovieListItemTopRatedIndian
                                            movieIndia={movie} />
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
            const data = await getTopRatedIndian();
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

export default MoviesListIndia;