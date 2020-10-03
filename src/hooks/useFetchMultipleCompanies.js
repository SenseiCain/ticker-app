import { useState, useEffect } from 'react';

const useFetchMultipleCompanies = query => {
    const [resp, setResp] = useState({});
    const [status, setStatus] = useState(false);

    useEffect(() => {
        if (!query) return;

        const fetchData = async () => {
            setStatus(true);
            
            const url = 'https://alpha-apis-finance-graphql.p.rapidapi.com/';

            const mutationObjs = query.map(c => {
                return  `${c.name}: company(identifier: "${c.ticker}"){ name }`;
            });

            const mutation = `{ ${mutationObjs.join(' ')} }`;

            const resp = await fetch(url, {
                method: 'POST',
                headers: {
                    "x-rapidapi-host": "alpha-apis-finance-graphql.p.rapidapi.com",
                    "x-rapidapi-key": "c2e6cd2352mshc152fd4126f9197p1e9892jsne99352339c02",
                    "content-type": "application/json",
                    "accept": "application/json",
                    "useQueryString": true
                },
                body: JSON.stringify({ "query": mutation })
            });

            const json = await resp.json();

            setResp(json.data);
            setStatus(false);
        };

        fetchData();
    }, [query]);

    return { resp, status };
}

export { useFetchMultipleCompanies };