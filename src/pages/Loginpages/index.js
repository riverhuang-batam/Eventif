import React, {Component} from 'react'
import {
    Container,
    Form,
    Input,
    Button,
    Card,
    CardImg,
    CardBody,
    FormGroup,
    Row,
    Col
} from 'reactstrap'
import Login from './../../Components/Login'
import {Redirect, Switch, Route, HashRouter, Router} from 'react-router-dom'
import Logoeventif from './../../Images/Logoeventifv2(black).png'

export default class Loginpages extends Component {
    render() {
        return (
            <div>
                <Row>
                    <Col
                        sm="12"
                        md={{
                        size: 4,
                        offset: 4
                    }}
                    >
                        <Card className="shadow">
                            <Container>

                                <Container>
                                    <div className="text-center mt-4 mb-4">
                                        <img top width="40%" src={Logoeventif}/>
                                    </div>
                                </Container>
                                <CardBody>
                                    <Form>
                                        <FormGroup>
                                            <Input type="email" placeholder="E-Mail"></Input>
                                        </FormGroup>
                                        <FormGroup>
                                            <Input type="password" placeholder="Password"/>
                                        </FormGroup>
                                        <Button>Login</Button>
                                    </Form>
                                    <Login/>
                                </CardBody>
                            </Container>
                        </Card>
                    </Col>
                </Row>
            </div>
        )
    }
}