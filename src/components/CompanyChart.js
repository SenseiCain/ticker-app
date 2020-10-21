import React from 'react';
import { Line } from 'react-chartjs-2';

import ChartRanges from './ChartRanges';

const CompanyChart = ({ handleChange, chartData }) => {
    const labels = chartData.map(el => new Date(el.time));
    const prices = chartData.map(el => parseFloat(el.price.toFixed(2)));

    const data = {
        labels,
        datasets: [{
            fill: false,
            lineTension: 0,
            data: prices
        }]
    }

    const options = {
        maintainAspectRatio: false,
        responsive: false,
        legend: { display: false },
        scales: {
            xAxes: [{
                gridLines: {
                    display: false,
                    drawBorder: false
                },
                ticks: {
                    // Reduces number of ticks & formats date
                    callback: function(value, index, values) {
                        if (index % 3 !== 0) {
                            return null;
                        } else {
                            // TODO - Dif labeling depending on range
                            return `${value.getHours()}:${value.getMinutes()}`;
                        }
                    }
                }
            }],
            yAxes: [{
                gridLines: {
                    display: false,
                    drawBorder: false
                }
            }]
        }
    }

    return (
        <div>
            <h1>Chart</h1>
            <Line data={data} options={options} width={300} height={300} />
            <ChartRanges handleChange={handleChange}/>
        </div>
    )
}

export default CompanyChart;