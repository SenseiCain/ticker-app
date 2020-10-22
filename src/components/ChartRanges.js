import React from 'react';

const ChartRanges = ({ handleChange }) => {
    return (
        <div className="d-flex justify-content-around">
            <button type="button" class="btn btn-outline-primary btn-sm" onClick={() => handleChange('day')}>Day</button>
            <button type="button" class="btn btn-outline-primary btn-sm" onClick={() => handleChange('week')}>Week</button>
            <button type="button" class="btn btn-outline-primary btn-sm" onClick={() => handleChange('month')}>Month</button>
            <button type="button" class="btn btn-outline-primary btn-sm" onClick={() => handleChange('3month')}>3 Month</button>
            <button type="button" class="btn btn-outline-primary btn-sm" onClick={() => handleChange('1yr')}>Year</button>
        </div>
    )
}

export default ChartRanges;