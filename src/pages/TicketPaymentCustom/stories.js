import React from 'react'
import {storiesOf} from '@storybook/react'
import TicketPaymentCustomer from './'
storiesOf('Pages/TicketPaymentCustomer', module)
.add('TicketPaymentCustomer', ()=>{
    return(
        <TicketPaymentCustomer/>
    )
})