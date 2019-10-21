import React from 'react'
import {storiesOf} from '@storybook/react'
import Mainpages from './'
storiesOf('Components/Mainpages', module)
.add('Component',()=>{
    return(
        <Mainpages/>
    )
})