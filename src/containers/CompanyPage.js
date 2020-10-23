import React, { useState } from 'react';
import { useParams } from "react-router-dom"
import { useFetchBasicInfo } from '../hooks/useFetchBasicInfo';
import { useFetchChartData } from '../hooks/useFetchChartData';

import CompanyMobile from './CompanyMobile';

import { companyData } from "../data";

const CompanyPage = ({ match }) => {
    const [range, setRange] = useState('day');
    const { ticker } = useParams();

    // DEV
    // const { chartData } = 1;
    const data = companyData["IBM"];
    const chartData = companyData["IBM"].chart.month;

    // PRODUCTION
    // const { data } = useFetchBasicInfo(ticker);
    // const { chartData } = useFetchChartData(ticker, range);

    const handleChange = type => {
        setRange(type);
    }

    return (
        <div id="company-page" className="p-2 d-flex flex-column container">
            <CompanyMobile data={data} chartData={chartData} match={match} />
        </div>
    )
}

export default CompanyPage;