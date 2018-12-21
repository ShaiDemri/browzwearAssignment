import React,{Component} from 'react';
import {Cities} from "./Cities";

export class Country extends Component {
    constructor(props) {
        super(props);
        this.state = {
            shouldShowCities: false,
        };
    }

    componentWillReceiveProps(nextProps){
        if(nextProps.lastClickedCountryName !== this.props.countryName){
            this.setState({shouldShowCities: false})
        }
    }

    onClickHandler = () => {
        this.setState({shouldShowCities:true});
        this.props.toggleLastClickedCountryName(this.props.countryName);
    };

    render(){
        if (this.state.shouldShowCities){
            return (
                <li key={this.props.countryName}>
                    {this.props.countryName}
                    <Cities
                        cities={this.props.cities}
                    />
                </li>
            );
        }
        return (
            <li
                onClick={this.onClickHandler}
            >
                {this.props.countryName}
            </li>
        );
    }
};
