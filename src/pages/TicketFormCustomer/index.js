import React, {Component} from 'react';
import {
    Card,
    Row,
    Col,
    Form,
    Input,
    FormGroup,
    UncontrolledButtonDropdown,
    Button,
    Label
} from 'reactstrap';
import {HashRouter, Route, Switch, Link} from 'react-router-dom'
import TicketPaymentCustomer from '../TicketPaymentCustomer';

export default class TicketFormCustomer extends Component {
    render() {
        return (
            <HashRouter>
                <div style={{
                        paddingTop: "120px",
                        backgroundColor:"#E5E5E5"
                    }}  >

                    <Row>
                        <Col xs="8">
                            <Card shadow>
                                <Form>
                                    <FormGroup>
                                        <Input></Input>
                                        <Button>+</Button>
                                        <Button>-</Button>
                                    </FormGroup>
                                    <FormGroup>
                                        <Input placeholder="Name"></Input>
                                    </FormGroup>
                                    <FormGroup>
                                        <Label >Ticket</Label>
                                        <Input type="select" name="select">
                                            <option>1</option>
                                            <option>2</option>
                                            <option>3</option>
                                            <option>4</option>
                                            <option>5</option>
                                        </Input>
                                    </FormGroup>
                                    <FormGroup>
                                        <Input></Input>
                                    </FormGroup>
                                    <FormGroup>
                                        <Link to="TicketPaymentCustomer">
                                        <Button>Buy Ticket</Button>
                                        </Link>
                                    </FormGroup>
                                </Form>
                            </Card>
                        </Col>
                    </Row>
                </div>
                <Switch>
                    <Route path="TicketPaymentCustomer" component={TicketPaymentCustomer}/>
                </Switch>
            </HashRouter>
        )
    }
}