
import client from '../clients.json';

export const getData = () => {
    const data = [];
    client.Customers.forEach((customer) => {
        // console.log('customer.country:', customer.Country, 'data[customer.Country]:', data[customer.Country]);
        const currentCustomerCountry = data.find(country => country.countryName === customer.Country);
        // console.log('currentCustomerCountry: ', currentCustomerCountry);
        const isCountryAlreadyInData = currentCustomerCountry !== undefined;
        if(!isCountryAlreadyInData){
            data.push({
                countryName: customer.Country,
                cities:[{
                    cityName: customer.City,
                    companies: [{
                        name: customer.CompanyName,
                        location: customer.Address
                    }]
                }],
            });
        }
        else {
            const currentCustomerCity = currentCustomerCountry.cities.find(city => city.cityName===customer.City);
            const isCityAlreadyInCounty =  currentCustomerCity !== undefined;
            if(!isCityAlreadyInCounty){
                currentCustomerCountry.cities.push({
                    cityName: customer.City,
                    companies: [{
                        name: customer.CompanyName,
                        location: customer.Address
                    }]
                })
            }else {
                currentCustomerCity.companies.push({
                    name: customer.CompanyName,
                    location: customer.Address
                })
            }
        }
    });
    return data;
};