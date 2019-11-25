import React, {Component} from 'react'
import Search from './../../Components/Search'
import Eventinfo from './../../Components/Eventinfo'
import Filter from '../../Components/Filter'


export default class Eventpages extends Component{
    render(){
        return(
            
            <div>

            
                <Search/>
                <Filter/>
                <Eventinfo/>
                </div>
                
        )
    }
}