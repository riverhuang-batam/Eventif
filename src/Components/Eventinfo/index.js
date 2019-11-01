import React, {Component} from 'react';
import {CardBody,CardImg, Container, Button, Card, Row, Col} from 'reactstrap'
import Ruangkreasi from './../../Images/Ruangkreasi.jpg'
export default class Eventinfo extends Component{
    state={
        Description:'',     
    }
   
    render(){
        return(
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
                    <Button body inverse color="danger">Join</Button>
                </CardBody>
                </Card>
                </Col></Row>
                
            </Container>
        )
    }
}