import React, {Component} from 'react';
import {Card, Row, Col, Form, Input, FormGroup, UncontrolledButtonDropdown,Button} from 'reactstrap';
export default class TicketPdfCustomer extends Component{
    render(){
        return(
            <div>
                <Row>
                    <Col xs="8">
                        <Card shadow>
                            <Form>
                                <FormGroup>
                                    <Button>Download</Button>
                                </FormGroup>
                            </Form>
                        </Card>
                    </Col>
                </Row>
            </div>
        )
    }
}