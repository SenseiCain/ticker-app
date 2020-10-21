import React from 'react';

const CompanyData = ({ data }) => {

    const genData = data => {
        if(data) {
            const { open, high, mktCap, prevClose, fiftyTwoWeekHigh, fiftyTwoWeekLow, volume } = data;

            return (
                <div className="pt-4">
                    <ul className="list-unstyled">
                        <li className="pb-2">
                            Open: <span className="text-secondary">{open}</span>
                        </li>
                        <li className="pb-2">
                            High: <span className="text-secondary">{high}</span>
                        </li>
                        <li className="pb-2">
                            Market Cap: <span className="text-secondary">{mktCap}</span>
                        </li>
                        <li className="pb-2">
                            Prev Close: <span className="text-secondary">{prevClose}</span>
                        </li>
                        <li className="pb-2">
                            52 Week High: <span className="text-secondary">{fiftyTwoWeekHigh}</span>
                        </li>
                        <li className="pb-2">
                            52 Week Low: <span className="text-secondary">{fiftyTwoWeekLow}</span>
                        </li>
                        <li className="pb-2">
                            Volume: <span className="text-secondary">{volume}</span>
                        </li>
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