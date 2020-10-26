import React from 'react';
import { Line } from 'react-chartjs-2';

import ChartRanges from './ChartRanges';

const CompanyChart = ({ handleChange, chartData, range }) => {
    const labels = chartData.map(el => new Date(el.time));
    const prices = chartData.map(el => parseFloat(el.price.toFixed(2)));

    const data = {
        labels,
        datasets: [{
            fill: false,
            lineTension: 0,
            pointRadius: 0,
            data: prices,
            pointBorderColor: "#007bff",
            pointBackgroundColor: "#007bff",
            borderColor: "#007bff"
        }]
    }

    const options = {
        maintainAspectRatio: true,
        responsive: true,
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
                        switch (range) {
                            case 'day':
                                if (index % 3 !== 0) {
                                    return null;
                                } else {
                                    return `${value.getHours()}:00`;
                                }
                                break;
                            case 'week':
                                return value.toString().split(' ')[0];
                                break;
                            case 'month':
                                if (index % 5 !== 0) {
                                    return null;
                                } else {
                                    return `${value.getDate()}/${value.getMonth()}`;
                                }
                                break;
                            case '3month':
                                if (index % 2 !== 0) {
                                    return null;
                                } else {
                                    return `${value.getDate()}/${value.getMonth()}`;
                                }
                                break;
                            case '1yr':
                                if (index % 4 !== 0) {
                                    return null;
                                } else {
                                    return `${value.toString().split(' ')[1]}/${value.getFullYear().toString().slice(-2)}`
                                }
                            default: 
                                break;
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
        <div id="company-chart" className="">
            <Line data={data} options={options}/>
            <ChartRanges handleChange={handleChange}/>
        </div>
    )
}

export default CompanyChart;