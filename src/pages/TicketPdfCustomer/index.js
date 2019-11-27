import React, {Component} from 'react';
import {Row, Col, Container, Button, Card} from 'reactstrap';
import eticket from '../../Images/eticket.png'
export default class TicketPdfCustomer extends Component {
    render() {
        return (

            <Container>
                <div style={{
                    paddingTop: "120px"
                }}>

                    <Card className="shadow">
                        <div className="text-center mt-4">
                            <p>Here is your e-ticket</p>
                        </div>
                        <div className="text-center">
                            <img src={eticket} width="50%"/>
                        </div>
                        <div className="text-center mb-4">
                            <Button href={eticket} className="mt-4" body inverse color="primary" download>Download</Button>

                        </div>
                    </Card>
                </div>
            </Container>

        )
    }
}