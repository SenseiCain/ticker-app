import React from 'react';

const CompanyChart = ({ handleChange, chartData }) => {
    
    return (
        <div>
            <h1>Chart</h1>
            <button onClick={() => handleChange('day')}>Day</button>
            <button onClick={() => handleChange('week')}>Week</button>
            <button onClick={() => handleChange('month')}>Month</button>
            <button onClick={() => handleChange('3month')}>3 Month</button>
            <button onClick={() => handleChange('1yr')}>Year</button>
        </div>
    )
}

export default CompanyChart;