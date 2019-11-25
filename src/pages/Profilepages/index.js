import React, {Component} from 'react'
import {Container, Card, CardBody, Button, Jumbotron, Input, Form , FormGroup} from 'reactstrap'
export default class Profilepages extends Component{
    render(){
        return(
            <Container style={{paddingTop:"100px"}}>
                <Card className='shadow' >
                    <CardBody>
                        <h1>Name:</h1>
                        <p>E-mail</p>
                        <p>Joined Event:</p>
                    </CardBody>
                </Card>
            </Container>
        )
    }
}