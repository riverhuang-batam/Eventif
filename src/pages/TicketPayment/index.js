import React, {Component} from 'react';
import {
    Card,
    Row,
    Col,
    Container,
    UncontrolledButtonDropdown,
    Button,
    Input,
    FormGroup
} from 'reactstrap';
import EventIFLogo from './../../Images/Logoeventifv2(black).png'
import Bca from '../../Images/bca.jpg'
import Bri from '../../Images/bri.png'
import Bni from '../../Images/bni.png'
import Gopay from '../../Images/gopay.jpg'
import Alfamart from '../../Images/alfamart.jpg'
import Indomaret from '../../Images/indomaret.png'
export default class TicketPayment extends Component {
    render() {
        return (
            <div>
                <Container>

                    <Card>
                        <div className="text-center">
                            <img src={EventIFLogo} width="200px"/>
                        </div>

                        <p>Ticket:
                            <span
                                style={{
                                textAlign: "right"
                            }}>0</span>
                        </p>

                        <p>price:
                            <span
                                style={{
                                textAlign: "right"
                            }}>0</span>
                        </p>
                        <p>Total:
                            <span
                                style={{
                                textAlign: "right"
                            }}>0</span>
                        </p>
                        <p>Payment Method:</p>

                        <Row>
                            <Col md="4">
                                <FormGroup check inline>
                                    <Input type="checkbox" inline/>
                                    <img src={Bca} width="200px"/>
                                </FormGroup>
                            </Col>
                            <Col md="4">
                                <FormGroup check inline>
                                    <Input type="checkbox"/>
                                    <img src={Bri} width="200px"/>
                                </FormGroup>
                            </Col>
                            <Col md="4">
                                <FormGroup check inline>
                                    <Input type="checkbox"/>
                                    <img src={Bni} width="200px"/>
                                </FormGroup>
                            </Col>
                            <Col md="4">
                                <FormGroup check inline>
                                    <Input type="checkbox"/>
                                    <img src={Gopay} width="200px"/>
                                </FormGroup>
                            </Col>
                            <Col md="4">
                                <FormGroup check inline>
                                    <Input type="checkbox"/>
                                    <img src={Alfamart} width="200px"/>
                                </FormGroup>
                            </Col>
                            <Col md="4">
                                <FormGroup check inline>
                                    <Input type="checkbox"/>
                                    <img src={Indomaret} width="200px"/>
                                </FormGroup>
                            </Col>

                        </Row>

                        <Button body inverse color="success">Pay</Button>
                    </Card>
                </Container>
            </div>
        )
    }
}