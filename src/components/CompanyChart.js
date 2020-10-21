import React from 'react';
import { Line } from 'react-chartjs-2';

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
            <button onClick={() => handleChange('day')}>Day</button>
            <button onClick={() => handleChange('week')}>Week</button>
            <button onClick={() => handleChange('month')}>Month</button>
            <button onClick={() => handleChange('3month')}>3 Month</button>
            <button onClick={() => handleChange('1yr')}>Year</button>
        </div>
    )
}

export default CompanyChart;