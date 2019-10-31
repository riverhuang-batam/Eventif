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
export default class Login extends Component {
    state = {
        isLoggedIn: false,
        UserID: '',
        name: '',
        email: '',
        picture: ''
    };
    responseFacebook = response => {
        console.log('response')
        this.setState({isLoggedIn: true, UserID: response.UserID, name: response.name, email: response.email, picture: response.picture.data.url});
    };

    componentClicked = () => console.log("Clicked");
    render() {
        let fbContent;
        if (this.state.isLoggedIn) {
            fbContent = (
                
                <div
                    style={{
                    width: '400px',
                    margin: 'auto',
                    background: '#f4f4f4',
                    padding: '20px'
                }}>
                    <img src={this.state.picture} alt={this.state.name}/>
                    <h2>Welcome {this.state.name}</h2>
                    Email: {this.state.email}
                    <a href="#" onClick={(e)=>{e.preventDefault(); window.FB.logout()}}>logout</a>
                </div>
            )
        } else {
            fbContent = (<FacebookLogin
                appId="577232049750587"
                redirectUri="http://localhost:3000"
                autoLoad={true}
                fields="name,email,picture"
                onClick={this.componentClicked}
                callback={this.responseFacebook}/>)

        }
        return (
            <div>
                
                {fbContent}
            </div>
        )
    }
}