import React, { useState, useEffect } from 'react';

import { useFetchMultipleCompanies } from '../hooks/useFetchMultipleCompanies';

const TickerList = props => {
    const [companies, setCompanies] = useState([
        { ticker: "GOOGL" },
        { ticker: "AMZN" },
        { ticker: "MSFT" },
    ]);

    const { resp, status } = useFetchMultipleCompanies(companies);
    // console.log(resp)

    const generateCards = () => {
        return Object.keys(resp).map(key => {
            return (
                <div>
                    <ul>
                        <li>{resp[key].name}</li>
                        <li>{resp[key].ticker}</li>
                        <li>{resp[key].price}</li>
                    </ul>
                </div>
            )
        })   
    }

    return(
        <div>
            {generateCards()}
        </div>
    )
}

export default TickerList;