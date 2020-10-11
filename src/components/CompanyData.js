import React from 'react';
import CompanyPage from '../containers/CompanyPage';

const CompanyData = ({ data }) => {

    const genData = data => {
        if(data) {
            const { open, high, mktCap, prevClose, fiftyTwoWeekHigh, fiftyTwoWeekLow, volume } = data;
            
            return (
                <div>
                    <h1>Data</h1>
                    <ul>
                        <li>Open: {open}</li>
                        <li>High: {high}</li>
                        <li>Market Cap: {mktCap}</li>
                        <li>Prev Close: {prevClose}</li>
                        <li>52 Week High: {fiftyTwoWeekHigh}</li>
                        <li>52 Week Low: {fiftyTwoWeekLow}</li>
                        <li>Volume: {volume}</li>
                    </ul>
                </div>
            )
        } else {
            return 'loading...'
        }
    }

    return (
        <div>
            {genData(data)}
        </div>
    )
}

export default CompanyData;