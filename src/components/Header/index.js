import React, { Component, Fragment } from 'react';
import { Navbar, NavbarBrand, NavbarToggler, Collapse, Nav, NavItem, NavLink, Container, Jumbotron } from 'reactstrap';

class Header extends Component {
    state = {
        isOpen: false
    }
    toggle = () => {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }      
    render() {
        const {title, description} = this.props;
        return (
            <Fragment>
                <Navbar color="dark" dark expand="md">
                    <Container>
                        <NavbarBrand href="/">BlockDJ Company</NavbarBrand> 
                        <NavbarToggler onClick={this.toggle} />
                        <Collapse isOpen={this.state.isOpen} navbar>
                            <Nav className="ml-auto" navbar>
                                <NavItem>
                                    <NavLink href="/">Home</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink href="/companies">Companies</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink href="/offers">Offers</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink href="/offers">Playlists</NavLink>
                                </NavItem>
                            </Nav>
                        </Collapse>
                    </Container>
                </Navbar> 
                <Jumbotron fluid>
                    <Container>
                        <h1 className="display-5">{title}</h1>
                        <p className="lead">{description}</p>
                    </Container>
                </Jumbotron>

            </Fragment>

        );
    }
}

export default Header;