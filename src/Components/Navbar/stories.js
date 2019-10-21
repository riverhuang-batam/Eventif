import React from 'react'
import {storiesOf} from '@storybook/react'
import Navbar from './';

storiesOf('Components/Navbar', module)
.add('Navbar',()=>{
    return(
        <Navbar/>
    )
})
