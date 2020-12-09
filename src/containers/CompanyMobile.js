import React from 'react';
import { Route, Switch, Redirect } from "react-router-dom"

import BackButton from '../components/BackButton';
import CompanyChart from '../components/CompanyChart';
import CompanyData from '../components/CompanyData';
import CompanyInfo from '../components/CompanyInfo';
import CompanyTitle from '../components/CompanyTitle';
import CompanyLinks from '../components/CompanyLinks';

const CompanyMobile = ({ handleChange, data, chartData, match, redirectInfo, range, statusInfo }) => {

    return (
        <div className="pt-5 px-3">
            {
                redirectInfo ?
                    <Redirect to='/' /> :
                    <>
                        <div className="border-bottom">
                            <BackButton />

                            <div className="py-5">
                                <CompanyTitle title={data.title} statusInfo={statusInfo}/>
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
                                render={props => <CompanyChart {...props} chartData={chartData} handleChange={handleChange} range={range} />}/>

                            <Route 
                                path={`${match.path}/data`}
                                render={() => <CompanyData data={data.data} />}/>
                        </Switch>
                    </>
            }
        </div>
    )
}

export default CompanyMobile;