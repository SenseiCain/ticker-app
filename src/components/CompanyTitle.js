import React from 'react';

const CompanyTitle = ({ title }) => {
    const genTitle = data => {

        if(data) {
            const { name, ticker, delta } = data;

            const updateDetla = delta => {
                if (delta > 0) {
                    return (<span className="text-success">{delta}</span>)
                } else {
                    return (<span className="text-danger">{delta}</span>)
                }
            }

            return (
                <div className="d-flex align-items-center flex-column">
                    <h3 className="pt-0 pb-1 m-0">{ticker}</h3>
                    <h6 className="pt-0 pb-1 m-0 text-secondary text-center">{name}</h6>
                    <h6 className="pt-0 pb-1 m-0">
                        {updateDetla(delta)}
                    </h6>
                </div>
            )
        } else {
            return (
                <div className="text-center py-4">
                    <div className="spinner-border" role="status">
                        <span className="sr-only">Loading...</span>
                    </div>
                </div>
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