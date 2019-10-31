import React, {Component} from 'react'
import {Row} from 'reactstrap'
import Search from './../../Components/Search'
import Eventinfo from './../../Components/Eventinfo'
export default class App extends Component{
    render(){
        return(
            <div>
                <Search/>
                <Eventinfo/>
            </div>
        )
    }
}