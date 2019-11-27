import React,{Component} from 'react';
import {Nav, Navbar,NavbarBrand, NavbarToggler,NavItem,Collapse, Container} from 'reactstrap'
import {Route, Switch, HashRouter, NavLink} from 'react-router-dom'
import Home from './../../pages/Home'
import Createevent from '../../pages/Createevent'
import Eventpages from './../../pages/Eventpages'
import Loginregister from './../../pages/Loginregister'
import Registerpages from '../../pages/Registerpages';
import Loginpages from '../../pages/Loginpages';
import TicketFormCustomer from '../../pages/TicketFormCustomer'
import TicketPaymentCustomer from '../../pages/TicketPaymentCustomer'
import TicketPdfCustomer from '../../pages/TicketPdfCustomer'
import TicketCreate from '../../pages/TicketCreate'
import eventiflogo_dark from '../../Images/Logoeventifv2(black).png'
import eventiflogo_light from '../../Images/eventiflogo(light).png'
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
      <Navbar style={{position:'fixed', top:0, width:"100%", zIndex:"1030", paddingBottom:'15', backgroundColor:"#0156B0"}} light expand="md" className="mb-4">
        <NavbarBrand href='/'><img src={eventiflogo_light} width="80px"/></NavbarBrand>
        <NavbarToggler onClick={this.toggle}/>
        <Collapse isOpen={this.state.isOpen} navbar>
          <Nav className="ml-auto" navbar>
            <NavLink to="/">
            <NavItem style={{paddingRight:"30px", color:"white"}}>
              <h4>
                Home
                </h4>
            </NavItem>
            </NavLink>
            <NavLink style={{ display: "none" }} id="event" to="Createevent" activeStyle={{color:'red'}}>
              <NavItem style={{paddingRight:"30px"}}>
                <h4>
                CreateEvent
                </h4>
              </NavItem>
            </NavLink>
            
            <NavLink to="/Eventpages" activeStyle={{color:'red'}}>
            <NavItem  style={{paddingRight:"30px"}} >
            <h4>
                Event
                </h4>
            </NavItem>
            </NavLink>
            <NavLink to="/Loginregister" activeStyle={{color:'red'}}>
            <NavItem style={{paddingRight:"30px"}}>
            <h4>
                Login
                </h4>
            </NavItem>
            </NavLink>
          </Nav>
        </Collapse>
      </Navbar>

   </div>
   <div style={{backgroundColor:"#E5E5E5"}}>
   <Switch >
   <Route exact path="/" component={Home}/>
     <Route exact path="/Eventpages" component={Eventpages}/>
     <Route path="/Loginregister" component={Loginregister}/>
     <Route path="/Createevent" component={Createevent}/>
     <Route path="/Registerpages" component={Registerpages}/>
     <Route path="/Loginpages" component = {Loginpages}/>
     <Route path="/TicketFormCustomer" component = {TicketFormCustomer}/>
     <Route path="/TicketPaymentCustomer" component = {TicketPaymentCustomer}/>
     <Route path="/TicketPdfCustomer" component = {TicketPdfCustomer}/>
     <Route path="/TicketCreate" component = {TicketCreate}/>
   </Switch>
   </div>
   </HashRouter>
    );
  }
}

