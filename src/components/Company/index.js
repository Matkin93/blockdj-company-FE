import React, { Component, Fragment } from 'react';

import produce from 'immer';

import CompanyForm from './Form';
import Banner from '../Banner';

class Company extends Component {
    state = {
        title: ''
    }
    render() {
        return (
            <Fragment>
                <Banner title={this.state.title}/>
                <CompanyForm {...this.props} setBannerTitle={this.setBannerTitle}/>
            </Fragment>
        );
    }
    setBannerTitle = (title) => {
        this.setState(
            produce(draft => {
                draft.title = title;
            })
        )
    }
}

export default Company;