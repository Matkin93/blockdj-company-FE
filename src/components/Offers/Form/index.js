import React, { Component, Fragment } from 'react';
import {Container, Row, Col, Form, FormGroup, Alert, Card, CardBody, Label, Input, Button} from 'reactstrap';

import produce from 'immer';

import * as api from '../../../utils/api';

class OfferForm extends Component {
    state = {
        alert: false,
        cities: [],
        city_areas: [],
        offer: {
            title: '',
            description: '',
            redemption: '',
            image_url:'',
            city: '',
            areas: []
        }
    }
    render() {
        const {alert, cities, city_areas} = this.state;
        const {title, description, redemption, image_url, city, areas} = this.state.offer;
        return (
            <Fragment>
                <Container>
                    <Row>
                        <Col>
                            {alert && <Alert color={alert.color}>{alert.message}</Alert>}
                            <Card style={{marginBottom:'1rem'}}>
                                <CardBody>
                                    <Form onSubmit={this.handleSubmit}>
                                        <FormGroup>
                                            <Row>
                                                <Col sm={4}><Label for="title">Title<small>What's the title for the offer?</small></Label></Col>
                                                <Col><Input type="text" name="title" id="title" placeholder="Offer title..." onChange={this.handleChange} value={title}/></Col>
                                            </Row>                                                
                                        </FormGroup>
                                        <FormGroup>
                                            <Row>
                                                <Col sm={4}><Label for="description">Description<small>What's the description for the offer?</small></Label></Col>
                                                <Col><Input type="textarea" name="description" id="description" placeholder="Offer description..." onChange={this.handleChange} value={description}/></Col>
                                            </Row>                                                
                                        </FormGroup> 
                                        <FormGroup>
                                            <Row>
                                                <Col sm={4}><Label for="description">Redemption<small>What are the redemption instructions?</small></Label></Col>
                                                <Col><Input type="textarea" name="redemption" id="redemption" placeholder="Offer redemption..." onChange={this.handleChange} value={redemption}/></Col>
                                            </Row>                                                
                                        </FormGroup> 
                                        <FormGroup>
                                            <Row>
                                                <Col sm={4}><Label for="description">Image URL<small>What image do you want to use?</small></Label></Col>
                                                <Col><Input type="image_url" name="image_url" id="image_url" placeholder="Image url..." onChange={this.handleChange} value={image_url}/></Col>
                                            </Row>                                                
                                        </FormGroup>
                                        <FormGroup>
                                            <Row>
                                                <Col sm={4}><Label for="description">City<small>What city do you want to place this offer in ?</small></Label></Col>
                                                <Col>
                                                    <Input type="select" name="city" id="city" placeholder="Offer city" onChange={this.handleCityChange} value={city}>
                                                        {cities && cities.map(city => {
                                                            return (<option key={city._id} value={city._id}>{city.name}</option>)
                                                        })}
                                                    </Input>
                                                </Col>
                                            </Row>                                                
                                        </FormGroup>    
                                        <FormGroup>
                                            <Row>
                                                <Col sm={4}><Label for="description">Areas<small>What areas do you want to place this offer in ?<br/>CTRL + Click / CMD + Click for multiple</small></Label></Col>
                                                <Col>
                                                    <Input type="select" multiple name="areas" id="areas" placeholder="Offer areas" onChange={this.handleChange} value={areas}>
                                                        {city_areas && city_areas.map(area => {
                                                            return (<option key={area._id} value={area._id}>{area.name}</option>)
                                                        })}
                                                    </Input>
                                                </Col>
                                            </Row>                                                
                                        </FormGroup>                                       
                                    </Form>
                                </CardBody>
                            </Card>
                            <Card>
                                <CardBody>
                                    <FormGroup style={{marginBottom:0}}>
                                        <Button color="primary" size="sm" onClick={this.addOffer} style={{marginRight:'1rem'}}>Add Offer</Button><Button color="secondary" size="sm" onClick={this.resetForm} style={{marginRight:'1rem'}}>Reset</Button><Button color="secondary" size="sm" onClick={this.cancel}>Cancel</Button>
                                    </FormGroup>
                                </CardBody>
                            </Card>                            
                        </Col>
                    </Row>
                </Container>
            </Fragment>
        );
    }
    componentDidMount = () => {
        this.getCities();
    }
    handleChange = (event) => {
        const {name, value} = event.target;
        this.setState(
            produce(draft => {
                draft[name] = value;
            })
        )
    }
    handleCityChange = (event) => {
        this.setState(produce(draft => {
            draft.city = event.target.value;
        }), () => this.getCityAreas(this.state.offer.city))
    }
    getCities = () => {
        api.getCities()
            .then(response => {
                const {cities} = response.data;
                this.setState(produce(draft => {
                    draft.cities = cities;
                }), () => this.getCityAreas(this.state.cities[0]._id))
            })
            .catch(err => console.log)
    }
    getCityAreas = (id) => {
        api.getCityAreas(id)
            .then(response => {
                const {areas} = response.data;
                this.setState(produce(draft => {
                    draft.city_areas = areas;
                }))
            })
            .catch(err => console.log)
    }
    isValidForm = () => {
        const {offer} = this.state;
        return offer.title.length > 0;
    }    
    resetForm = () => {
        this.setState(
            produce(draft => {
                draft.title = '';
                draft.alert = false;
            })
        )
    }
    addOffer = () => {
        const {offer} = this.state;
        delete offer.city

    }
    cancel = () => {

    }
}

export default OfferForm;