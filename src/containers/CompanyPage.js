import React, { useEffect } from 'react';
import { useParams } from "react-router-dom"
import { useFetchBasicInfo } from '../hooks/useFetchBasicInfo';

import CompanyData from '../components/CompanyData';

const CompanyPage = props => {
    let { ticker } = useParams();

    const { data } = useFetchBasicInfo(ticker);

    return (
        <div>
            <CompanyData data={data.data} />
        </div>
    )
}

export default CompanyPage;