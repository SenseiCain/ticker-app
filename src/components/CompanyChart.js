import React from 'react';

const CompanyChart = ({ chartData, match: { params: { ticker } } }) => {
    console.log(chartData);

    return (
        <div>Chart</div>
    )
}

export default CompanyChart;