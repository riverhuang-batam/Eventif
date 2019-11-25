import React from 'react'
import {storiesOf} from '@storybook/react'
import TicketPayment from './'
storiesOf('Pages/TicketPayment', module)
.add('TicketPayment', ()=>{
    return(
        <TicketPayment/>
    )
})