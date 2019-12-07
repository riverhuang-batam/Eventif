import React, {Component} from 'react';
import {
    CardBody,
    CardImg,
    Container,
    Button,
    Card,
    Row,
    Col
} from 'reactstrap'
import Ruangkreasi from './../../Images/Ruangkreasi.jpg'
import events3 from '../../Images/events3.jpg'
import events4 from '../../Images/events4.jpg'
import events5 from '../../Images/events5.jpg'
import events6 from '../../Images/events6.jpg'
import events7 from '../../Images/events7.jpg'
import events8 from '../../Images/events8.jpeg'
import events9 from '../../Images/events9.jpeg'
import events10 from '../../Images/events10.jpg'
import {Switch, HashRouter, Route, Link} from 'react-router-dom';
import TicketFormCustomer from '../../pages/TicketFormCustomer'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./index.css"
export default class Eventinfo extends Component {

    state = {
        Description: ''
    }

    render() {
        const settings = {
            autoplay: true,
            autoplaySpeed: 2500,
            
            speed: 500,
            slidesToShow: 4,
            slidesToScroll: 1,
            slidesPerRow: 1,
                        rows: 1,
            arrows: false,
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 4,
                        slidesToScroll: 1,
                        slidesPerRow: 1,
                        rows: 1,
                        infinite: true,
                        dots: true
                    }
                }, {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1,
                        slidesPerRow: 1,
                        rows: 1,
                        initialSlide: 2
                    }
                }, {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1,
                        initialSlide: 2,
                        slidesPerRow: 1,
                        rows: 1,
                    }
                }
            ]
        };
        return (

            <HashRouter>
                <Container>
                    <Row>
                        
                        <Col md="12">
                            <h3>Event List</h3>
                            <Slider {...settings}>
                                <Card className="shadow" >
                                    <CardImg top width="100%" src={events4} alt={events4}></CardImg>
                                    <CardBody>
                                        <h4>Title</h4>
                                        <p>Date:</p>
                                        <p>Location:</p>
                                        <p>Fee:</p>
                                        <Link to="/TicketFormCustomer">
                                            <Button body inverse color="danger">
                                                Join
                                            </Button>
                                        </Link>

                                    </CardBody>
                                </Card>

                                <Card className="shadow">
                                    <CardImg top width="100%" src={events6} alt={events6}></CardImg>
                                    <CardBody>
                                        <h4>Title</h4>
                                        <p>Date:</p>
                                        <p>Location:</p>
                                        <p>Fee:</p>
                                        <Link to="/TicketFormCustomer">
                                            <Button body inverse color="danger">
                                                Join
                                            </Button>
                                        </Link>

                                    </CardBody>
                                </Card>
                                <Card className="shadow">
                                    <CardImg top width="100%" src={events10} alt={events10}></CardImg>
                                    <CardBody>
                                        <h4>Title</h4>
                                        <p>Date:</p>
                                        <p>Location:</p>
                                        <p>Fee:</p>
                                        <Link to="/TicketFormCustomer">
                                            <Button body inverse color="danger">
                                                Join
                                            </Button>
                                        </Link>

                                    </CardBody>
                                </Card>
                                <Card className="shadow">
                                    <CardImg top width="100%" src={events7} alt={events7}></CardImg>
                                    <CardBody>
                                        <h4>Title</h4>
                                        <p>Date:</p>
                                        <p>Location:</p>
                                        <p>Fee:</p>
                                        <Link to="/TicketFormCustomer">
                                            <Button body inverse color="danger">
                                                Join
                                            </Button>
                                        </Link>

                                    </CardBody>
                                </Card>
                                <Card className="shadow">
                                    <CardImg top width="100%" src={events5} alt={events5}></CardImg>
                                    <CardBody>
                                        <h4>Title</h4>
                                        <p>Date:</p>
                                        <p>Location:</p>
                                        <p>Fee:</p>
                                        <Link to="/TicketFormCustomer">
                                            <Button body inverse color="danger">
                                                Join
                                            </Button>
                                        </Link>

                                    </CardBody>
                                </Card>
                                <Card className="shadow">
                                    <CardImg top width="100%" src={events8} alt={events8}></CardImg>
                                    <CardBody>
                                        <h4>Title</h4>
                                        <p>Date:</p>
                                        <p>Location:</p>
                                        <p>Fee:</p>
                                        <Link to="/TicketFormCustomer">
                                            <Button body inverse color="danger">
                                                Join
                                            </Button>
                                        </Link>

                                    </CardBody>
                                </Card>

                            </Slider>
                        </Col>
                        <Col md="12" classname="mt-4 mb-4">
                            <h2>More Events</h2>
                        </Col>
                        <Col md="3">
                        <Card className="shadow mt-4">
                            <CardImg top width="100%" src={events6} alt={events6}></CardImg>
                            <CardBody>
                                <h4>Title</h4>
                                <p>Date:</p>
                                <p>Location:</p>
                                <p>Fee:</p>
                                <Link to="/TicketFormCustomer">
                                    <Button body inverse color="danger">
                                        Join
                                    </Button>
                                </Link>

                            </CardBody>
                        </Card>
                        </Col>
                        <Col md="3">
                        <Card className="shadow mt-4">
                            <CardImg top width="100%" src={Ruangkreasi} alt={Ruangkreasi}></CardImg>
                            <CardBody>
                                <h4>Title</h4>
                                <p>Date:</p>
                                <p>Location:</p>
                                <p>Fee:</p>
                                <Link to="/TicketFormCustomer">
                                    <Button body inverse color="danger">
                                        Join
                                    </Button>
                                </Link>

                            </CardBody>
                        </Card>
                        </Col>
                        <Col md="3">
                        <Card className="shadow mt-4">
                            <CardImg top width="100%" src={events6} alt={events6}></CardImg>
                            <CardBody>
                                <h4>Title</h4>
                                <p>Date:</p>
                                <p>Location:</p>
                                <p>Fee:</p>
                                <Link to="/TicketFormCustomer">
                                    <Button body inverse color="danger">
                                        Join
                                    </Button>
                                </Link>

                            </CardBody>
                        </Card>
                        </Col>
                        <Col md="3">
                        <Card className="shadow mt-4">
                            <CardImg top width="100%" src={Ruangkreasi} alt={Ruangkreasi}></CardImg>
                            <CardBody>
                                <h4>Title</h4>
                                <p>Date:</p>
                                <p>Location:</p>
                                <p>Fee:</p>
                                <Link to="/TicketFormCustomer">
                                    <Button body inverse color="danger">
                                        Join
                                    </Button>
                                </Link>

                            </CardBody>
                        </Card>
                        </Col>
                    </Row>

                </Container>
                <Switch>
                    <Route path="/TicketFormCustomer" component={TicketFormCustomer}/>

                </Switch>
            </HashRouter>

        )
    }
}