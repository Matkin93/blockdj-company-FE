import React, { Component, Fragment} from 'react';
import { Alert, Card, CardBody, Container, Row, Col, Button, Form, FormGroup, Input, Label } from 'reactstrap';

import produce from 'immer';

import * as api from '../../../utils/api';

class CompanyForm extends Component {
    state = {
        company: false,
        alert: false
    }
    render() {
        const {company} = this.state;
        return (
            <Fragment>
                <Container>
                    <Row>
                        <Col>
                            {this.state.alert && <Alert color={this.state.alert.color}>{this.state.alert.message}</Alert>}
                            <Card style={{marginBottom:'1rem'}}>
                                <CardBody>
                                    {company && (
                                        <Form onSubmit={this.handleSubmit}>
                                            <FormGroup>
                                                <Row>
                                                    <Col sm={4}><Label for="name">Name<small>What name is your business known under?</small></Label></Col>
                                                    <Col><Input type="text" name="name" id="name" placeholder="Company name..." onChange={this.handleChange} value={this.state.company.name}/></Col>
                                                </Row>                                                
                                            </FormGroup>
                                            <FormGroup>
                                                <Row>
                                                    <Col sm={4}><Label for="details">Details<small>Enter a description for your business</small></Label></Col>
                                                    <Col><Input type="textarea" name="details" id="details" placeholder="Details..." onChange={this.handleChange} value={this.state.company.details}></Input></Col>
                                                </Row>
                                            </FormGroup>
                                            <FormGroup>
                                                <Row>
                                                    <Col sm={4}><Label for="website">Website Address<small>Enter your business website address</small></Label></Col>
                                                    <Col><Input type="text" name="website" id="website" placeholder="Website address..." onChange={this.handleChange} value={this.state.company.website}></Input></Col>
                                                </Row>                                                
                                            </FormGroup> 
                                            <FormGroup>
                                                <Row>
                                                    <Col sm={4}><Label for="facebook_url">Facebook URL<small>Enter a facebook page url</small></Label></Col>
                                                    <Col><Input type="text" name="facebook_url" id="facebook_url" placeholder="Facebook address..." onChange={this.handleChange} value={this.state.company.facebook_url}></Input></Col>
                                                </Row>
                                            </FormGroup>  
                                            <FormGroup>
                                                <Row>
                                                    <Col sm={4}><Label for="instagram_url">Instagram URL<small>Enter a instagram url</small></Label></Col>
                                                    <Col><Input type="text" name="instagram_url" id="instagram_url" placeholder="Instagram address..." onChange={this.handleChange} value={this.state.company.instagram_url}></Input></Col>
                                                </Row>
                                            </FormGroup>                                                                        
                                        </Form>
                                    )}
                                </CardBody>
                            </Card>
                            <Card>
                                <CardBody>
                                    <FormGroup style={{marginBottom:0}}>
                                        <Button color="primary" size="sm" onClick={this.updateCompany} style={{marginRight:'1rem'}}>Update Company</Button><Button color="secondary" size="sm" onClick={this.resetForm} style={{marginRight:'1rem'}}>Reset</Button><Button color="secondary" size="sm" onClick={this.cancelUpdate}>Cancel</Button>
                                    </FormGroup>
                                </CardBody>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </Fragment>            
        );
    }

    componentDidMount() {
        this.getCompany();
    }

    handleSubmit = (event) => {
        event.preventDefault();
    }

    handleChange = (event) => {
        const {name, value} = event.target;
        this.setState(
            produce(draft => {
                draft.company[name] = value;
            })
        )
    }

    getCompany = () => {
        const {params} = this.props.match;
        const {setBannerTitle} = this.props;
        api.getCompany(params.id)
            .then(results => {
                const {company} = results.data;
                this.setState(
                    produce(draft => {
                        draft.company = company;
                    })
                )
                setBannerTitle(this.state.company.name);
            })
            .catch(err => console.log)
    }  
    
    isValidForm = () => {
        const {company} = this.state;
        return company.name.length > 0;
    }

    updateCompany = () => {
        if (this.isValidForm()){
            const {params} = this.props.match;
            const {setBannerTitle} = this.props;
            const {company} = this.state;
            api.updateCompany(params.id, company)
                .then(results => {
                    const {company} = results.data;
                    this.setState(
                        produce(draft => {
                            draft.company = company;
                            draft.alert = {message:'Company was successfully updated', color:'success'}
                        })
                    )
                    setBannerTitle(company.name);
                })
                .catch(err => console.log)
        }else{
            this.setState(
                produce(draft => {
                    draft.alert = {message:'Company name is required', color:'danger'}
                })
            )
        }
    }

    resetForm = () => {
        this.setState(
            produce(draft => {
                draft.alert = false;
            })
        )
    }

    cancelUpdate = () => {
        const {history} = this.props;
        history.push('/companies')
    }
}

export default CompanyForm;