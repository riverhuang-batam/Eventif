import React,{Component} from 'react';
import {Nav, Navbar,NavbarBrand, NavbarToggler,NavItem, UncontrolledDropdown,DropdownMenu, DropdownItem, Collapse, Jumbotron, Card, Row, Col } from 'reactstrap'
import {Route, Switch, HashRouter, NavLink} from 'react-router-dom'
import Home from './../../pages/Home'
import Eventpages from './../../pages/Eventpages'
import Loginpages from './../../pages/Loginpages'
import Profilepages from '../../pages/Profilepages'
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
      <Navbar style={{position:'fixed', top:0, width:"100%", zIndex:"1030", paddingBottom:'15'}} color="light" light expand="md" className="shadow mb-4">
        <NavbarBrand href='/'>EventIF</NavbarBrand>
        <NavbarToggler onClick={this.toggle}/>
        <Collapse isOpen={this.state.isOpen} navbar>
          <Nav className="ml-auto" navbar>
            <NavLink to="/">
            <NavItem style={{paddingRight:"30px"}}>
                Home
            </NavItem>
            </NavLink>
            <NavLink to="Eventpages" activeStyle={{color:'red'}}>
            <NavItem style={{paddingRight:"30px"}} >
            
                Event
            
            </NavItem>
            </NavLink>
            <NavLink to="Loginpages" activeStyle={{color:'red'}}>
            <NavItem style={{paddingRight:"30px"}}>
            
                Login
            
            </NavItem>
            </NavLink>
            <NavLink to="Profilepages" activeStyle={{color:'red'}}>
              <NavItem style={{paddingRight:"30px"}}>
                Profile
              </NavItem>
            </NavLink>
          </Nav>
        </Collapse>
      </Navbar>

   </div>
   <Switch>
     
     <Route exact path="/Eventpages" component={Eventpages}/>
     <Route exact path="/Loginpages" component={Loginpages}/>
     <Route exact path="/Profilepages" component={Profilepages}/>
   </Switch>
   </HashRouter>
    );
  }
}

