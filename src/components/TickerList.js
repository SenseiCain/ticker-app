import React, { useState, useEffect } from 'react';

const TickerList = props => {
    const [list, setList] = useState(['AAPL', 'MSFT', 'AMZN']);
    const [data, setData] = useState([]);

    async function getCompanyData() {
        const url = 'https://alpha-apis-finance-graphql.p.rapidapi.com/';

        const mutation = `
            {
                apple: company(identifier: "AAPL"){
                    name
                }
                
                microsoft: company(identifier: "MSFT"){
                    name
                }
                
                amazon: company(identifier: "AMZN"){
                    name
                }
            }`;

        const resp = await fetch(url, {
            method: 'POST',
            headers: {
                "x-rapidapi-host": "alpha-apis-finance-graphql.p.rapidapi.com",
                "x-rapidapi-key": "c2e6cd2352mshc152fd4126f9197p1e9892jsne99352339c02",
                "content-type": "application/json",
                "accept": "application/json",
                "useQueryString": true
            },
            body: JSON.stringify({ query: mutation })
        });
        const json = await resp.json();

        console.log(json);
    }

    useEffect(() => {
        // console.log('mounted');
        getCompanyData();
    })

    return(
        <div></div>
    )
}

export default TickerList;