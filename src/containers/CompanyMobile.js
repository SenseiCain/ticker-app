import React from 'react';
import { Link, Route, Switch } from "react-router-dom"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'

import CompanyChart from '../components/CompanyChart';
import CompanyData from '../components/CompanyData';
import CompanyInfo from '../components/CompanyInfo';
import CompanyTitle from '../components/CompanyTitle';
import CompanyLinks from '../components/CompanyLinks';

const CompanyMobile = ({ handleChange, data, chartData, match }) => {

    return (
        <div>
            <div className="border-bottom">
                <Link to="/">
                    <FontAwesomeIcon icon={faArrowLeft} className="text-primary"/>
                </Link>
                <div className="py-5">
                    <CompanyTitle title={data.title}/>
                </div>
                <CompanyLinks baseUrl={match.url} />
            </div>

            <Switch>
                <Route 
                    path={`${match.path}/info`}
                    render={() => <CompanyInfo info={data.info} />}/>

                <Route 
                    exact 
                    path={[`${match.path}`, `${match.path}/chart`]}
                    render={props => <CompanyChart {...props} chartData={chartData} handleChange={handleChange} />}/>

                <Route 
                    path={`${match.path}/data`}
                    render={() => <CompanyData data={data.data} />}/>
            </Switch>
        </div>
    )
}

export default CompanyMobile;