import React, {Component} from 'react'
import {Container, Jumbotron, Button} from 'reactstrap'
import {Link, Route,Redirect, HashRouter} from 'react-router-dom'
import events from '../../Images/events.jpg'
export default class Jumbotronmainpages extends Component {
    render() {
        return (
            <div>
                <HashRouter></HashRouter>
                <Jumbotron fluid style={{backgroundImage:`url(${events})`, backgroundSize:'cover',position:'relative',padding:'20%'}}>
                    <Button>Buat eventmu sekarang</Button>
                </Jumbotron>
            </div>
        )
    }
}