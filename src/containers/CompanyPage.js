import React, { useEffect } from 'react';
import { useParams, Link } from "react-router-dom"
import { useFetchBasicInfo } from '../hooks/useFetchBasicInfo';

import CompanyData from '../components/CompanyData';
import CompanyInfo from '../components/CompanyInfo';
import CompanyTitle from '../components/CompanyTitle';

const CompanyPage = props => {
    let { ticker } = useParams();

    const { data } = useFetchBasicInfo(ticker);

    return (
        <div>
            <Link to="/">Back</Link>
            <CompanyTitle title={data.title}/>
            <CompanyInfo info={data.info} />
            <CompanyData data={data.data} />
        </div>
    )
}

export default CompanyPage;