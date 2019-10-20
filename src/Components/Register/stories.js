import React from 'react'
import {storiesOf} from '@storybook/react'
import Register from './'

storiesOf('Components/Register', module)
.add('Register',()=>{
    return(
        <Register/>
    )
})