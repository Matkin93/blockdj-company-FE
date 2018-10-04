import React, { Component, Fragment } from 'react';
import {Container, Row, Col} from 'reactstrap'

import * as api from '../../utils/api';
import Banner from '../Banner';
import CompaniesList from './List';

class Companies extends Component {
    state = {
        companies: []
    }
    render() {
        const {companies} = this.state;
        return (
            <Fragment>
                <Banner title="Companies"/>
                <Container>
                    <Row>
                        <Col>
                            <CompaniesList {...this.props} {...this.state}/>
                        </Col>
                    </Row>
                </Container>
            </Fragment>
        );
    }

    componentDidMount(){
        this.getCompanies();
    }

    getCompanies = () => {
        api.getCompanies()
            .then(response => {
                const {companies} = response.data;
                this.setState({companies});
            })
            .catch(err => console.log)
    }
}

export default Companies;