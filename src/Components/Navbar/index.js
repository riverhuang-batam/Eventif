import React,{Component} from 'react';
import {Nav, Navbar,NavbarBrand, NavbarToggler,NavItem, UncontrolledDropdown,DropdownMenu, DropdownItem, Collapse, Jumbotron, Card, Row, Col } from 'reactstrap'
import {Route, Switch, HashRouter, NavLink} from 'react-router-dom'
import Mainpages from '../../pages/Mainpages'
import Eventpages from './../../pages/Eventpages'
import Loginpages from './../../pages/Loginpages'
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
    <HashRouter>
   <div>
      <Navbar color="light" light expand="md" className="shadow mb-4">
        <NavbarBrand href='/'>EventIF</NavbarBrand>
        <NavbarToggler onClick={this.toggle}/>
        <Collapse isOpen={this.state.isOpen} navbar>
          <Nav className="ml-auto" navbar>
            <NavLink to="/">
            <NavItem>
                Home
            </NavItem>
            </NavLink>
            <NavLink to="Eventpages">
            <NavItem>
            
                Event
            
            </NavItem>
            </NavLink>
            <NavLink to="Loginpages">
            <NavItem>
            
                Login
            
            </NavItem>
            </NavLink>
          </Nav>
        </Collapse>
      </Navbar>

   </div>
   <Switch>
     <Route exact path="/" component={Mainpages}/>
     <Route exact path="/Eventpages" component={Eventpages}/>
     <Route exact path="/Loginpages" component={Loginpages}/>
   </Switch>
   </HashRouter>
    );
  }
}

