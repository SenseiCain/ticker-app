import React from 'react';

import CompanyChart from '../components/CompanyChart';
import CompanyTitle from '../components/CompanyTitle';
import CompanyData from '../components/CompanyData';
import CompanyInfo from '../components/CompanyInfo';
import TickerList from '../components/TickerList';

const CompanyDesktop = ({ data, chartData, handleChange, trending }) => {
    return (
        <div className="row">
            <div className="col-xl-9">
                <div className="row border p-3">
                    <div className="col-9 d-flex align-items-end">
                        <CompanyChart chartData={chartData} handleChange={handleChange} />
                    </div>
                    <div className="col-3 border-left">
                        <CompanyTitle title={data.title} />
                        <div className="d-none d-lg-block">
                            <CompanyData data={data.data} />
                        </div>
                    </div>
                </div>
                <CompanyInfo info={data.info} />
            </div>
            <div className="col-2 pl-3 d-none d-xl-block">
                <TickerList title="Trending" tickers={trending} />
            </div>
        </div>
    )
}

export default CompanyDesktop;