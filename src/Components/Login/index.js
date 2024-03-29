import React, {Component} from 'react'
import FacebookLogin from 'react-facebook-login'
import GoogleLogin from 'react-google-login'
export default class Login extends Component {
    constructor(props){
        super(props);
        this.stats={
            redirect:false
        }
        this.signup = this.signup.bind(this)
    }
    signup(res, type){}

    componentClicked = () => {
        console.log("Clicked");
        document.getElementById('event').style.display = 'block'
        document.getElementById('login').style.display = 'none'
        document.getElementById('logout').style.display = 'block'
        window.location.hash = '/'
    }
    
    render() {
        
        const responseFacebook = (response) =>{
            console.log(response)
            this.signup(response, 'facebook')
            
            debugger;
        }
        const responseGoogle = (response) =>{
            console.log(response)
            this.signup(response, 'google')
        }
        return (
            
            <div className="text-center">    
            <FacebookLogin
            appId="1744224152377603"
            redirectUri="http://localhost:3000"
            fields="name,email,picture"
            onClick={this.componentClicked}
            callback={this.responseFacebook}
            
            />
            <div className="mt-2">
            <GoogleLogin
                clientId="184541897347-eqqoanb3jk9q9trkjl02frc0uelvrbe8.apps.googleusercontent.com"
                buttonText="LOGIN WITH GOOGLE"
                onSuccess={responseGoogle}
                onFailure={responseGoogle}/>
                </div>
                </div>
            
        )
    }
}