import React, {Component} from 'react'
import {Switch, Route, HashRouter, Link } from 'react-router-dom'
import Loginpages from './../Loginpages'
import Registerpages from './../Registerpages'
export default class LoginRegister extends Component{
    render(){
        return(
            <HashRouter>
            <div className="text-center" style={{paddingTop:"120px"}}>
                <Link to="/Loginpages">
                <a>Login</a>
                </Link>
                <Link to="/Registerpages">
                <a>Register</a>
                </Link>
            </div>
            <Switch>

                <Route path="/Loginpages" component={Loginpages}/>
                <Route path="/Registerpages" component={Registerpages}/>
            </Switch>
            </HashRouter>
        )
    }
}