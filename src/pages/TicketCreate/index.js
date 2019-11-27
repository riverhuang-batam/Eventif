import React, {Component} from 'react';
import {
    Card,
    Row,
    Col,
    Button,
} from 'reactstrap';
import eticket from '../../Images/eticket.png'
export default class TicketFormCustomer extends Component {
    render() {
        return (
            <div>
                <Row>
                    <Col xs="8">
                        <Card shadow style={{paddingTop:"120px"}}>
                            <h5>Ticket Preview</h5>
                            <Button href={eticket} target="_blank">Preview</Button>
                        </Card>
                    </Col>
                </Row>
            </div>
        )
    }
}