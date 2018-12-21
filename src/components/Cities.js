import React ,{ Component }from 'react';
import {City} from './City';


export class Cities  extends Component{
    constructor(props){
        super(props);
        this.state = {
        lastClickedCityName: null,
    };
};

toggleLastClickedCityName = (cityName) => {
    this.setState({lastClickedCityName: cityName});
};

render() {
    const renderCity = this.props.cities ?
        (
            <ul style={{position: 'fixed', left: '200px', top: '15px'}}>
                {this.props.cities.map(city =>
                    <City
                        cityName={city.cityName}
                        companies={city.companies}
                        lastClickedCityName={this.state.lastClickedCityName}
                        toggleLastClickedCityName={this.toggleLastClickedCityName}
                    />
                )}
            </ul>
        ) :
        null;
    return renderCity;
    }
}