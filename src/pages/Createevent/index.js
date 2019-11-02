import React, {Component} from 'react'
import {Container, CardBody,Card, CardImg, Jumbotron, Input, Row, Col, FormGroup, Form, Nav, NavItem} from 'reactstrap'
import {HashRouter, Switch, Route, Link} from 'react-router-dom'
import wallpapercreateevent from '../../Images/wallpapercreateevent.jpg'
import Loginpages from './../Loginpages'
export default class Createevent extends Component{
    render(){
        return(
            <div>
                <HashRouter>
                <Container>
                    <Card className="shadow">
                        <CardImg fluid top height="250px"  src={wallpapercreateevent}></CardImg>
                        <CardBody>
                            <Form>
                        <FormGroup>
                            <Input type="text" placeholder="Nama Event*"></Input>
                            </FormGroup>
                            <FormGroup>
                            <Input type="text" placeholder="Pilih Kategori"></Input>
                            </FormGroup>
                            <FormGroup>
                                <Input type="textarea" placeholder="label"></Input>
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
                            </Form>
                        </CardBody>
                    </Card>
                    <Nav pills>
                    
                        <NavItem>
                        
                            Kategori Ticket
                            
                        </NavItem>
                    
                    
                        <NavItem>
                        
                            Deskripsi
                            
                        </NavItem>
                    
                    </Nav>
                </Container>
                <Switch>
                    <Route exact path="#" Component={Loginpages}/>
                </Switch>
                </HashRouter>
            </div>
        )
    }
}