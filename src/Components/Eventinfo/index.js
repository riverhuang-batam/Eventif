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
import {Switch, HashRouter, Route, Link} from 'react-router-dom';
import TicketFormCustomer from '../../pages/TicketFormCustomer'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
export default class Eventinfo extends Component {
    
    state = {
        Description: ''
    }

    render() {
        const settings = {
            autoplay: true,
            autoplaySpeed: 1500,
            infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 3,
      arrows:false,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        }
      ]
        };
        return (

            <HashRouter>
                <Container>
                    <Row>
                        <Col md="4">
                        <h2>Event</h2>
                        <h5 className="mt-4">EventIF is use for manajemen ticket for bussiness. We are the solution for entertaiment industry</h5>
                        <h5 className="mt-4">Join Event to gain more experience and get more certificate to improve your cv</h5>
                        
                        </Col>
                        <Col md="8">
                            <h3>Event List</h3>
                            <Slider {...settings}>
                            <Card className="shadow">
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
                        
                            <Card className="shadow">
                                <CardImg top width="100%" src={Ruangkreasi} alt={Ruangkreasi}></CardImg>
                                <CardBody>
                                    <h4>Title</h4>
                                    <p>Date:</p>
                                    <p>Location:</p>
                                    <p>Fee:</p>
                                    <Button body inverse color="danger">Join</Button>
                                </CardBody>
                            </Card>
                        
                            <Card className="shadow">
                                <CardImg top width="100%" src={Ruangkreasi} alt={Ruangkreasi}></CardImg>
                                <CardBody>
                                    <h4>Title</h4>
                                    <p>Date:</p>
                                    <p>Location:</p>
                                    <p>Fee:</p>
                                    <Button body inverse color="danger">Join</Button>
                                </CardBody>
                            </Card>
                        
                            <Card className="shadow">
                                <CardImg top width="100%" src={Ruangkreasi} alt={Ruangkreasi}></CardImg>
                                <CardBody>
                                    <h4>Title</h4>
                                    <p>Date:</p>
                                    <p>Location:</p>
                                    <p>Fee:</p>
                                    <Button body inverse color="danger">Join</Button>
                                </CardBody>
                            </Card>
                        
                            <Card className="shadow">
                                <CardImg top width="100%" src={Ruangkreasi} alt={Ruangkreasi}></CardImg>
                                <CardBody>
                                    <h4>Title</h4>
                                    <p>Date:</p>
                                    <p>Location:</p>
                                    <p>Fee:</p>
                                    <Button body inverse color="danger">Join</Button>
                                </CardBody>
                            </Card>
                        
                            <Card className="shadow">
                                <CardImg top width="100%" src={Ruangkreasi} alt={Ruangkreasi}></CardImg>
                                <CardBody>
                                    <h4>Title</h4>
                                    <p>Date:</p>
                                    <p>Location:</p>
                                    <p>Fee:</p>
                                    <Button body inverse color="danger">Join</Button>

                                </CardBody>
                            </Card>
                            
                            </Slider>
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