import React from 'react';
import {storiesOf} from '@storybook/react'
import Eventpages from './'
storiesOf('pages/Eventpages',module)
.add('Eventpages',()=>{
    return(
        <Eventpages/>
    )
})