import React, {Component} from 'react'
import {Form, InputGroupAddon, Input,InputGroup, Button,Container} from 'reactstrap'
export default class Search extends Component{
    render(){
        return(
            <div>
                <Container>
                <Form>
                    <InputGroup>
                    <Input type="text" placeholder="search a event"></Input>
                    <InputGroupAddon addonType="append"><Button type="submit" color="warning">Search</Button></InputGroupAddon>
                    </InputGroup>
                    
                </Form>
                </Container>
                
            </div>
        )
    }
}