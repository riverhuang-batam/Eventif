import React, {Component} from 'react'
import {Jumbotron, Container, Row, Col} from 'reactstrap'
import Createevent from '../../pages/Createevent'
import events from '../../Images/events.jpg'
import events2 from '../../Images/events2.jpg'

export default class Jumbotrons extends Component {
    render() {
        return (
            <div>

                <Jumbotron
                    style={{
                    backgroundImage: `url(${events2})`,
                    backgroundSize: 'cover',
                    position: 'relative',
                    padding: '20%'
                }}
                    fluid>
                    <div
                        style={{
                        position: 'absolute',
                        backgroundColor: 'black',
                        top: '0',
                        left: '0',
                        bottom: '0',
                        right: '0',
                        opacity: '0.3',
                        zIndex: "1"
                    }}
                        fluid></div>
                    <div
                        className="text-center"
                        style={{
                        position: "relative",
                        zIndex: "10"
                    }}>
                        <h2
                            style={{
                            color: "white"
                        }}>EventIF</h2>
                        <h2
                            style={{
                            color: "white"
                        }}>
                            Your dream event, delivered.

                        </h2>
                    </div>
                </Jumbotron>
            </div>
        );
    }
}