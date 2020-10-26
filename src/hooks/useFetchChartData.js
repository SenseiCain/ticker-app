import { useState, useEffect } from 'react';

const useFetchChartData = (ticker, time) => {
    const [chartData, setChartData] = useState([]);
    const [statusChart, setStatusChart] = useState(false);
        
    let range;
    let interval;

    const updateIntervalRange = time => {
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
            default:
                break;
        }
    }

    useEffect(() => {
        setChartData([]);
        setStatusChart(true);
        updateIntervalRange(time);

        const url = `https://rapidapi.p.rapidapi.com/stock/v2/get-chart?interval=${interval}&symbol=${ticker}&range=${range}&region=US`

        const headers = {
            "x-rapidapi-host": "apidojo-yahoo-finance-v1.p.rapidapi.com",
            "x-rapidapi-key": "c2e6cd2352mshc152fd4126f9197p1e9892jsne99352339c02"
        }

        fetch(url, { headers }).then((response) => {
            if (response.ok) {
                return response.json();
            } else {
              throw new Error("Couldn't find Company!");
            }
          })
          .then(json => {
            const result = json.chart.result[0];
            const returnArr = result.timestamp.map((time, i) => {
                // Time & Close
                return { time: new Date(time * 1000), price: result.indicators.quote[0].close[i] }
            });

            setStatusChart(false);
            setChartData(returnArr);
          })
          .catch((error) => {
            setStatusChart(false);
          });
    }, [ticker, time])

    return { chartData, statusChart }
}

export { useFetchChartData };