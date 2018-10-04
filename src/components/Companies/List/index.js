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
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {companies && (
                        companies.map(company => {
                            return (
                                <tr key={company._id}>
                                    <td style={{width:'30%'}}>{company.name}</td>
                                    <td>{company.website}</td>
                                    <td style={{width:'20%'}}>
                                        <Button color="primary" style={{marginRight:'0.5rem'}} size="sm" onClick={() => this.goToCompany(company._id)}>Edit</Button>
                                        <Button color="primary" style={{marginRight:'0.5rem'}} size="sm" onClick={() => this.goToOffers(company._id)}>Offers</Button>
                                        <Button color="primary" size="sm">Playlists</Button>
                                    </td>
                                </tr>
                            )
                        })
                    )}
                    {companies.length === 0 && (
                        <tr>
                            <td colSpan="3">No companies currently added</td>
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