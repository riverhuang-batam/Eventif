import React,{Component} from 'react'
import Jumbotron from '../../Components/Jumbotron'
import Whatsnew from '../../Components/Whatsnews'
export default class Home extends Component{
    render(){
        return(
            <div>
                <Jumbotron/>
                <Whatsnew/>
            </div>
        )
    }
}