import React from 'react';

const CompanyTitle = ({ title }) => {
    const genTitle = data => {

        if(data) {
            const { name, ticker, delta } = data;

            return (
                <div>
                    <h1>{name}</h1>
                    <h3>{ticker}</h3>
                    <h3>{delta}</h3>
                </div>
            )
        } else {
            return (
                'loading...'
            )
        }
    }

    return (
        <div>
            {genTitle(title)}
        </div>
    )
}

export default CompanyTitle;