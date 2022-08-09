import { type } from "@testing-library/user-event/dist/type";
import React from "react";
import Spinner from 'react-bootstrap/Spinner';

type Props = {
    size: 'small' | 'medium' |'large',
    message: string
};

const sizeMap = {
    small: {
        width: '1.5 rem',
        height: '1.5 rem'
    },
    medium: {
        width: '2 rem',
        height: '2 rem'
    },
    large: {
        width: '4 rem',
        height: '4 rem'
    }
}
const LoadingIndicator = ({ size, message }: Props) => {
    return (
        <div className="d-flex flex-column align-item-center">

            <Spinner animation="border" role="status" style={sizeMap[size]}>
                <span className="visually-hidden">{message}</span>
            </Spinner>
            <span className="my-2">{message}</span>
        </div>
    );
};

LoadingIndicator.defalutProps = {
    size: 'medium',
    message: 'Loading'
}
export default LoadingIndicator;