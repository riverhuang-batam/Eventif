import React, {Component} from 'react';
import {

    Button,
    Input,
    FormGroup,
    Modal,
    ModalFooter,
    ModalBody,
    ModalHeader,
    Label,
    Row,
    Col,
    Card,
    Container
} from 'reactstrap';
import EventIFLogo from './../../Images/Logoeventifv2(black).png'

import {HashRouter, Route, Switch, Link} from 'react-router-dom'
export default class CashTicket extends Component {
    constructor(props) {
        super(props);
        this.state = {
            modal: false
        };
        this.toggle = this
            .toggle
            .bind(this);

    }
    toggle = () => {
        this.setState(prevState => ({
            modal: !prevState.modal
        }))
    }

    render() {
        return (
            <div>
                <Button
                    body
                    inverse
                    color="warning"
                    style={{
                    color: "white"
                }}
                    onClick={this.toggle}>
                    Cash Ticket
                </Button>
                <Modal isOpen={this.state.modal} toggle={this.toggle} className="shadow">
                    <ModalHeader toggle={this.toggle}>Cash Ticket

                    </ModalHeader>
                    <ModalBody>
                        <FormGroup>
                            <Label>Ticket Name</Label>
                            <Input type="text" placeholder="Ticket Name"/>
                        </FormGroup>
                        <FormGroup>
                            <Label>Ticket Amount</Label>
                            <Input type="number" placeholder="Ticket Amount"/>
                        </FormGroup>
                        <FormGroup>
                            <Label>Ticket Price</Label>
                            <Input type="number" placeholder="Rp. 1000">1000</Input>
                        </FormGroup>
                        <FormGroup>

                            <Card
                                style={{
                                backgroundColor: "#615A5A"
                            }}>
                                <Container className="mt-2">
                                    <Row>
                                        <Col md="5">
                                            <p
                                                style={{
                                                color: "white"
                                            }}>
                                                Harga Tiket

                                            </p>
                                        </Col>
                                        <Col md="7">
                                            <p
                                                style={{
                                                color: "white"
                                            }}>Rp. 10000</p>
                                        </Col>
                                        <Col md="5">
                                            <p
                                                style={{
                                                color: "white",
                                                borderBottomColor: "1px solid white"
                                            }}>
                                                Event Service Fee
                                            </p>
                                        </Col>
                                        <Col md="7">
                                            <p
                                                style={{
                                                color: "white"
                                            }}>
                                                (Rp 0/tiket + Rp 3.000/transaksi)</p>
                                        </Col>
                                    </Row>
                                </Container>
                            </Card>

                        </FormGroup>
                        <Row form>
                            <Col md={6}>
                                <FormGroup>
                                    <Label>
                                        Start date of sale</Label>
                                    <Input type="date" placeholder="Description"/>
                                </FormGroup>
                            </Col>
                            <Col md={6}>
                                <FormGroup>
                                    <Label>
                                        End date of sale</Label>
                                    <Input type="date" placeholder="Description"/>
                                </FormGroup>
                            </Col>

                            <Col md={6}>
                                <FormGroup>
                                    <Label>
                                        Start Time of sale</Label>
                                    <Input type="time" placeholder="Description"/>
                                </FormGroup>
                            </Col>
                            <Col md={6}>
                                <FormGroup>
                                    <Label>
                                        End Time of sale</Label>
                                    <Input type="time" placeholder="Description"/>
                                </FormGroup>
                            </Col>
                        </Row>
                        <FormGroup>
                            <Label>Ticket Description</Label>
                            <Input type="textarea" placeholder="Description"/>
                        </FormGroup>

                    </ModalBody>
                    <ModalFooter>

                        <Button
                            body
                            inverse
                            color="warning"
                            style={{
                            color: "white"
                        }}
                            onClick={this.toggle}>OK</Button>

                        <Button body inverse color="danger" onClick={this.toggle}>Cancel</Button>
                    </ModalFooter>
                </Modal>
            </div>
        )
    }
}