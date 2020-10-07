import React from 'react';

import { useFetchMultipleCompanies } from '../hooks/useFetchMultipleCompanies';

const TickerList = ({ tickers }) => {

    const { resp, status } = useFetchMultipleCompanies(tickers);

    const generateCards = () => {
        return Object.keys(resp).map((key, i) => {
            return (
                <div key={i}>
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