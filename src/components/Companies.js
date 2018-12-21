
import React from 'react';
import { Company } from "./Company";

export const Companies = (props) => {
    console.log(props.companies);
    const renderCountries = props.companies ?
        (
            <div>
                {props.companies.map(company =>
                    <div>
                        <Company
                            companyName={company.name}
                            companies={company.address}
                        />
                    </div>
                )}
            </div>
        ) :
        null;
    return renderCountries;
};