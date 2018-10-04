import React, { Component, Fragment } from 'react';
import {Container, Row, Col} from 'reactstrap'

import * as api from '../../utils/api';
import Banner from '../Banner';
import OffersList from './List';

class Offers extends Component {
    state = {
        offers: []
    }
    render() {
        return (
            <Fragment>
                <Banner title="Offers"/>
                <Container>
                    <Row>
                        <Col>
                            <OffersList {...this.props} {...this.state}/>
                        </Col>
                    </Row>
                </Container>
            </Fragment>
        );
    }

    componentDidMount(){
        this.getOffers();
    }

    getOffers = () => {
        const {params} = this.props.match;
        api.getCompanyOffers(params.id)
            .then(response => {
                const {offers} = response.data;
                this.setState({offers});
            })
            .catch(err => console.log)
    }
}

export default Offers;