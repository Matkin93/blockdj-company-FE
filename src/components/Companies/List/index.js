import React, { Component } from 'react';
import { Table, Button } from 'reactstrap';

class CompaniesList extends Component {
    render() {
        const {companies} = this.props;
        return (
            <Table bordered striped>
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
                    {companies && (
                        companies.map(company => {
                            return (
                                <tr key={company._id}>
                                    <td>{company.name}</td>
                                    <td>{company.website}</td>
                                    <td>{company.facebook_url}</td>
                                    <td>{company.instagram_url}</td>
                                    <td>
                                        <Button color="primary" size="sm" block onClick={() => this.goToCompany(company._id)}>Edit</Button>
                                        <Button color="secondary" size="sm" onClick={() => this.goToOffers(company._id)} block>Offers</Button>
                                    </td>
                                </tr>
                            )
                        })
                    )}
                    {companies.length === 0 && (
                        <tr>
                            <td colSpan="5">No companies currently added</td>
                        </tr>
                    )}
                </tbody>
            </Table>
        );
    }
    goToCompany = (id) => {
        const {history} = this.props;
        history.push(`/companies/${id}`);
    }   
    goToOffers = (id) => {
        const {history} = this.props;
        history.push(`/companies/${id}/offers`);
    } 
}

export default CompaniesList;