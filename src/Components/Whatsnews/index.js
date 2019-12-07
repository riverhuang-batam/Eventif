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
import events4 from '../../Images/events4.jpg'
import events5 from '../../Images/events5.jpg'
import events6 from '../../Images/events6.jpg'
import events7 from '../../Images/events7.jpg'
import events8 from '../../Images/events8.jpeg'
import events9 from '../../Images/events9.jpeg'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default class Whatsnew extends Component {
    render() {
        const settings = {
            autoplay: true,
            autoplaySpeed: 2500,
            infinite: true,
            speed: 500,
            slidesToShow: 3,
            slidesToScroll: 1,
            arrows: false,
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 1,
                        infinite: true,
                        dots: true
                    }
                }, {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1,
                        initialSlide: 2
                    }
                }, {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1,
                        initialSlide: 1
                    }
                }
            ]

        };
        return (
            <div>
                <Container className="mt-4">

                    <Row>
                        <Col md="4">
                            <div className="mb-4">
                                <h2 className="text-center">What's New?</h2>
                                <h5 className="mt-4">
                                    More events coming to your town.
                                </h5>
                                <h5 className="mt-4">Go join them now !
                                </h5>
                            </div>
                        </Col>
                        <Col md="8">
                            <h3>Event List</h3>
                            <Slider {...settings}>
                                <div >

                                    <Card className="shadow">
                                        <CardImg top width="100%" src={events4}/>
                                        <CardBody>
                                            <h4>Title</h4>
                                            <p>Date:</p>
                                            <p>Location:</p>
                                            <p>Fee:</p>
                                            <Button body inverse color="danger">Join</Button>
                                        </CardBody>
                                    </Card>

                                </div>
                                <div>
                                    <Card className="shadow">
                                        <CardImg top width="100%" src={events5}/>
                                        <CardBody>
                                            <h4>Title</h4>
                                            <p>Date:</p>
                                            <p>Location:</p>
                                            <p>Fee:</p>
                                            <Button body inverse color="danger">Join</Button>
                                        </CardBody>
                                    </Card>
                                </div>
                                <div>
                                    <Card className="shadow">
                                        <CardImg top width="100%" src={events7}/>
                                        <CardBody>
                                            <h4>Title</h4>
                                            <p>Date:</p>
                                            <p>Location:</p>
                                            <p>Fee:</p>
                                            <Button body inverse color="danger">Join</Button>
                                        </CardBody>
                                    </Card>
                                </div>
                                <div>
                                    <Card className="shadow">
                                        <CardImg top width="100%" src={events8}/>
                                        <CardBody>
                                            <h4>Title</h4>
                                            <p>Date:</p>
                                            <p>Location:</p>
                                            <p>Fee:</p>
                                            <Button body inverse color="danger">Join</Button>
                                        </CardBody>
                                    </Card>
                                </div>
                                <div>
                                    <Card className="shadow">
                                        <CardImg top width="100%" src={events6}/>
                                        <CardBody>
                                            <h4>Title</h4>
                                            <p>Date:</p>
                                            <p>Location:</p>
                                            <p>Fee:</p>
                                            <Button body inverse color="danger">Join</Button>
                                        </CardBody>
                                    </Card>
                                </div>
                                <div>
                                    <Card className="shadow">
                                        <CardImg top width="100%" src={events9}/>
                                        <CardBody>
                                            <h4>Title</h4>
                                            <p>Date:</p>
                                            <p>Location:</p>
                                            <p>Fee:</p>
                                            <Button body inverse color="danger">Join</Button>
                                        </CardBody>
                                    </Card>
                                </div>
                            </Slider>
                        </Col>
                        <Col md="12">
                            <h2 className="mt-4 mb-4">More Events</h2>
                        </Col>
                        <Col md="3">

                            <Card className="shadow mt-4">
                                <CardImg top width="100%" src={events5}/>
                                <CardBody>
                                    <h4>Title</h4>
                                    <p>Date:</p>
                                    <p>Location:</p>
                                    <p>Fee:</p>
                                    <Button body inverse color="danger">Join</Button>
                                </CardBody>
                            </Card>
                        </Col>
                        <Col md="3">
                            <Card className="shadow mt-4">
                                <CardImg top width="100%" src={events4}/>
                                <CardBody>
                                    <h4>Title</h4>
                                    <p>Date:</p>
                                    <p>Location:</p>
                                    <p>Fee:</p>
                                    <Button body inverse color="danger">Join</Button>
                                </CardBody>
                            </Card>
                        </Col>
                        <Col md="3">
                            <Card className="shadow mt-4">
                                <CardImg top width="100%" src={events7}/>
                                <CardBody>
                                    <h4>Title</h4>
                                    <p>Date:</p>
                                    <p>Location:</p>
                                    <p>Fee:</p>
                                    <Button body inverse color="danger">Join</Button>
                                </CardBody>
                            </Card>
                        </Col>
                        <Col md="3">
                            <Card className="shadow mt-4">
                                <CardImg top width="100%" src={events3}/>
                                <CardBody>
                                    <h4>Title</h4>
                                    <p>Date:</p>
                                    <p>Location:</p>
                                    <p>Fee:</p>
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