import React from 'react'
import {storiesOf} from '@storybook/react'
import TicketForm from './'
storiesOf('Pages/TicketForm', module)
.add('TicketForm', ()=>{
    return(
        <TicketForm/>
    )
})