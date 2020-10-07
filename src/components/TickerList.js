import React from 'react';

const TickerList = ({ tickers }) => {

    const generateCards = () => {
        return tickers.map((el, i) => {
            return (
                <div key={i}>
                    <ul>
                        <li>{el.name}</li>
                        <li>{el.ticker}</li>
                        <li>{el.price}</li>
                        <li>{el.delta}</li>
                    </ul>
                </div>
            )
        })   
    }

    return(
        <div>
            {generateCards()}
        </div>
    )
}

export default TickerList;