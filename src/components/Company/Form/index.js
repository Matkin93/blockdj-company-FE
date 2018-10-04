import React, { Component, Fragment} from 'react';
import { Alert, Card, CardBody, Container, Row, Col, Button, Form, FormGroup, Input } from 'reactstrap';

import produce from 'immer';

import * as api from '../../../utils/api';

class CompanyForm extends Component {
    state = {
        company: false,
        error: false
    }
    render() {
        const {company} = this.state;
        return (
            <Fragment>
                <Container>
                    <Row>
                        <Col>
                            {this.state.error && <Alert color="danger">{this.state.error}</Alert>}
                            <Card style={{marginBottom:'1rem'}}>
                                <CardBody>
                                    {company && (
                                        <Form onSubmit={this.handleSubmit}>
                                            <FormGroup>
                                                <Input type="text" name="name" id="name" placeholder="Company name..." onChange={this.handleChange} value={this.state.company.name}/>
                                            </FormGroup>
                                            <FormGroup>
                                                <Input type="textarea" name="details" id="details" placeholder="Details..." onChange={this.handleChange} value={this.state.company.details}></Input>
                                            </FormGroup>
                                            <FormGroup>
                                                <Input type="text" name="website" id="website" placeholder="Website address..." onChange={this.handleChange} value={this.state.company.website}></Input>
                                            </FormGroup> 
                                            <FormGroup>
                                                <Input type="text" name="facebook_url" id="facebook_url" placeholder="Facebook address..." onChange={this.handleChange} value={this.state.company.facebook_url}></Input>
                                            </FormGroup>  
                                            <FormGroup>
                                                <Input type="text" name="instagram_url" id="instagram_url" placeholder="Instagram address..." onChange={this.handleChange} value={this.state.company.instagram_url}></Input>
                                            </FormGroup>    
                                            <FormGroup style={{marginBottom:0}}>
                                                <Button color="primary" onClick={this.updateCompany} style={{marginRight:'1rem'}}>Update Company</Button><Button color="secondary" onClick={this.clearForm}>Cancel</Button>
                                            </FormGroup>                                                                    
                                        </Form>
                                    )}
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
                        })
                    )
                    setBannerTitle(company.name);
                })
                .catch(err => console.log)
        }else{
            this.setState(
                produce(draft => {
                    draft.error = 'Company name is required'
                })
            )
        }
    }

    clearForm = () => {
        this.setState(
            produce(draft => {
                draft.error = false;
            })
        )
    }
}

export default CompanyForm;