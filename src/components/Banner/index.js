import React from 'react';
import { Container, Jumbotron } from 'reactstrap';

const Banner = (props) => {
    const {title} = props;
    return (
        <Jumbotron fluid>
            <Container>
                <h1 className="display-5">{title}</h1>
            </Container>
        </Jumbotron>
    )
}

export default Banner;