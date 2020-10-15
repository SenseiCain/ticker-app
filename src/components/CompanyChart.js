import React from 'react';

const CompanyChart = ({ match: { params: { ticker } } }) => {
    console.log(ticker);

    return (
        <div>Chart</div>
    )
}

export default CompanyChart;