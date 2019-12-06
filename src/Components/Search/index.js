import React, {Component} from 'react'
import {
    Form,
    Input,
    FormGroup,
    Button,
    Container,
    Card,
    Row,
    Col
} from 'reactstrap'
import eventiflogo_black from '../../Images/Logoeventifv2(black).png'
export default class Search extends Component {
    render() {
        return (
            <div>
                <Container style={{paddingTop:"80px"}}>
                    <Row>
                        
                        <Col md="8" style={{paddingTop:"4%"}} className="mt-4">
                        <Container>    
                            <img src={eventiflogo_black} width="175px" className="mb-4" style={{position: "relative",
                        zIndex: "10"}}/>
                            <h2 style={{color:"white",
                        position: "relative",
                        zIndex: "10"}}>Search for event here.</h2>
                        </Container>
                        </Col>
                        
                        <Col md="4"  >
                    <Card style={{postion:"absolute", position: "relative",
                        zIndex: "10"}} className="shadow mt-4">
                        <Form>
                            <Container>
                            <FormGroup className="mt-4">
                            <Input type="text" placeholder="Location"></Input>
                            </FormGroup>
                            <FormGroup>
                            <Input type="date" placeholder="Date"></Input>
                            </FormGroup>
                            <FormGroup>
                            <Input type="text" placeholder="About"></Input>
                            </FormGroup>
                            <FormGroup>
                            <Button body inverse color="warning" style={{color:"white"}}>
                                Search
                            </Button>
                            </FormGroup>
                            </Container>
                        </Form>
                    </Card>
                    </Col></Row>
                </Container>

            </div>
        )
    }
}