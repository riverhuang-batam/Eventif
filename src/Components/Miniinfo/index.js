import React, {Component} from 'react'
import {Card, Row, Col, Container} from 'reactstrap'
export default class Miniinfo extends Component {
    render() {
        return (
            <Container>
                <div>
                    <Row>
                        <Col>
                            <Card outline color="grey" className="shadow">test</Card>
                        </Col>
                    </Row>
                </div>
            </Container>
        )
    }
}