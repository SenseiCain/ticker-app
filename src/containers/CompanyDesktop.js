import React from 'react';
import { Redirect } from 'react-router-dom'

import BackButton from '../components/BackButton';
import CompanyChart from '../components/CompanyChart';
import CompanyTitle from '../components/CompanyTitle';
import CompanyData from '../components/CompanyData';
import CompanyInfo from '../components/CompanyInfo';
import TickerList from '../components/TickerList';

const CompanyDesktop = ({ data, chartData, handleChange, trending, redirectInfo, statusInfo, range }) => {
    return (
        <div>
            {
                redirectInfo ? 
                    <Redirect to='/' /> :
                    <>
                        <div className="py-4">
                            <BackButton />
                        </div>
                        <div className="row px-0">
                            <div className="col-xl-9">
                                <div className="row border py-3 mx-0">
                                    <div className="col-9 d-flex align-items-end">
                                        <CompanyChart chartData={chartData} handleChange={handleChange} range={range} />
                                    </div>
                                    <div className="col-3 border-left">
                                        <CompanyTitle title={data.title} statusInfo={statusInfo}/>
                                        <div className="d-none d-lg-block">
                                            <CompanyData data={data.data} statusInfo={statusInfo}/>
                                        </div>
                                    </div>
                                </div>
                                <CompanyInfo info={data.info} statusInfo={statusInfo}/>
                            </div>
                            <div className="col-3 pl-5 d-none d-xl-block">
                                <TickerList title="Trending" tickers={trending} />
                            </div>
                        </div>
                    </>
            }
        </div>
    )
}

export default CompanyDesktop;