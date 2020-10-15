import React, { useState } from 'react';
import { useParams, Link, Route } from "react-router-dom"
import { useFetchBasicInfo } from '../hooks/useFetchBasicInfo';
import { useFetchChartData } from '../hooks/useFetchChartData';

import CompanyChart from '../components/CompanyChart';
import CompanyData from '../components/CompanyData';
import CompanyInfo from '../components/CompanyInfo';
import CompanyTitle from '../components/CompanyTitle';

const CompanyPage = ({ match }) => {
    const [range, setRange] = useState('day');

    const { ticker } = useParams();
    const { data } = useFetchBasicInfo(ticker);
    const { chartData } = useFetchChartData(ticker);

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

            <Route 
                exact 
                path={[`${match.path}`, `${match.path}/chart`]}
                render={props => <CompanyChart {...props} />}/>

            <Route path={`${match.path}/data`}>
                <CompanyData data={data.data} />
            </Route>
        </div>
    )
}

export default CompanyPage;