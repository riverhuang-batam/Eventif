import React, {Component} from 'react'
import {Card, Row, Col, Container, CardBody} from 'reactstrap'

export default class Miniinfo extends Component {
    render() {
        
        return (
            <Container>
                <div>
                    <Row>
                        <Col md="4">
                            <Card outline color="grey" className="shadow">
                                <h1></h1>
                                <p></p>
                            </Card>
                        </Col>
                    </Row>
                </div>
            </Container>
        )
    }
}