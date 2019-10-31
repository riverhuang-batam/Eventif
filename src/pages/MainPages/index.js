import React,{Component} from 'react'
import {Container} from 'reactstrap'
import Navbars from './../../Components/Navbar'
import JumbotronMainpages from '../../Components/Jumbotronmainpages'
export default class Mainpages extends Component{
    render(){
        return(
            <div>
                <JumbotronMainpages/>
            </div>
        )
    }
}