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
import Facebooklogin from './../../Components/Facebooklogin'
import Googlelogin from './../../Components/Googlelogin'
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
                <Facebooklogin/>
                <Googlelogin/>
                </CardBody>
                </Col></Row>
            </div>
        )
    }
}