import React, {Component} from 'react'
import {
    Card,
    CardImg,
    CardBody,
    Button,
    Container,
    Row,
    Col
} from 'reactstrap'
import events3 from '../../Images/events3.jpg'
export default class Whatsnew extends Component {
    render() {
        return (
            <div>
                <Container className="mt-4">
                    <h2>What's New?</h2>
                    <Row>
                        <Col md="3">

                            <Card className="mt-4">
                                <CardImg top width="100%" src={events3}/>
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
                        </Col>
                        <Col md="3">

                            <Card className="mt-4">
                                <CardImg top width="100%" src={events3}/>
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
                        </Col>
                        <Col md="3">

                            <Card className="mt-4">
                                <CardImg top width="100%" src={events3}/>
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
                        </Col>
                        <Col md="3">

                            <Card className="mt-4">
                                <CardImg top width="100%" src={events3}/>
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
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}