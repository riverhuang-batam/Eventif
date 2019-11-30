import React, {Component} from 'react'
import {
    Container,
    Form,
    Input,
    Button,
    Card,
    CardBody,
    FormGroup,
    Row,
    Col
} from 'reactstrap'
import Login from './../../Components/Login'
import Logoeventif from './../../Images/Logoeventifv2(black).png'

export default class Loginpages extends Component {
    componentClicked = () => {
        console.log("Clicked");
        document.getElementById('event').style.display = 'block'
        window.location.hash = '/'
    }
    render() {
        
        return (
            <div style={{backgroundColor:"#E5E5E5"}}>
                <Row>
                    <Container>
                    <Col
                        sm="12"
                        md={{
                        size: 4,
                        offset: 4
                    }}
                    >
                        <Card className="shadow">
                            <Container>

                                <Container>
                                    <div className="text-center mt-4 mb-4">
                                        <img top width="46%" src={Logoeventif}/>
                                    </div>
                                </Container>
                                <CardBody>
                                    <Form>
                                        <FormGroup>
                                            <Input type="email" placeholder="E-Mail"></Input>
                                        </FormGroup>
                                        <FormGroup>
                                            <Input type="password" placeholder="Password"/>
                                        </FormGroup>
                                        <Button body inverse color="warning" onClick={this.componentClicked} style={{color:"white"}} block >Login</Button>
                                    </Form>
                                    <div className="text-center mt-2 mb-2">
                                        Or continue with your social account
                                    </div>
                                    <Login/>
                                </CardBody>
                            </Container>
                        </Card>
                    </Col>
                    </Container>
                </Row>
            </div>
        )
    }
}