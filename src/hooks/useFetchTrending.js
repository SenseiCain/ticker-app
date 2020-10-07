import { useState, useEffect } from 'react';

// Yahoo Finance RESTful API
// Use to fetch 3 trending tickers

const useFetchTrending = () => {
    const [trending, setTrending] = useState([]);
    const [statusTrending, setStatusTrending] = useState(false);

    useEffect(() => {

        const fetchData = async () => {
            setStatusTrending(true);
            
            const url = 'https://apidojo-yahoo-finance-v1.p.rapidapi.com/market/get-trending-tickers';

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

            const results = json.finance.result[0].quotes.slice(0,3);
            const resultObj = results.map(el => {
                return {
                    ticker: el.symbol,
                    name: el.shortName,
                    price: el.regularMarketPrice.toFixed(2),
                    delta: el.regularMarketChange.toFixed(1)
                }
            })

            setTrending(resultObj);
            setStatusTrending(false);
        };

        fetchData();
    }, []);

    return { trending, statusTrending };
}

export { useFetchTrending };