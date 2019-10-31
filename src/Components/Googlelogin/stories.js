import React from 'react'
import {storiesOf} from '@storybook/react'
import Googlelogin from './'
storiesOf('Components/Googlelogin', module)
.add('Googlelogin',()=>{
    return(
        <div>
            <Googlelogin/>
        </div>
    )
})