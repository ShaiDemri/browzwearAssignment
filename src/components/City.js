import React,{Component} from 'react';
import {Companies} from './Companies';
export class City extends Component {
    constructor(props) {
        super(props);
        this.state = {
            shouldShowCompanies: false,
        };
    }

    componentWillReceiveProps(nextProps){
        if(nextProps.lastClickedCityName !== this.props.cityName){
            this.setState({shouldShowCompanies: false})
        }
    }

    onClickHandler = () => {
        this.setState ({shouldShowCompanies:true});
        this.props.toggleLastClickedCityName(this.props.cityName);
    };


    render(){
        console.log(this.state.shouldShowCompanies);
        if (this.state.shouldShowCompanies){
            return (
                <li>
                    {this.props.cityName}
                    <Companies
                        companies={this.props.companies}
                    />
                </li>
            );
        }
        return (
            <li
                onClick={this.onClickHandler}
            >
                {this.props.cityName}
            </li>
        );
    }
};
