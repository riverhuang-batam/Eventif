import React, {Component} from 'react'
import {
    Container,
    Form,
    Input,
    Button,
    Card,
    CardBody,
    FormGroup,
    Row,
    Col
} from 'reactstrap'
import Login from './../../Components/Login'

export default class Loginpages extends Component {
    render() {
        return (
            <div>
                <Row><Col md="4">
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
                </Col></Row>
            </div>
        )
    }
}