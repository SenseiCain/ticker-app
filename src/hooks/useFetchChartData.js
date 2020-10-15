import { useState, useEffect } from 'react';

const useFetchChartData = (ticker, time) => {
    const [chartData, setChartData] = useState([]);
    const [statusChart, setStatusChart] = useState(false);

    useEffect(() => {
        const fetchData = async (time) => {
            setStatusChart(true);

            const range = "1d";
            const interval = "60m";

            const url = `https://rapidapi.p.rapidapi.com/stock/v2/get-chart?interval=${interval}&symbol=${ticker}&range=${range}&region=US`

            const headers = {
                "x-rapidapi-host": "apidojo-yahoo-finance-v1.p.rapidapi.com",
                "x-rapidapi-key": "c2e6cd2352mshc152fd4126f9197p1e9892jsne99352339c02"
            }

            const resp = await fetch(url, { headers });
            const json = await resp.json();

            const result = json.chart.result[0];
            const returnArr = result.timestamp.map((time, i) => {
                // Time & Close
                return { time, price: result.indicators.quote[0].close[i] }
            });

            setStatusChart(false);
            setChartData(returnArr);
        }

        fetchData();
    }, [])

    return { chartData, statusChart }
}

export { useFetchChartData };