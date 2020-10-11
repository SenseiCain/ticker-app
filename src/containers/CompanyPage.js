import React, { useEffect } from 'react';
import { useParams } from "react-router-dom"

import { useFetchBasicInfo } from '../hooks/useFetchBasicInfo';

const CompanyPage = props => {
    let { ticker } = useParams();

    const { data } = useFetchBasicInfo(ticker);

    return (
        <div>
            
        </div>
    )
}

export default CompanyPage;