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
                <Row>
                    <Col
                        sm="12"
                        md={{
                        size: 6,
                        offset: 3
                    }}
                        style={{
                        paddingTop: "170px"
                    }}>
                        <Card className="shadow">
                            <Container>
                                <CardBody>
                                    <Form>
                                        <FormGroup>
                                            <Input type="email" placeholder="E-Mail"></Input>
                                        </FormGroup>
                                        <FormGroup>
                                            <Input type="password" placeholder="Password"/>
                                        </FormGroup>
                                        <Button>Login</Button>
                                        <Button>Register</Button> 
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