import { useState, useEffect } from 'react';

const useFetchChartData = (ticker, time) => {
    const [chartData, setChartData] = useState([]);
    const [statusChart, setStatusChart] = useState(false);

    const fetchData = async () => {
        setChartData([])
        setStatusChart(true);

        let range;
        let interval;

        switch(time) {
            case 'day':
                range = "1d";
                interval = "60m";
                break;
            case 'week':
                range = "5d";
                interval = "1d";
                break;
            case 'month':
                range = "1mo";
                interval = "1d";
                break;
            case '3month':
                range = "3mo";
                interval = "1d";
                break;
            case '1yr':
                range = "1y";
                interval = "1d";
                break;
        }

        

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
            return { time: new Date(time * 1000), price: result.indicators.quote[0].close[i] }
        });

        setStatusChart(false);
        setChartData(returnArr);
    }

    useEffect(() => {
        fetchData();
    }, [ticker, time])

    return { chartData, statusChart }
}

export { useFetchChartData };