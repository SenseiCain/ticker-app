import React from 'react';

const CompanyData = ({ data }) => {

    const genData = data => {
        if(data) {
            const { open, high, mktCap, prevClose, fiftyTwoWeekHigh, fiftyTwoWeekLow, volume } = data;

            return (
                <div className="pt-4">
                    <ul className="list-unstyled">
                        <li className="pb-2">Open: {open}</li>
                        <li className="pb-2">High: {high}</li>
                        <li className="pb-2">Market Cap: {mktCap}</li>
                        <li className="pb-2">Prev Close: {prevClose}</li>
                        <li className="pb-2">52 Week High: {fiftyTwoWeekHigh}</li>
                        <li className="pb-2">52 Week Low: {fiftyTwoWeekLow}</li>
                        <li className="pb-2">Volume: {volume}</li>
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