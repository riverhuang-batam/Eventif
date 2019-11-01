import React, {Component} from 'react'
import {
    Form,
    InputGroupAddon,
    Input,
    FormGroup,
    Button,
    Container,
    Card,
    CardBody,
    CardImg,
    Row,
    Col
} from 'reactstrap'
export default class Search extends Component {
    render() {
        return (
            <div>
                <Container>
                    <Row><Col md="4">
                    <Card className="shadow mt-4">
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
                                Filter
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