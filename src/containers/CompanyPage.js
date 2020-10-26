import React, { useState, useEffect, useContext } from 'react';
import { useParams } from "react-router-dom"

import { companyData } from "../data";
import { useMediaQuery } from '../hooks/useMediaQuery';
import { useFetchBasicInfo } from '../hooks/useFetchBasicInfo';
import { useFetchChartData } from '../hooks/useFetchChartData';

import CompanyMobile from './CompanyMobile';
import CompanyDesktop from './CompanyDesktop';

const CompanyPage = ({ match, trending }) => {
    const [range, setRange] = useState('day');
    const isDisplayed = useMediaQuery("(min-width: 768px)");
    const { ticker } = useParams();

    // DEV
    // const { chartData } = 1;
    // const data = companyData["IBM"];
    const chartData = companyData["IBM"].chart.month;

    // PRODUCTION
    const { data, redirectInfo } = useFetchBasicInfo(ticker);
    // const { chartData } = useFetchChartData(ticker, range);

    const handleChange = type => {
        setRange(type);
    }

    return (
        <div id="company-page" className="p-2 d-flex flex-column container">
            {isDisplayed ? 
                <CompanyDesktop 
                    data={data} 
                    chartData={chartData} 
                    trending={trending} 
                    redirectInfo={redirectInfo}
                    handleChange={handleChange}/>:
                <CompanyMobile 
                    data={data} 
                    chartData={chartData} 
                    match={match} 
                    redirectInfo={redirectInfo}
                    handleChange={handleChange} />
            }
        </div>
    )
}

export default CompanyPage;