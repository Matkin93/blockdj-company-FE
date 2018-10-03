import React, { Component, Fragment } from 'react';
import {Button} from 'reactstrap'
import * as api from '../../utils/api';

class Companies extends Component {
    state = {
        companies: []
    }
    render() {
        const {companies} = this.state;
        return (
            <Fragment>
                {companies && 
                    <table className="table table-bordered">
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Website</th>
                                <th>Facebook</th>
                                <th>Instagram</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {companies.map(company => {
                                return (
                                    <tr key={company._id}>
                                        <td>{company.name}</td>
                                        <td>{company.website}</td>
                                        <td>{company.facebook_url}</td>
                                        <td>{company.instagram_url}</td>
                                        <td>
                                            <Button color="primary" size="sm">Edit</Button>
                                        </td>
                                    </tr>
                                )                     
                            })}
                        </tbody>
                    </table>
                }
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