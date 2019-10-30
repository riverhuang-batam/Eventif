import React, {Component} from 'react'
import {Form, InputGroupAddon, Input,InputGroup, Button} from 'reactstrap'
export default class Search extends Component{
    render(){
        return(
            <div>
                <Form>
                    <InputGroup>
                    <Input type="text" placeholder="search a event"></Input>
                    <InputGroupAddon addonType="append"><Button type="submit">Search</Button></InputGroupAddon>
                    </InputGroup>
                </Form>
                
            </div>
        )
    }
}