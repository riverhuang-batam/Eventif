import React, {Component} from 'react';
import {
    Card,
    Row,
    Col,
    Form,
    Input,
    FormGroup,
    Table,
    Button,
    CardImg,
    Container
} from 'reactstrap';
import RuangKreasi from '../../Images/Ruangkreasi.jpg'
import {HashRouter, Route, Switch, Link} from 'react-router-dom'
import TicketPaymentCustomer from '../TicketPaymentCustomer';

export default class TicketFormCustomer extends Component {
    render() {
        return (
            <HashRouter>
                <div style={{
                    paddingTop: "120px"
                }}>
                    <Container>

                        <Card className="shadow">
                            <CardImg src={RuangKreasi} width="100%" height="300vw"/>
                            <Table>
                                <thead>
                                    <tr>
                                        <th>Jenis Ticket</th>
                                        <th>Harga per Ticket</th>
                                        <th>Kuantitas</th>
                                        <th>Jumlah</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>Ticket Reguler</td>
                                        <td>Rp. 30000</td>
                                        <td>
                                            <Input type="select" name="select">
                                                <option>0</option>
                                                <option>1</option>
                                                <option>2</option>
                                                <option>3</option>
                                                <option>4</option>
                                                <option>5</option>
                                            </Input>
                                        </td>
                                        <td>Rp. 0</td>
                                    </tr>
                                    <tr>
                                        <td>Ticket Spesial</td>
                                        <td>Rp. 30000</td>
                                        <td>
                                            <Input type="select" name="select">
                                                <option>0</option>
                                                <option>1</option>
                                                <option>2</option>
                                                <option>3</option>
                                                <option>4</option>
                                                <option>5</option>
                                            </Input>
                                        </td>
                                        <td>Rp. 0</td>
                                    </tr>

                                </tbody>
                            </Table>
                            <Link to="TicketPaymentCustomer">
                                <Button body inverse color="warning" style={{color:"white"}} block>Buy Ticket</Button>
                            </Link>
                        </Card>

                    </Container>
                </div>
                <Switch>
                    <Route path="TicketPaymentCustomer" component={TicketPaymentCustomer}/>
                </Switch>

            </HashRouter>
        )
    }
}