import React, {Component} from 'react';
import { Country } from './Country';

export class Countries extends Component {
    constructor(props){
        super(props);
        this.state = {
            lastClickedCountryName: null,
        };
    };

    toggleLastClickedCountryName = (countryName) => {
        this.setState({lastClickedCountryName: countryName});
    };

    render(){
        const renderCountries = this.props.countries ?
            (
                <ul>
                    {this.props.countries.map(country =>
                        <Country
                            countryName={country.countryName}
                            cities={country.cities}
                            lastClickedCountryName={this.state.lastClickedCountryName}
                            toggleLastClickedCountryName={this.toggleLastClickedCountryName}
                        />
                    )}
                </ul>
            ) :
            null;
        return renderCountries;
    }
};