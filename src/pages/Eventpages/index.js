import React, {Component} from 'react'
import Search from './../../Components/Search'
import Eventinfo from './../../Components/Eventinfo'
import Filter from '../../Components/Filter'
import {Switch, HashRouter, Route, Link} from 'react-router-dom';
import TicketForm from '../TicketForm'
export default class Eventpages extends Component{
    render(){
        return(
            <HashRouter>
            <div>

            
                <Search/>
                <Filter/>
                <Eventinfo/>
                </div>
                <Switch>
                <Route path="/TicketForm" component={TicketForm}/>
                
            </Switch>
            </HashRouter>
        )
    }
}