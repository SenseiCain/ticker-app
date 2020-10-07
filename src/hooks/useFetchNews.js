import { useState, useEffect } from 'react';

const useFetchNews = () => {
    const [news, setNews] = useState([]);
    const [statusNews, setStatusNews] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            setStatusNews(true);
            
            const url = 'https://alpha-apis-finance-graphql.p.rapidapi.com/';

            const query =  "{ apiResponseNews(pageSize: 3) { news { title url publicationDate } } }"

            const resp = await fetch(url, {
                method: 'POST',
                headers: {
                    "x-rapidapi-host": "alpha-apis-finance-graphql.p.rapidapi.com",
                    "x-rapidapi-key": "c2e6cd2352mshc152fd4126f9197p1e9892jsne99352339c02",
                    "content-type": "application/json",
                    "accept": "application/json",
                    "useQueryString": true
                },
                body: JSON.stringify({ query })
            });

            const json = await resp.json();
            const result = json.data.apiResponseNews.news;

            setNews(result);
            setStatusNews(false);
        };

        fetchData();
    }, [])

    return { news, statusNews };
};

export { useFetchNews };