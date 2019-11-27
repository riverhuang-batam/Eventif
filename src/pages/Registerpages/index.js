import React, { Component } from 'react';
import {Container, Row, Col, Card, CardBody, Form, FormGroup, Input, Button} from 'reactstrap'
import logoeventif from './../../Images/Logoeventifv2(black).png'
export default class Registerpages extends Component{
    render(){
        return(
            <div>
                
                <Row><Col sm="12" md={{size:"4", offset:"4"}}>
                <Card className="shadow">
                    <Container>
                    <div className="text-center mt-4 mb-4">
                    <img top src={logoeventif}width="40%"/>
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
                                <Button>Register</Button>
                            </FormGroup>
                            
                        </Form>
                        </Container>
                    </CardBody>
                </Card>
                </Col></Row>
            </div>
        )
    }
}