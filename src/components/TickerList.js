import React, { useState, useEffect } from 'react';

import { useFetchMultipleCompanies } from '../hooks/useFetchMultipleCompanies';

const TickerList = props => {
    const [companies, setCompanies] = useState([
        { name: "Apple", ticker: "AAPL" },
        { name: "Amazon", ticker: "AMZN" },
        { name: "Microsoft", ticker: "MSFT" },
    ]);

    const { resp, status } = useFetchMultipleCompanies(companies);
    console.log(resp);

    return(
        <div></div>
    )
}

export default TickerList;