import React, {Component} from 'react';
import {CardBody,CardImg, Container, Button, Card, Row, Col} from 'reactstrap'
export default class Eventinfo extends Component{
    state={
        Description:'',
        
    }
    colorButton= () =>{
        
    }
    render(){
        return(
            <Container>
                <Row><Col md="4">
                <Card className="shadow">
                <CardImg>

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