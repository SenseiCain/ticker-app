import { useState, useEffect } from 'react';

// Yahoo Finance RESTful API
// Use to fetch 3 tickers (top gainer, loser, and most active)

const useFetchMovers = () => {
    const [movers, setMovers] = useState([]);
    const [status, setStatus] = useState(false);

    useEffect(() => {

        const fetchData = async () => {
            setStatus(true);
            
            const url = 'https://apidojo-yahoo-finance-v1.p.rapidapi.com/market/v2/get-movers';

            const resp = await fetch(url, {
                headers: {
                    "x-rapidapi-host": "apidojo-yahoo-finance-v1.p.rapidapi.com",
	                "x-rapidapi-key": "c2e6cd2352mshc152fd4126f9197p1e9892jsne99352339c02",
	                "useQueryString": true
                },
                query: {
                    "region": "US",
	                "start": "0",
                    "lang": "en-US",
	                "count": "62"

                }
            });

            const json = await resp.json();

            const result = json.finance.result;
            const topGainer = result[0].quotes[0].symbol;
            const topLoser = result[1].quotes[0].symbol;
            const topActive = result[2].quotes[0].symbol;

            // console.log(topGainer, topLoser, topActive);

            setMovers([topGainer, topLoser, topActive]);
            setStatus(false);
        };

        fetchData();
    }, []);

    return { movers, status };
}

export { useFetchMovers };