import { useState, useEffect } from 'react';

// Alpha Finance GraphQL
// Use to fetch Company Name, Current Price, & Percentage Change

const useFetchMultipleCompanies = query => {
    const [resp, setResp] = useState({});
    const [status, setStatus] = useState(false);

    useEffect(() => {
        if (query.length < 1 || query == undefined) return;

        const fetchData = async () => {
            setStatus(true);
            
            const url = 'https://alpha-apis-finance-graphql.p.rapidapi.com/';

            const resp = await fetch(url, {
                method: 'POST',
                headers: {
                    "x-rapidapi-host": "alpha-apis-finance-graphql.p.rapidapi.com",
                    "x-rapidapi-key": "c2e6cd2352mshc152fd4126f9197p1e9892jsne99352339c02",
                    "content-type": "application/json",
                    "accept": "application/json",
                    "useQueryString": true
                },
                body: JSON.stringify({ "query": generateMutation(query) })
            });

            const json = await resp.json();
            const formattedJSON = formatJSON(query, json);

            setResp(formattedJSON);
            setStatus(false);
        };

        fetchData();
    }, [query]);

    return { resp, status };
}

const generateMutation = companies => {
    const mutationObjs = companies.map(c => {
        return  `${c}Name: company(identifier: "${c}"){ name } ${c}Price:realtimeStockPrice(identifier: "${c}") { lastPrice }`;
    });

    return `{ ${mutationObjs.join(' ')} }`
}

const formatJSON = (query, { data }) => {
    // TODO - Return daily change (positive/negative)

    console.log(query, data);
    return 'test'

    // return query.map(c => {
    //     return {
    //         ticker: c,
    //         name: data[`${c}Name`].name,
    //         price: data[`${c}Price`].lastPrice
    //     }
    // });
}

export { useFetchMultipleCompanies };