import React, {Component} from 'react'
import {Label, Input, FormGroup, Container} from 'reactstrap'

export default class Filter extends Component {

    render() {

        return (
            <div className="mt-4">
                <Container>
                    <FormGroup>
                        <Label >Select</Label>
                        <Input type="select" name="select">
                            <option>Certificated</option>
                            <option>Free</option>
                            <option>2 hour event times</option>
                            <option>food</option>

                        </Input>
                    </FormGroup>
                </Container>
            </div>

        )
    }
}