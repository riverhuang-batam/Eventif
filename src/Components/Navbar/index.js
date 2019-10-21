import React,{Component} from 'react';
import {Nav, Navbar,NavbarBrand, NavbarToggler,NavItem, UncontrolledDropdown,DropdownMenu, DropdownItem, Collapse, Jumbotron, Card, Row, Col } from 'reactstrap'
import {Link} from 'react-router-dom'
export default class navbar extends Component{
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
                Home
            </NavItem>
            <NavItem>
            
                Event
            
            </NavItem>
            <NavItem>
            
                Login
            
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>

   </div>
    );
  }
}

