import React,{Component} from 'react';


export class Company extends Component {
    constructor(props) {
        super(props);
        this.state = {
            shouldShowCompanies: false,
        };
    }

    render(){
        console.log(this.props);
        return(<div>{this.props.companyName}</div>)
    }
};
