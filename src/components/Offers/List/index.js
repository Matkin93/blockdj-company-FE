import React, { Component } from 'react';

import { Table, Button } from 'reactstrap';

class OffersList extends Component {
    render() {
        const {offers} = this.props;
        return (
            <Table bordered striped>
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Areas</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {offers && (
                        offers.map(offer => {
                            return (
                                <tr key={offer._id}>
                                    <td width="40%">{offer.title}</td>
                                    <td>
                                        <ul style={{margin:0,padding:0}}>
                                            {offer.areas.map(area => {
                                                return (<li key={area._id} style={{display:'inline',marginRight:'0.5rem'}}>{area.name}</li>)
                                            })}
                                        </ul>
                                    </td>
                                    <td width="10%">                                     
                                        <Button color="primary" size="sm" block onClick={() => this.goToOffer(offer._id)}>Edit</Button>
                                    </td>
                                </tr>
                            )
                        })
                    )}
                    {offers.length === 0 && (
                        <tr>
                            <td colSpan="3">No offers currently added</td>
                        </tr>
                    )}
                </tbody>
                <tfoot>
                    <tr>
                        <td colSpan="3"><Button color="primary" size="sm" onClick={this.goToAddOffer}>Add Offer</Button></td>
                    </tr>
                </tfoot>
            </Table>
        );
    }
    goToAddOffer = () => {
        const {history, match} = this.props;
        history.push(`/companies/${match.params.id}/offers/add`);
    }    
}

export default OffersList;