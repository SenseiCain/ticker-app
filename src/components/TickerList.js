import React from 'react';
import { Link } from 'react-router-dom';
import LoadingSpinner from './LoadingSpinner';

const TickerList = ({ title, tickers, status = false }) => {

    const generateCards = (tickers) => {
        const items = tickers.map((el, i) => {
            const updateDetla = delta => {
                if (delta > 0) {
                    return (<span className="text-success">{delta}</span>)
                } else {
                    return (<span className="text-danger">{delta}</span>)
                }
            }

            return (
                <li key={i} className="list-group-item d-flex justify-content-between">
                    <Link to={`/${el.ticker}`}>{el.ticker}</Link>
                    <div>
                        {el.price} ({updateDetla(el.delta)})
                    </div>
                </li>
            )
        });

        return (
            <ul className="list-group">
                {items}
            </ul>
        )
    }

    return(
        <div className="pb-3">
            <h3>{title}</h3>
            {status ? <LoadingSpinner /> : generateCards(tickers)}
        </div>
    )
}

export default TickerList;