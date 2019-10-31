import React,{Component} from 'react'
import {Container} from 'reactstrap'
import GoogleLogin from 'react-google-login'
export default class Googlelogin extends Component{
    state = {
        isLoggedIn: false,
        UserID: '',
        name: '',
        email: '',
        picture: ''
    };
    responseGoogle = response => {
        console.log('response')
        this.setState({isLoggedIn: true, UserID: response.UserID, name: response.name, email: response.email, picture: response.picture.data.url});
    };

    componentClicked = () => console.log("Clicked");
    
    render(){
        let googleContent;
        if (this.state.isLoggedIn) {
            googleContent = (
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
                </div>
            )
        } else {
            googleContent = (<GoogleLogin
                clientId="215557626910-cq92npqpbu0p6935ae9b28fmld64r0na.apps.googleusercontent.com"
                uxMode="redirect"
                  redirectUri="http://localhost:3000"/>)

        }
        return(
            <div>
                {googleContent}
            </div>
        )
    }
}