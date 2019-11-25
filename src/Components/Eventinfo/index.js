import React, {Component} from 'react';
import {CardBody,CardImg, Container, Button, Card, Row, Col} from 'reactstrap'
import Ruangkreasi from './../../Images/Ruangkreasi.jpg'
import {Switch, HashRouter, Route, Link} from 'react-router-dom';
import TicketFormCustomer from '../../pages/TicketFormCustomer'
export default class Eventinfo extends Component{
    state={
        Description:'',     
    }
   
    render(){
        return(
            
            <HashRouter>
            <Container>
                <Row><Col md="4">
                <Card className="shadow mt-4">
                <CardImg top width="100%" src={Ruangkreasi} alt={Ruangkreasi}>

                </CardImg>
                <CardBody>
                    <h1>Title</h1>
                    <p>Date:</p>
                    <p>Location:</p>
                    <p>Fee:</p>
                    <p>Certificate:</p>
                    <p>Description:</p>
                    
                    <Button body inverse color="danger">
                    <Link to="/TicketFormCustomer">Join
                    </Link>
                    </Button>
                    
                </CardBody>
                </Card>
                </Col>
                <Col md="4">
                <Card className="shadow mt-4">
                <CardImg top width="100%" src={Ruangkreasi} alt={Ruangkreasi}>

                </CardImg>
                <CardBody>
                    <h1>Title</h1>
                    <p>Date:</p>
                    <p>Location:</p>
                    <p>Fee:</p>
                    <p>Certificate:</p>
                    <p>Description:</p>
                    <Button body inverse color="danger">Join</Button>
                </CardBody>
                </Card>
                </Col>
                <Col md="4">
                <Card className="shadow mt-4">
                <CardImg top width="100%" src={Ruangkreasi} alt={Ruangkreasi}>

                </CardImg>
                <CardBody>
                    <h1>Title</h1>
                    <p>Date:</p>
                    <p>Location:</p>
                    <p>Fee:</p>
                    <p>Certificate:</p>
                    <p>Description:</p>
                    <Button body inverse color="danger">Join</Button>
                </CardBody>
                </Card>
                </Col>
                <Col md="4">
                <Card className="shadow mt-4">
                <CardImg top width="100%" src={Ruangkreasi} alt={Ruangkreasi}>

                </CardImg>
                <CardBody>
                    <h1>Title</h1>
                    <p>Date:</p>
                    <p>Location:</p>
                    <p>Fee:</p>
                    <p>Certificate:</p>
                    <p>Description:</p>
                    <Button body inverse color="danger">Join</Button>
                </CardBody>
                </Card>
                </Col><Col md="4">
                <Card className="shadow mt-4">
                <CardImg top width="100%" src={Ruangkreasi} alt={Ruangkreasi}>

                </CardImg>
                <CardBody>
                    <h1>Title</h1>
                    <p>Date:</p>
                    <p>Location:</p>
                    <p>Fee:</p>
                    <p>Certificate:</p>
                    <p>Description:</p>
                    <Button body inverse color="danger">Join</Button>
                </CardBody>
                </Card>
                </Col><Col md="4">
                <Card className="shadow mt-4">
                <CardImg top width="100%" src={Ruangkreasi} alt={Ruangkreasi}>

                </CardImg>
                <CardBody>
                    <h1>Title</h1>
                    <p>Date:</p>
                    <p>Location:</p>
                    <p>Fee:</p>
                    <p>Certificate:</p>
                    <p>Description:</p>
                    
                    <Button body inverse color="danger">Join</Button>
                    
                </CardBody>
                </Card>
                </Col>
                </Row>
                
            </Container>
           <Switch>
           <Route exact path="TicketFormCustomer" component={TicketFormCustomer}/>
           
       </Switch>
       </HashRouter>
   
        )
    }
}