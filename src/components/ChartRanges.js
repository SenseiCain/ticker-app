import React from 'react';

const ChartRanges = ({ handleChange }) => {
    return (
        <div>
            <button onClick={() => handleChange('day')}>Day</button>
            <button onClick={() => handleChange('week')}>Week</button>
            <button onClick={() => handleChange('month')}>Month</button>
            <button onClick={() => handleChange('3month')}>3 Month</button>
            <button onClick={() => handleChange('1yr')}>Year</button>
        </div>
    )
}

export default ChartRanges;