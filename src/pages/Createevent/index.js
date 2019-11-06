import React, {Component} from 'react'
import {Container, CardBody,Card, CardImg, Jumbotron, Input, Row, Col, FormGroup, Form, Button, Nav, NavItem, Label} from 'reactstrap'
import {HashRouter, Switch, Route, Link} from 'react-router-dom'
import wallpapercreateevent from '../../Images/wallpapercreateevent.jpg'
import Loginpages from './../Loginpages'

export default class Createevent extends Component{
    render(){
        return(
            <div>
                <HashRouter>
                    <Row>
                <Col sm="12" md={{ size: 8, offset: 2 }} style={{paddingTop:"100px"}}>
                    <Card className="shadow">
                        <CardImg fluid top height="250px"  src={wallpapercreateevent}></CardImg>
                        <CardBody>
                            <Form>
                        <FormGroup>
                            <Input type="text" placeholder="Nama Event*"></Input>
                            </FormGroup>
                            <FormGroup>
                            <Input type="text" placeholder="Pilih Kategori Event"></Input>
                            </FormGroup>
                            <FormGroup>
                                <Input type="text" placeholder="Location"></Input>
                            </FormGroup>
                            <FormGroup>
                            <Input type="text" placeholder="Payment Price"></Input>
                            </FormGroup>
                            <FormGroup>
                            <Input type="text" placeholder="Payment Method"></Input>
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