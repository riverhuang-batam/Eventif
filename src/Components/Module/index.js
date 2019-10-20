import React,{Component} from 'react';
import {Nav, Navbar,NavbarBrand, NavbarToggler,NavItem, UncontrolledDropdown,DropdownMenu, DropdownItem, Collapse, Jumbotron, Card, Row, Col } from 'reactstrap'
import {Link} from 'react-router-dom'
export default class Module extends Component{
  constructor(props){
    super(props);
    this.toggle= this.toggle.bind(this)
    this.state={
      isOpen:false
    }
  }
  toggle(){
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
      <Jumbotron>
        <h1>EventIf</h1>
        </Jumbotron>
      gweafeafwefawe
   </div>
    );
  }
}

