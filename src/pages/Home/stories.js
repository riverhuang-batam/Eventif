import React from 'react'
import {storiesOf} from '@storybook/react'
import Home from './'
storiesOf('pages/Home', module)
.add('Home',()=>{
    return(
        <Home/>
    )
})