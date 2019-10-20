import React, {Component} from 'react';
import {
    Nav,
    Navbar,
    NavbarBrand,
    NavbarToggler,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownMenu,
    DropdownItem,
    Collapse,
    Jumbotron,
    Card,
    Row,
    Col,
    Container
} from 'reactstrap'
import {Link} from 'react-router-dom'
export default class app extends Component {
    constructor(props) {
        super(props);
        this.toggle = this
            .toggle
            .bind(this)
        this.state = {
            isOpen: false
        }
    }
    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }
    render() {
        return (
            <div>
                <Navbar color="light" light expand="md">
                    <NavbarBrand href='/'>EventIF</NavbarBrand>
                    <NavbarToggler onClick={this.toggle}/>
                    <Collapse isOpen={this.state.isOpen} navbar>
                        <Nav className="ml-auto" navbar>
                            <NavItem>
                    
                                    Event
                    
                            </NavItem>
                            <NavItem>
                    
                                    About
                    
                            </NavItem>
                            <NavItem>
                    
                                    Login
                    
                            </NavItem>
                        </Nav>
                    </Collapse>
                </Navbar>
                <Jumbotron
                    fluid
                    style={{
                    backgroundSize: 'cover',
                    position: 'relative',
                    padding: '20%'
                }}>
                    <h1>EventIF</h1>
                </Jumbotron>
                <Container>
                <Row>
                    <Col>
                        <Card>text</Card>
                    </Col>
                    <Col>
                        <Card>Test</Card>
                    </Col>
                </Row>
                </Container>
            </div>
        );
    }
}
