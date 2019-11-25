import React from 'react'
import {storiesOf} from '@storybook/react'
import TicketPdfCustomer from './'
storiesOf('Pages/TicketPdfCustomer', module)
.add('TicketPdfCustomer', ()=>{
    return(
        <TicketPdfCustomer/>
    )
})