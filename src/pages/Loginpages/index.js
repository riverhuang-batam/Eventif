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
import {HashRouter, Switch, Route, Link} from 'react-router-dom'
import Login from './../../Components/Login'
import Logoeventif from './../../Images/Logoeventifv2(black).png'
import Registerpages from '../Registerpages'

export default class Loginpages extends Component {
    componentClicked = () => {
        console.log("Clicked");
        document.getElementById('event').style.display = 'block'
        window.location.hash = '/'
    }
    render() {
        
        return (
            <HashRouter>
                <Container>
            <div style={{paddingTop:"100px"}}>
                <Row>
                    
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
                                        <img top width="55%" src={Logoeventif}/>
                                    </div>
                                </Container>
                                <CardBody>
                                    <Form>
                                        <FormGroup>
                                            <Input type="email" placeholder="E-Mail" required></Input>
                                        </FormGroup>
                                        <FormGroup>
                                            <Input type="password" placeholder="Password" required  />
                                        </FormGroup>
                                        <Button body inverse color="warning" onClick={this.componentClicked} style={{color:"white"}} block >Login</Button>
                                    </Form>
                                    <div className="text-center mt-2 mb-2">
                                        Or continue with your social account
                                    </div>
                                    <Login/>
                                    <div className="text-center mt-2">
                                    Don't have an account?
                                    <span >
                                        <Link to="Registerpages">
                                         Register
                                         </Link>
                                    </span>
                                    </div>
                                </CardBody>
                            </Container>
                        </Card>
                    </Col>
                    
                </Row>
            </div>
            </Container>
            <Switch >
                <Route path="Registerpages" component={Registerpages}/>
            </Switch>
            </HashRouter>
        )
    }
}