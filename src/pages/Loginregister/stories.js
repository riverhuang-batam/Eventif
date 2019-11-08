import React from 'react'
import {storiesOf} from '@storybook/react'
import Loginregister from './'
storiesOf('Pages/Loginregister', module)
.add('Loginregister',()=>{
    return(
        <Loginregister/>
    )
})