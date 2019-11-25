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
export default class TicketFormCustomer extends Component {
    render() {
        return (
            <div>
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
                                    <Button>Buy Ticket</Button>
                                </FormGroup>
                            </Form>
                        </Card>
                    </Col>
                </Row>
            </div>
        )
    }
}