import React, {Component} from 'react';
import {Card,Button, Container, FormGroup,Input} from 'reactstrap';
import EventIFLogo from './../../Images/Logoeventifv2(black).png'
export default class Joinpages extends Component{
    render(){
        return(
            <div>
                <Container>
                <Card>
                    <img src={EventIFLogo} width="20%"/>
                    <FormGroup>
                        <Input type="text" placeholder="Name"></Input>
                    </FormGroup>
                    <FormGroup>
                        <Input type="text" placeholder="Name"></Input>
                    </FormGroup>
                    
                    <Button>Join</Button>
                </Card>
                </Container>
            </div>
        )
    }
}