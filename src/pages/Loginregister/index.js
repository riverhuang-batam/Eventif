import React, {Component} from 'react'
import {Container} from 'reactstrap'
import {Switch, Route, HashRouter, Link} from 'react-router-dom'
import Loginpages from './../Loginpages'
import Registerpages from './../Registerpages'
export default class LoginRegister extends Component {
    render() {
        return (
            <HashRouter>
                <Container>
                    <div
                        className="text-center"
                        style={{
                        paddingTop: "120px",
                        backgroundColor:"#E5E5E5"
                    }}>

                        <Link to="/Loginregister/">
                            <a>Login</a>
                        </Link>
                        <Link to="/Loginregister/Registerpages">
                            <a>Register</a>
                        </Link>

                    </div>
<div style={{backgroundColor:"#E5E5E5"}}>
                    <Switch>

                        <Route exact path="/Loginregister/" component={Loginpages}/>
                        <Route exact path="/Loginregister/Registerpages" component={Registerpages}/>
                    </Switch>
                    </div>
                </Container>
            </HashRouter>
        )
    }
}