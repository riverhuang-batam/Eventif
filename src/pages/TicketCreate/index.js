import React, {Component} from 'react';
import {
    Card,
    Row,
    Col,
    Button,
    Container
} from 'reactstrap';
import eticket from '../../Images/eticket.png'
export default class TicketFormCustomer extends Component {
    render() {
        return (
            <div>
                <Container style={{paddingTop:"120px"}}>
                
                        <Card className="text-center shadow" >
                            <h5>Ticket Preview</h5>
                            <Button href={eticket} body inverse color="warning" style={{color:"white"}} target="_blank">Preview</Button>
                        </Card>
                        </Container>
            </div>
        )
    }
}