import React from 'react'
import {storiesOf} from '@storybook/react'
import TicketFormCustomer from '.'
storiesOf('Pages/TicketFormCustomer', module)
.add('TicketFormCustomer', ()=>{
    return(
        <TicketFormCustomer/>
    )
})