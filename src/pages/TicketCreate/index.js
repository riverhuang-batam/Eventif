import React, {Component} from 'react';
import {
    Card,
    Row,
    Col,
    Button,
} from 'reactstrap';
export default class TicketFormCustomer extends Component {
    render() {
        return (
            <div>
                <Row>
                    <Col xs="8">
                        <Card shadow>
                            <h5>Ticket Preview</h5>
                            <Button>Preview</Button>
                        </Card>
                    </Col>
                </Row>
            </div>
        )
    }
}