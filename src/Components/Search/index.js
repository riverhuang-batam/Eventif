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
import eventiflogo from '../../Images/Logoeventifv2(black).png'
export default class Search extends Component {
    render() {
        return (
            <div>
                <Container style={{paddingTop:"80px"}}>
                    <Row>
                        <Col md="8" style={{paddingTop:"4%"}}>
                            <img src={eventiflogo} width="150px" className="mb-4"/>
                            <h3>Find your wanted event here and get your skill and certificate for better future</h3>
                        </Col>
                        <Col md="4"  >
                    <Card style={{postion:"absolute"}} className="shadow mt-4">
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
                            <Button>
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