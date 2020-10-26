import React, { useState, useEffect } from 'react';

const CompanyData = ({ data, statusInfo }) => {
    const [state, setState] = useState({
        open: '',
        high: '',
        mktCap: '',
        prevClose: '',
        fiftyTwoWeekHigh: '',
        fiftyTwoWeekLow: '',
        volume: ''
    });

    useEffect(() => {
        if (data) {
            setState({
                open: data.open,
                high: data.high,
                mktCap: data.mktCap,
                prevClose: data.prevClose,
                fiftyTwoWeekHigh: data.fiftyTwoWeekHigh,
                fiftyTwoWeekLow: data.fiftyTwoWeekLow,
                volume: data.volume
            });
        } else {
            setState({
                open: '',
                high: '',
                mktCap: '',
                prevClose: '',
                fiftyTwoWeekHigh: '',
                fiftyTwoWeekLow: '',
                volume: ''
            })
        }
    }, [statusInfo, data])

    return (
        <div className="pt-4">
            <ul className="list-unstyled">
                <li className="pb-2">
                    Open: <span className="text-secondary">{state.open}</span>
                </li>
                <li className="pb-2">
                    High: <span className="text-secondary">{state.high}</span>
                </li>
                <li className="pb-2">
                    Market Cap: <span className="text-secondary">{state.mktCap}</span>
                </li>
                <li className="pb-2">
                    Prev Close: <span className="text-secondary">{state.prevClose}</span>
                </li>
                <li className="pb-2">
                    52 Week High: <span className="text-secondary">{state.fiftyTwoWeekHigh}</span>
                </li>
                <li className="pb-2">
                    52 Week Low: <span className="text-secondary">{state.fiftyTwoWeekLow}</span>
                </li>
                <li className="pb-2">
                    Volume: <span className="text-secondary">{state.volume}</span>
                </li>
            </ul>
        </div>
    )
}

export default CompanyData;