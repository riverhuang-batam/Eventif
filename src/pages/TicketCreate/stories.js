import React from 'react'
import {storiesOf} from '@storybook/react'
import TicketCreate from '.'
storiesOf('Pages/TicketCreate', module)
.add('TicketCreate', ()=>{
    return(
        <TicketCreate/>
    )
})