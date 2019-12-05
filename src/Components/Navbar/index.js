import React, {Component} from 'react';
import {
    Nav,
    Navbar,
    NavbarBrand,
    NavbarToggler,
    NavItem,
    Collapse,
    Container,
    Button
} from 'reactstrap'
import {Route, Switch, HashRouter, NavLink} from 'react-router-dom'
import Home from './../../pages/Home'
import Createevent from '../../pages/Createevent'
import Eventpages from './../../pages/Eventpages'
import Registerpages from '../../pages/Registerpages';
import Loginpages from '../../pages/Loginpages';
import TicketFormCustomer from '../../pages/TicketFormCustomer'
import TicketPaymentCustomer from '../../pages/TicketPaymentCustomer'
import TicketPdfCustomer from '../../pages/TicketPdfCustomer'
import TicketCreate from '../../pages/TicketCreate'
import eventiflogo_dark from '../../Images/Logoeventifv2(black).png'
import eventiflogo_light from '../../Images/eventiflogo(light).png'
import eventiflogo from '../../Images/eventiflogo.png'


export default class navbar extends Component {
    
    componentClickedlogout = () => {
        document
            .getElementById('login')
            .style
            .display = 'block'
        document
            .getElementById('logout')
            .style
            .display = 'none'
            document
            .getElementById('event')
            .style
            .display = 'none'
            
        window.location.hash = '/'
    }
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
            <HashRouter>
                <div >
                    <Navbar
                        style={{
                        position: 'fixed',
                        top: 0,
                        width: "100%",
                        zIndex: "1030",
                        paddingBottom: '15',
                        backgroundColor: "#FF9926",
                        opacity:"0.9"
                    }}
                        light
                        expand="md"
                        className="mb-4">
                        <NavbarBrand href='/'><img src={eventiflogo} width="80px"/></NavbarBrand>
                        <NavbarToggler
                            onClick={this.toggle}
                            style={{
                            color: "white"
                        }}/>
                        <Collapse isOpen={this.state.isOpen} navbar>
                            <Nav className="ml-auto" navbar>
                                <NavLink to="/">
                                    <NavItem
                                        style={{
                                        paddingRight: "30px",
                                        color: "white"
                                    }}
                                        className="text-center">
                                        <a
                                            style={{
                                            fontWeight: "500",
                                            fontSize: "18px",
                                        }}>
                                            Home
                                        </a>
                                    </NavItem>
                                </NavLink>
                                <NavLink
                                    style={{
                                    display: "none"
                                }}
                                    id="event"
                                    to="Createevent"
                                    activeStyle={{
                                    color: 'white'
                                }}>
                                    <NavItem
                                        style={{
                                        paddingRight: "30px",
                                        color: "white"
                                    }}
                                        className="text-center">
                                        <a
                                            style={{
                                            fontWeight: "500",
                                            fontSize: "18px",
                                            color: "white"
                                        }}>
                                            Create Event
                                        </a>
                                    </NavItem>
                                </NavLink>

                                <NavLink
                                    to="/Eventpages"
                                    activeStyle={{
                                    color: "white"
                                }}>
                                    <NavItem
                                        style={{
                                        paddingRight: "30px",
                                        color: "white"
                                    }}
                                        className="text-center">
                                        <a
                                            style={{
                                            fontWeight: "500",
                                            fontSize: "18px",
                                            color: "white"
                                        }}>
                                            Event
                                        </a>
                                    </NavItem>
                                </NavLink>
                                <NavLink
                                    to="/Loginpages"
                                    activeStyle={{
                                    color: 'red'
                                }}
                                    id="login"
                                    >
                                    <NavItem
                                        style={{
                                        paddingRight: "30px"
                                    }}
                                        className="text-center">
                                            
                                        <a
                                            style={{
                                            fontWeight: "500",
                                            fontSize: "18px",
                                            color: "white",
                                            
                                        }}>
                                            Login
                                        </a>
                                        
                                    </NavItem>
                                </NavLink>
                                        <NavLink to="/" onClick={this.componentClickedlogout}>
                                <NavItem
                                    style={{
                                    paddingRight: "30px",
                                    display: "none"
                                }}
                                    className="text-center"id="logout" 
                                    >
                                    <a
                                        style={{
                                        fontWeight: "500",
                                        fontSize: "18px",
                                        color: "white"
                                    }}>
                                        Logout
                                    </a>
                                </NavItem>
                                </NavLink>
                            </Nav>
                        </Collapse>
                    </Navbar>

                </div>
                <div style={{
                    backgroundColor: "#E5E5E5"
                }}>
                    <Switch >
                        <Route exact path="/" component={Home}/>
                        <Route exact path="/Eventpages" component={Eventpages}/>

                        <Route path="/Createevent" component={Createevent}/>
                        <Route path="/Registerpages" component={Registerpages}/>
                        <Route path="/Loginpages" component={Loginpages}/>
                        <Route path="/TicketFormCustomer" component={TicketFormCustomer}/>
                        <Route path="/TicketPaymentCustomer" component={TicketPaymentCustomer}/>
                        <Route path="/TicketPdfCustomer" component={TicketPdfCustomer}/>
                        <Route path="/TicketCreate" component={TicketCreate}/>
                    </Switch>
                </div>
                <p className="text-center mt-4 mb-4">copyright © Term|EventIF made by EventIF Team. All Rights Reserved.</p>
            </HashRouter>
        );
    }
}
