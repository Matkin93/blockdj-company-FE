import React, { Component, Fragment } from 'react';
import CompanyForm from '../Companies/Form';

import produce from 'immer';

import * as api from '../../utils/api';
import Banner from '../Banner';

class Company extends Component {
    state = {
        company: false
    }
    render() {
        return (
            <Fragment>
                <Banner title={this.state.company.name}/>
                <CompanyForm/>
            </Fragment>
        );
    }

    componentDidMount() {
        this.getCompany();
    }

    getCompany = () => {
        const {params} = this.props.match;
        api.getCompany(params.id)
            .then(results => {
                const {company} = results.data;
                this.setState(
                    produce(draft => {
                        draft.company = company;
                    })
                )
            })
    }
}

export default Company;