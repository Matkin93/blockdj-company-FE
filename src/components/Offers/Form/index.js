import React, { Component } from 'react';
import {Container, Row, Col, Form, FormGroup} from 'reactstrap';

class OfferForm extends Component {
    state = {
        alert: false,
        title: ''
    }
    render() {
        const {alert, title} = this.state;
        return (
            <Fragment>
                <Container>
                    <Row>
                        <Col>
                            {alert && <Alert color={alert.color}>{alert.message}</Alert>}
                            <Card style={{marginBottom:'1rem'}}>
                                <CardBody>
                                    {company && (
                                        <Form onSubmit={this.handleSubmit}>
                                            <FormGroup>
                                                <Row>
                                                    <Col sm={4}><Label for="title">Title<small>What's the title for the offer?</small></Label></Col>
                                                    <Col><Input type="text" name="title" id="title" placeholder="Offer title..." onChange={this.handleChange} value={this.state.title}/></Col>
                                                </Row>                                                
                                            </FormGroup>
                                        </Form>
                                    )}
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
    resetForm = () => {
        
    }
    addOffer = () => {

    }
    cancel = () => {

    }
}

export default OfferForm;