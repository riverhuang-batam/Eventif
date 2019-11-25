import React, {Component} from 'react';
import {
    Card,
    Row,
    Col,
    Container,
    UncontrolledButtonDropdown,
    Button,
    Input,
    FormGroup,
    Modal,
    ModalFooter,
    ModalBody,
    ModalHeader
} from 'reactstrap';
import EventIFLogo from './../../Images/Logoeventifv2(black).png'
import Bca from '../../Images/bca.jpg'
import Bri from '../../Images/bri.png'
import Bni from '../../Images/bni.png'
import Gopay from '../../Images/gopay.jpg'
import Alfamart from '../../Images/alfamart.jpg'
import Indomaret from '../../Images/indomaret.png'
export default class TicketPaymentCustomer extends Component {
    constructor(props){
        super(props);
        this.state = {
            modal: false,
        };
        this.toggle = this.toggle.bind(this);
        
    }
    toggle = () =>{
        this.setState(prevState =>({
            modal:!prevState.modal
        }))
    }

    render() {
        return (
            <div>
                <Container>

                    <Card>
                        <div className="text-center">
                            <img src={EventIFLogo} width="200px" style={{paddingTop:"50px"}}/>
                        </div>
                        <p>
                            Name:
                        </p>
                        <p>Ticket:
                            <span
                                style={{
                                textAlign: "right"
                            }}>0</span>
                        </p>

                        <p>price:
                            <span
                                style={{
                                textAlign: "right"
                            }}>0</span>
                        </p>
                        <p>Total:
                            <span
                                style={{
                                textAlign: "right"
                            }}>0</span>
                        </p>
                        <p>Payment Method:</p>

                        <Row>
                            
                            
                        </Row>

                        <Button body inverse color="success"onClick={this.toggle}>Pay</Button>
                    </Card>
                </Container>
                <Modal
                isOpen={this.state.modal}
                toggle={this.toggle}
                >
                    <ModalHeader
                    toggle={this.toggle}
                    >
                        
                    </ModalHeader>
                    <ModalBody>
                    <FormGroup check inline>
                                    <Input type="checkbox" inline/>
                                    <img src={Bca} width="200px"/>
                                </FormGroup>
                            
                                <FormGroup check inline>
                                    <Input type="checkbox"/>
                                    <img src={Bri} width="200px"/>
                                </FormGroup>
                            
                                <FormGroup check inline>
                                    <Input type="checkbox"/>
                                    <img src={Bni} width="200px"/>
                                </FormGroup>
                            
                                <FormGroup check inline>
                                    <Input type="checkbox"/>
                                    <img src={Gopay} width="200px"/>
                                </FormGroup>
                            
                                <FormGroup check inline>
                                    <Input type="checkbox"/>
                                    <img src={Alfamart} width="200px"/>
                                </FormGroup>
                            
                                <FormGroup check inline>
                                    <Input type="checkbox"/>
                                    <img src={Indomaret} width="200px"/>
                                </FormGroup>
                            

                    </ModalBody>
                    <ModalFooter>
                            <Button onClick={this.toggle}>OK</Button>
                            <Button onClick={this.toggle}>Cancel</Button>
                    </ModalFooter>
                </Modal>
            </div>
        )
    }
}