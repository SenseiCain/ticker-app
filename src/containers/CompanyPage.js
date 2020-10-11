import React, { useEffect } from 'react';
import { useParams } from "react-router-dom"
import { useFetchBasicInfo } from '../hooks/useFetchBasicInfo';

import CompanyData from '../components/CompanyData';
import CompanyInfo from '../components/CompanyInfo';

const CompanyPage = props => {
    let { ticker } = useParams();

    const { data } = useFetchBasicInfo(ticker);

    return (
        <div>
            <CompanyInfo info={data.info} />
            <CompanyData data={data.data} />
        </div>
    )
}

export default CompanyPage;