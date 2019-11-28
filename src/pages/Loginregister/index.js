import React, {Component} from 'react'
import {Container, Button, Card, Row, Col} from 'reactstrap'
import {Switch, Route, HashRouter, Link} from 'react-router-dom'
import Loginpages from './../Loginpages'
import Registerpages from './../Registerpages'
export default class LoginRegister extends Component {
    render() {
        const boxcss = {
            visibility: "visible",
            display: "-webkitBox",
            display: "-msFlexbox",
            display: "flex",
            maxWidth: "24em",
            minWidth: "21em",
            height: "35px",
            webkitBoxShadow: "0px 0px 20px 0px rgba(15,15,15,0.2)",
            boxShadow: "0px 0px 20px 0px rgba(15, 15, 15, 0.2)",
            marginBottom: "30px",
            alignItems: "center",
            transition: "visibility 0.5s ease-out"

        }
        const controller = {
            flex: "1",
            textAlign: "center",
            height: "100%",
            lineHeight: "2",
            cursor: "pointer"
        }
        return (
            <HashRouter>
                <Container>
                    <div
                        className="text-center mb-4"
                        style={{
                        paddingTop: "120px",
                        backgroundColor: "#E5E5E5"
                    }}>
                        <Row>
                            <Col xs="2" md={{offset: 4 }}>
                                <Link to="/Loginregister/">

                                    <Card className="shadow">
                                        <a
                                            style={{
                                            borderBottomColor: "red",
                                            borderBottom: "1px",
                                            fontSize: "24px",
                                            fontWeight: "400"
                                        }}>Login</a>
                                    </Card>
                                </Link>
                            </Col>
                            <Col xs="2">
                                <Link to="/Loginregister/Registerpages">
                                    <Card className="shadow">
                                        <a
                                            style={{
                                            fontSize: "24px",
                                            fontWeight: "400"
                                        }}>Register</a>
                                    </Card>

                                </Link>
                            </Col>

                        </Row>

                    </div>
                    <div
                        style={{
                        backgroundColor: "#E5E5E5"
                    }}>
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