import React, {Component} from 'react';
import {
    Card,
    Row,
    Col,
    Container,
    Button,
    Input,
    FormGroup,
    Modal,
    ModalFooter,
    ModalBody,
    ModalHeader
} from 'reactstrap';
import EventIFLogo from './../../Images/Logoeventifv2(black).png'
import TicketPdfCustomer from '../TicketPdfCustomer'
import Bca from '../../Images/bca.jpg'
import Bri from '../../Images/bri.png'
import Bni from '../../Images/bni.png'
import Gopay from '../../Images/gopay.jpg'
import Alfamart from '../../Images/alfamart.jpg'
import Indomaret from '../../Images/indomaret.png'
import {HashRouter, Route, Switch, Link} from 'react-router-dom'
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
            <HashRouter>
            <div style={{
                        paddingTop: "120px",
                        backgroundColor:"#E5E5E5",
                        paddingBottom: "50px"
                    }}>
                <Container>

                    <Card className="shadow">
                    <Container>
                        <div className="text-center">
                            
                            <img src={EventIFLogo} width="200px" className="mt-4 mb-4"/>
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
                        
                        </Container>
                        <Button body inverse color="warning" style={{color:"white"}} onClick={this.toggle}>Pay</Button>
                        
                    </Card>
                </Container>
                <Modal
                isOpen={this.state.modal}
                toggle={this.toggle}
                className="shadow"
                >
                    <ModalHeader
                    toggle={this.toggle}
                    >Payment Method
                        
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
                        <Link to="/TicketPdfCustomer">
                            <Button body inverse color="warning" style={{color:"white"}} onClick={this.toggle}>OK</Button>
                            </Link>
                            <Button body inverse color="danger" onClick={this.toggle}>Cancel</Button>
                    </ModalFooter>
                </Modal>
            </div>
            <div>
            <Switch>
                <Route path="/TicketPdfCustomer" component={TicketPdfCustomer}/>
            </Switch>
            </div>
            </HashRouter>
        )
    }
}