import React, {Component} from 'react'
import {ButtonDropdown, DropdownItem, DropdownToggle, DropdownMenu, UncontrolledButtonDropdown, Container} from 'reactstrap'

export default class Filter extends Component {

    render() {

        return (
            <div className="mt-4">
                <Container>
                <UncontrolledButtonDropdown >
                    <DropdownToggle caret color="primary">
                        Filter
                    </DropdownToggle>
                    <DropdownMenu>
                        <DropdownItem header>Certificated</DropdownItem>
                    </DropdownMenu>
                </UncontrolledButtonDropdown>
                </Container>
            </div>

        )
    }
}