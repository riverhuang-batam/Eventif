import React, {Component} from 'react';
import {Row, Col, Container, Button} from 'reactstrap';
import eticket from '../../Images/eticket.png'
export default class TicketPdfCustomer extends Component{
    render(){
        return(
            <div>
                
                            <Container>
                                <div className="text-center" style={{
                        paddingTop: "120px"
                    }}>
                                    <p>Here is your e-ticket</p>
                                    </div>
                                    <div className="text-center">
                                    <img src={eticket} width="400px"/>
                                    </div>
                                    <div className="text-center">
                                    <Button href={eticket} className="mt-4" body inverse color="primary" download>Download</Button>
                                    </div>
                            </Container>
                            
                    
            </div>
        )
    }
}