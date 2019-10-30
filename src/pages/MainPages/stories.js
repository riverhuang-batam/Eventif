import React from 'react'
import {storiesOf} from '@storybook/react'
import Mainpages from './'
storiesOf('pages/Mainpages', module)
.add('Mainpages',()=>{
    return(
        <Mainpages/>
    )
})