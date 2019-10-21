import React, {Component} from 'react'
import {
    Row,
    Col,
    Container,
    Form,
    FormGroup,
    Label,
    Input,
    Card,
    Button
} from 'reactstrap'
import FacebookLogin from 'react-facebook-login'
export default class login extends Component {
    state = {
        isLoggedIn: false,
        UserID: '',
        name: '',
        email: '',
        picture: ''
    };
    responseFacebook = response =>{
        this.setState=({
            isLoggedIn:true,
            UserID:response.UserID,
            name: response.name,
            email: response.email,
            picture: response.picture.data.url
        })
    }
    componentClicked = ()=> console.log("Clicked");
    render() {
        let fbContent;
        if (this.state.isLoggedIn) {
            fbContent = (
                <div style={{width:'400px', margin: 'auto', background:'#f4f4f4', padding:'20px'}}>
                        <img src={this.state.picture} alt={this.state.name}/>
                        <h2>Welcome{this.state.name}</h2>
                </div>
            )
        } else {
            fbContent=(<FacebookLogin
            appId="1744224152377603"
            autoLoad={true}
            fields="name,email,picture"
            onClick={this.componentClicked}
            callback={this.responseFacebook} />)
          
        }
        return (
            <div>
                <Container>
                    <Row>
                        <Col md="4">
                            <Card className="shadow">
                                <Form>

                                    <FormGroup >
                                        <Label for="email">E-mail</Label>
                                        <Input type="email" name="email" id="email" placeholder="email"/>
                                    </FormGroup>
                                    <FormGroup>
                                        <Label for="username">Username</Label>
                                        <Input type="name" name="name" id="username" placeholder="email"/>
                                    </FormGroup>
                                    <FormGroup>
                                        <Label for="password">password</Label>
                                        <Input type="password" name="password" id="password" placeholder="password"/>
                                    </FormGroup>
                                    <Button>Login</Button>
                                    <div>{fbContent}</div>
                                </Form>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}