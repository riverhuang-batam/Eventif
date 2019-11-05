import React,{Component} from 'react'
import Eventslide from '../../Components/Eventslide'
import Whatsnew from '../../Components/Whatsnews'
export default class Home extends Component{
    render(){
        return(
            <div>
                <Eventslide/>
                <Whatsnew/>
            </div>
        )
    }
}