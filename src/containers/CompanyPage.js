import React, { useEffect } from 'react';
import { useParams, Link, Route } from "react-router-dom"
import { useFetchBasicInfo } from '../hooks/useFetchBasicInfo';

import CompanyChart from '../components/CompanyChart';
import CompanyData from '../components/CompanyData';
import CompanyInfo from '../components/CompanyInfo';
import CompanyTitle from '../components/CompanyTitle';

const CompanyPage = ({ match }) => {
    let { ticker } = useParams();

    const { data } = useFetchBasicInfo(ticker);

    return (
        <div>
            <Link to="/">Back</Link>
            <CompanyTitle title={data.title}/>

            <Link to={`${match.url}/info`}>Info</Link>
            <Link to={`${match.url}/chart`}>Chart</Link>
            <Link to={`${match.url}/data`}>Data</Link>

            <Route path={`${match.path}/info`}>
                <CompanyInfo info={data.info} />
            </Route>

            <Route exact path={[`${match.path}`, `${match.path}/chart`]}>
                <CompanyChart />
            </Route>

            <Route path={`${match.path}/data`}>
                <CompanyData data={data.data} />
            </Route>
        </div>
    )
}

export default CompanyPage;