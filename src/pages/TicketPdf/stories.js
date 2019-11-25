import React from 'react'
import {storiesOf} from '@storybook/react'
import TicketPdf from './'
storiesOf('Pages/TicketPdf', module)
.add('TicketPdf', ()=>{
    return(
        <TicketPdf/>
    )
})