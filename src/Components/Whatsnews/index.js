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
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";


export default class Whatsnew extends Component {
    render() {
        const settings = {
            autoplay: true,
            autoplaySpeed: 1500,
            infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 3,
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
            slidesToScroll: 2
          }
        }
      ]
    
          };
        return (
            <div>
                <Container className="mt-4">
                  
                    <Row>
                      <Col md="6">
                      <div className="mb-4">
                    <h2 className="text-center">What's New?</h2>
                    <h5>You Looking new Event!!??</h5>
                    <h5>Here is your new event</h5>
                    <h5>EventIF your event solution</h5>
                    </div>
                    </Col>
                      <Col md="6">
                        
                    <Slider {...settings}>
          <div style={{ width: 250}}>
          
<Card >
                                <CardImg top width="100%" src={events3}/>
                                <CardBody>
                                    <h1>Title</h1>
                                    <p>Date:</p>
                                    <p>Location:</p>
                                    <p>Fee:</p>
                                    <Button body inverse color="danger">Join</Button>
                                </CardBody>
                            </Card>    
          
          </div>
          <div>
          <Card >
                                <CardImg top width="100%" src={events3}/>
                                <CardBody>
                                    <h1>Title</h1>
                                    <p>Date:</p>
                                    <p>Location:</p>
                                    <p>Fee:</p>
                                    <Button body inverse color="danger">Join</Button>
                                </CardBody>
                            </Card>
          </div>
          <div>
          <Card >
                                <CardImg top width="100%" src={events3}/>
                                <CardBody>
                                    <h1>Title</h1>
                                    <p>Date:</p>
                                    <p>Location:</p>
                                    <p>Fee:</p>
                                    <Button body inverse color="danger">Join</Button>
                                </CardBody>
                            </Card>
          </div>
          <div>
          <Card>
                                <CardImg top width="100%" src={events3}/>
                                <CardBody>
                                    <h1>Title</h1>
                                    <p>Date:</p>
                                    <p>Location:</p>
                                    <p>Fee:</p>
                                    <Button body inverse color="danger">Join</Button>
                                </CardBody>
                            </Card>
          </div>
          <div>
          <Card >
                                <CardImg top width="100%" src={events3}/>
                                <CardBody>
                                    <h1>Title</h1>
                                    <p>Date:</p>
                                    <p>Location:</p>
                                    <p>Fee:</p>
                                    <Button body inverse color="danger">Join</Button>
                                </CardBody>
                            </Card>
          </div>
          <div>
          <Card >
                                <CardImg top width="100%" src={events3}/>
                                <CardBody>
                                    <h1>Title</h1>
                                    <p>Date:</p>
                                    <p>Location:</p>
                                    <p>Fee:</p>
                                    <Button body inverse color="danger">Join</Button>
                                </CardBody>
                            </Card>
          </div>
        </Slider>         
        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}