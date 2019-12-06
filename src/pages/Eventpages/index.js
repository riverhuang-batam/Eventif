import React, {Component} from 'react'
import {Jumbotron} from 'reactstrap'
import Search from './../../Components/Search'
import Eventinfo from './../../Components/Eventinfo'
import Filter from '../../Components/Filter'
import eventjumbotron from '../../Images/eventjumbotron.jpg'


export default class Eventpages extends Component{
    render(){
        return(
            
            <div>
                <Jumbotron fluid style={{backgroundImage:`url(${eventjumbotron})`,backgroundSize: 'cover',
                    position: 'relative',}}>
                         <div
                        style={{
                        position: 'absolute',
                        backgroundColor: 'black',
                        top: '0',
                        left: '0',
                        bottom: '0',
                        right: '0',
                        opacity: '0.3',
                        zIndex: "1"
                    }}></div>
                <Search/>
                </Jumbotron>
                <Filter/>
                <Eventinfo/>
                </div>
                
        )
    }
}