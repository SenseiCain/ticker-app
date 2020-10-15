import React from 'react';
import { Link } from 'react-router-dom';

const TickerList = ({ title, tickers }) => {

    const generateCards = () => {
        return tickers.map((el, i) => {
            return (
                <div key={i}>
                    <ul>
                        <li>{el.name}</li>
                        <li>
                            <Link to={`/${el.ticker}`}>{el.ticker}</Link>
                        </li>
                        <li>{el.price}</li>
                        <li>{el.delta}</li>
                    </ul>
                </div>
            )
        })   
    }

    return(
        <div>
            <h1>{title}</h1>
            {generateCards()}
        </div>
    )
}

export default TickerList;