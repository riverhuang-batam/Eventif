import React, { Component } from 'react';
import {Container, Row, Col, Card, CardBody, Form, FormGroup, Input, Button} from 'reactstrap'
import {HashRouter, Switch, Route, Link} from 'react-router-dom'
import Loginpages from '../Loginpages'
import logoeventif from './../../Images/Logoeventifv2(black).png'
export default class Registerpages extends Component{
    render(){
        return(
            <HashRouter>
                <Container>
            <div style={{paddingTop:"100px"}}>
                <Row><Col sm="12" md={{size:"4", offset:"4"}}>
                <Card className="shadow">
                    <Container>
                    <div className="text-center mt-4 mb-4">
                    <img top src={logoeventif}width="55%"/>
                    </div>
                    </Container>
                    <CardBody>
                        <Container>
                        <Form>
                            <FormGroup>
                                <Input type="text" placeholder="Username"/>
                            </FormGroup>
                            <FormGroup>
                                <Input type="email" placeholder="E-mail"/>
                            </FormGroup>
                            <FormGroup>
                                <Input type="password" placeholder="Password"/>
                            </FormGroup>
                            <FormGroup>
                                <Button body inverse color="warning" style={{color:"white"}} block>Register</Button>
                            </FormGroup>
                            <FormGroup>
                                <div className="text-center">
                                have an account?  
                                <span>
                                    <Link to="Loginpages">
                                    Login
                                    </Link>
                                </span>
                                </div>
                            </FormGroup>
                            
                        </Form>
                        </Container>
                    </CardBody>
                </Card>
                </Col></Row>
            </div>
            <Switch>
                <Route path="Loginpages" component={Loginpages}/>
            </Switch>
            </Container>
            </HashRouter>
        )
    }
}