import React, {Component} from 'react';
import {Card, Row, Col, Container, UncontrolledButtonDropdown, Button} from 'reactstrap';
import EventIFLogo from './../../Images/Logoeventifv2(black).png'
export default class TicketPayment extends Component{
    render(){
        return(
            <div>
                <Container>
                <Card>
                    <img src={EventIFLogo} width="20%"/>
                    <p>Ticket:</p>
                    <p>price:</p>
                    <p>Total:</p>
                    <p>Payment Method:</p>
                <Button body inverse color="success">Pay</Button>
                </Card>
                </Container>
            </div>
        )
    }
}