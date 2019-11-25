import React, {Component} from 'react'
import {Switch, Route, HashRouter, Link } from 'react-router-dom'
import Loginpages from './../Loginpages'
import Registerpages from './../Registerpages'
export default class LoginRegister extends Component{
    render(){
        return(
            <HashRouter>
            <div className="text-center" style={{paddingTop:"120px"}}>
                <Link to="/Loginregister/">
                <a>Login</a>
                </Link>
                <Link to="/Loginregister/Registerpages">
                <a>Register</a>
                </Link>
            </div>
            <Switch>

                <Route exact path="/Loginregister/" component={Loginpages}/>
                <Route exact path="/Loginregister/Registerpages" component={Registerpages}/>
            </Switch>
            </HashRouter>
        )
    }
}