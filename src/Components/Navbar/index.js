import React,{Component} from 'react';
import {Nav, Navbar,NavbarBrand, NavbarToggler,NavItem, UncontrolledDropdown,DropdownMenu, DropdownItem, Collapse, Jumbotron, Card, Row, Col } from 'reactstrap'
import {Route, Switch, HashRouter, NavLink} from 'react-router-dom'
import Home from './../../pages/Home'
import Createevent from '../../pages/Createevent'
import Eventpages from './../../pages/Eventpages'
import Loginregister from './../../pages/Loginregister'
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
            <NavLink to="Createevent" activeStyle={{color:'red'}}>
              <NavItem style={{paddingRight:"30px"}}>
                CreateEvent
              </NavItem>
            </NavLink>
            
            <NavLink to="Eventpages" activeStyle={{color:'red'}}>
            <NavItem style={{paddingRight:"30px"}} >
            
                Event
            
            </NavItem>
            </NavLink>
            <NavLink to="Loginregister" activeStyle={{color:'red'}}>
            <NavItem style={{paddingRight:"30px"}}>
            
                Login
            
            </NavItem>
            </NavLink>
          </Nav>
        </Collapse>
      </Navbar>

   </div>
   <Switch>
   <Route exact path="/" component={Home}/>
     <Route path="/Eventpages" component={Eventpages}/>
     <Route path="/Loginregister" component={Loginregister}/>
     <Route path="/Createevent" component={Createevent}/>
     <Route exact path="/Profilepages" component={Profilepages}/>
   </Switch>
   </HashRouter>
    );
  }
}

