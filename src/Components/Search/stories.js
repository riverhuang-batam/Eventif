import React from 'react'
import {storiesOf} from '@storybook/react'
import Search from './'
storiesOf('Components/Search', module)
.add('Search',()=>{
    return(
        <Search/>
    )
})