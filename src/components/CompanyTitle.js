import React from 'react';
import LoadingSpinner from './LoadingSpinner';

const CompanyTitle = ({ title, statusInfo }) => {
    const genTitle = data => {
        if(data){
            const { name, ticker, delta } = data;

            const updateDetla = delta => {
                const deltaIntValue = delta.toString().replace('%', '');
                
                if (deltaIntValue > 0) {
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
        }
    }

    return (
        <div>
            {statusInfo ? <LoadingSpinner /> : genTitle(title)}
        </div>
    )
}

export default CompanyTitle;