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
                                    <td>{offer.title}</td>
                                    <td>
                                        <ul>
                                            {offer.areas.map(area => {
                                                return (<li key={area._id}>{area.name}</li>)
                                            })}
                                        </ul>
                                    </td>
                                    <td>
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
            </Table>
        );
    }
}

export default OffersList;