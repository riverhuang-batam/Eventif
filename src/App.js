import React, {Component} from 'react';
import Login from './Components/Login'
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
                <Login/>
            </div>
        );
    }
}
