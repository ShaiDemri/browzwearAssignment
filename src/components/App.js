import React, {Component} from 'react';
import {connect} from 'react-redux';
import GoogleMap from './GoogleMap';
import {getData} from "../utils/index";
import { Countries } from "./Countries";


class App extends Component {
    constructor(props){
        super(props);
        this.state = {
            data: null,
        };
    };


    componentDidMount(){
        this.setState({
            data: getData(),
        })
    }

    render() {
        return (
            <div>
                <Countries
                    countries={this.state.data}
                />
            </div>
        );
    }
};

export default App;

{/*<table>*/}
    {/*<tbody>*/}
    {/*<tr>*/}
        {/*<th> Countries</th>*/}
        {/*<th> Cities</th>*/}
        {/*<th> Company</th>*/}
        {/*<th> Map</th>*/}
    {/*</tr>*/}
    {/*</tbody>*/}

    {/*<tbody>*/}
    {/*<tr>*/}
        {/*<td><p>111</p></td>*/}
        {/*<td><p>222</p></td>*/}
        {/*<td><p>333</p></td>*/}
        {/*<td><GoogleMap/></td>*/}
    {/*</tr>*/}
    {/*</tbody>*/}
{/*</table>*/}