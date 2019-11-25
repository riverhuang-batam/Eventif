import React, {Component} from 'react'
import {Container, CardBody,Card, CardImg, Jumbotron, Input, Row, Col, FormGroup, Form, Button, Nav, NavItem, Label} from 'reactstrap'
import {HashRouter, Switch, Route, Link} from 'react-router-dom'
import wallpapercreateevent from '../../Images/wallpapercreateevent.jpg'
import Loginpages from './../Loginpages'


export default class Createevent extends Component{
    render(){
        const styleupload ={
            position:"absolute",
            paddingTop:"200px",
            overflow:"hidden",
            zIndex:"-1",
            width:"0.1px",
            height:"0.1px",
            opacity:"0"
        }
        const labelupload = {
            display:"inlineBlock",
            cursor:'pointer',
            backgroundColor: 'red',
            padding:'15px 30px',
            color:'white',
            boxShadow:'$shadow',
            transition: 'all 0.3s'
        }
        return(
            <div>
                <HashRouter>
                    <Row>
                <Col sm="12" md={{ size: 8, offset: 2 }} style={{paddingTop:"100px"}}>
                    <Card className="shadow">
                        <Label style={labelupload}>upload</Label>
                        <Input type="file" style={styleupload}>file</Input>
                        <CardBody>
                            <Form>
                        <FormGroup>
                            <Input type="text" placeholder="Nama Event" required></Input>
                            </FormGroup>
                            <FormGroup>
                            <Input type="text" placeholder="Pilih Kategori Event" required></Input>
                            </FormGroup>
                            <FormGroup>
                                <Input type="text" placeholder="Location" required></Input>
                            </FormGroup>
                            <FormGroup>
                                <Input type="date" required></Input>
                            </FormGroup>
                            <FormGroup>
                            <Input type="text" placeholder="Payment Price" required></Input>
                            </FormGroup>
                            <FormGroup>
                            <Input type="text" placeholder="Payment Method" required></Input>
                            </FormGroup>
                            <Row><Col>
                            <p className="text-center">Diselenggarakan Oleh</p>
                            </Col>
                            <Col>
                            <p className="text-center">Tanggal & Waktu</p>
                            </Col>
                            <Col>
                            <p className="text-center">Lokasi</p>
                            </Col></Row>
                            
                    <FormGroup>
                    <Label>Description</Label>
                    <Input type="textarea" placeholder="your event description"/>
                    </FormGroup>
                <FormGroup>
                    <Button>Create Event</Button>
                </FormGroup>
                            </Form>

                        </CardBody>
                    </Card>
                    
                </Col>
                </Row>
                <Switch>
                    <Route exact path="#" Component={Loginpages}/>
                </Switch>
                </HashRouter>
            </div>
        )
    }
}