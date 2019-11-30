import React, {Component} from 'react'
import {Container, Button, ButtonGroup, Card, Row, Col} from 'reactstrap'
import {Switch, Route, HashRouter, Link} from 'react-router-dom'
import Loginpages from './../Loginpages'
import Registerpages from './../Registerpages'
export default class LoginRegister extends Component {
    render() {
        
        return (
            <HashRouter>
                <Container>
                    <div
                        className="text-center mb-4"
                        style={{
                        paddingTop: "120px",
                        backgroundColor: "#E5E5E5"
                    }}>
                        
                                <Link to="/Loginregister/">
                            
                                    <Button className="shadow" outline color="warning">
                                        <a
                                            style={{
                                            borderBottomColor: "red",
                                            borderBottom: "1px",
                                            fontSize: "20px",
                                            fontWeight: "400",
                                            
                                        }}>Login</a>
                                    </Button>{' '}
                                </Link>
                            
                                <Link to="/Loginregister/Registerpages">
                                    <Button className="shadow" outline color="warning">
                                        <a
                                            style={{
                                            fontSize: "20px",
                                            fontWeight: "400"
                                        }}>Register</a>
                                    </Button>

                                </Link>
                                </div>

                    
                    <div
                      className="mb-4">
                        
                        <Switch>

                            <Route exact path="/Loginregister/" component={Loginpages}/>
                            <Route exact path="/Loginregister/Registerpages" component={Registerpages}/>
                        </Switch>
                    </div>
                </Container>
            </HashRouter>
        )
    }
}