import { useState, useEffect } from 'react';

const useFetchMultipleCompanies = query => {
    const [resp, setResp] = useState({});
    const [status, setStatus] = useState(false);

    useEffect(() => {
        if (!query) return;

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
        return  `${c.ticker}Name: company(identifier: "${c.ticker}"){ name } ${c.ticker}Price:realtimeStockPrice(identifier: "${c.ticker}") { lastPrice }`;
    });

    return `{ ${mutationObjs.join(' ')} }`
}

const formatJSON = (query, { data }) => {
    return query.map(({ticker}) => {
        return {
            ticker,
            name: data[`${ticker}Name`].name,
            price: data[`${ticker}Price`].lastPrice
        }
    });
}

export { useFetchMultipleCompanies };