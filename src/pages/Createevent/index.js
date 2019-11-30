import React, {Component} from 'react'
import {
    CardBody,
    Card,
    Input,
    Row,
    Col,
    FormGroup,
    Form,
    Button,
    Label,
    Modal,
    ModalHeader,
    ModalBody,
    ModalFooter
} from 'reactstrap'
import {HashRouter, Switch, Route, Link} from 'react-router-dom'
import eventif from '../../App'
import wallpapercreateevent from '../../Images/wallpapercreateevent.jpg'
import Loginpages from './../Loginpages'

export default class Createevent extends Component {
    render() {
        const styleupload = {
            position: "absolute",
            paddingTop: "200px",
            overflow: "hidden",
            zIndex: "-1",
            width: "0.1px",
            height: "0.1px",
            opacity: "0"
        }
        const labelupload = {
            display: "inlineBlock",
            cursor: 'pointer',
            backgroundColor: 'red',
            padding: '15px 30px',
            color: 'white',
            boxShadow: '$shadow',
            transition: 'all 0.3s'
        }
        return (
            <div>
                <HashRouter>
                    <Row>
                        <Col
                            sm="12"
                            md={{
                            size: 8,
                            offset: 2
                        }}
                            style={{
                            paddingTop: "100px"
                        }}>
                            <Card className="shadow">
                                
                                <CardBody>
                                    <Form>
                                    
                                        <FormGroup>
                                            <Label>Event Title</Label>
                                            <Input type="text" placeholder="Nama Event" required></Input>
                                        </FormGroup>
                                        
                                        <FormGroup>
                                        <Label>Post Image</Label>
                                <Input type="file">file</Input>
                                </FormGroup>
                                <Row form>
                                <Col md={6}>
                                        <FormGroup>
                                            <Label >Category</Label>
                                            <Input type="select" name="select">
                                                <option>Category</option>
                                                <option>Business</option>
                                                <option>Game</option>
                                                <option>Japan</option>
                                                <option>Food</option>
                                                <option>Academy</option>

                                            </Input>
                                        </FormGroup>
                                        </Col>
                                        <Col md={6}>
                                        <FormGroup>
                                            <Label >Certificate</Label>
                                            <Input type="select" name="select">
                                                <option>Certificated</option>
                                                <option>Not Certificated</option>
                                            </Input>
                                        </FormGroup>
                                        </Col>
                                        <Col md={12}>
                                        <FormGroup>
                                            <Label>Location</Label>
                                            <Input type="textarea" placeholder="Location" required></Input>
                                        </FormGroup>
                                        </Col>
                                        
                                        <Col md={6}>
                                            <FormGroup>
                                                <Label>Event Start</Label>
                                                <Input type="date" required></Input>
                                            </FormGroup>
                                        </Col>
                                        <Col md={6}>
                                            <FormGroup>
                                            <Label>Event End</Label>
                                                <Input type="date" required></Input>

                                            </FormGroup>
                                            </Col>
                                        
                                            
                                            <Col md={6}>
                                            <FormGroup>
                                            <Label>Start Time</Label>
                                                <Input type="time" required></Input>
                                                
                                            </FormGroup>
                                            </Col>
                                            <Col md={6}>
                                            <FormGroup>
                                            <Label>End Time</Label>
                                                <Input type="time" required></Input>
                                        </FormGroup>
                                        </Col>
                                        </Row>
                                        <FormGroup>
                                            <Label>Ticket Price</Label>
                                            <Input type="text" placeholder="Ticket Price" required></Input>
                                        </FormGroup>
                                        <FormGroup>
                                            <Label>Max ticket per Transaction</Label>
                                            <Input type="select" name="select">
                                                <option>1</option>
                                                <option>2</option>
                                                <option>3</option>
                                                <option>4</option>
                                                <option>5</option>
                                            </Input>
                                        </FormGroup>
                                        
                                        <FormGroup>
                                            <Label>Organizer</Label>
                                            <Input type="text" placeholder="Organizer"></Input>
                                        </FormGroup>

                                        <FormGroup>
                                            <Label>Description</Label>
                                            <Input type="textarea" placeholder="your event description"/>
                                        </FormGroup>
                                        <FormGroup>
                                            <Link to="/">
                                                <Button block body inverse color="warning" style={{color:"white"}}>Create Event</Button>
                                            </Link>
                                        </FormGroup>
                                
                                    </Form>

                                </CardBody>
                                
                            </Card>

                        </Col>
                    </Row>
                    <Switch>
                        <Route path="/" Component={eventif}/>
                    </Switch>
                </HashRouter>
                <Modal>
                    <ModalHeader>

                    </ModalHeader>
                    <ModalBody>

                    </ModalBody>
                    <ModalFooter>

                    </ModalFooter>
                </Modal>
            </div>
        )
    }
}