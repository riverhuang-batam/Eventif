import React from 'react'
import {storiesOf} from '@storybook/react'
import Login from './'

storiesOf('Components/Login', module)
.add('Login',()=>{
    return(
        <Login/>
    )
})