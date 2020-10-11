import React from 'react';

const CompanyInfo= ({ info }) => {

    const genInfo = data => {
        if(data) {

            const { hq, ceo, industry, website, description, fte } = data;

            return (
                <div>
                    <h1>Info</h1>
                    <ul>
                        <li>HQ: {hq}</li>
                        <li>Industry: {industry}</li>
                        <li>CEO: {ceo}</li>
                        <li>FTE: {fte}</li>
                        <li>Description: {description}</li>
                        <li>Website: <a href={website} target="_blank">{website}</a></li>
                    </ul>
                </div>
            )
        } else {
            return 'loading...'
        }
    }

    return (
        <div>
            {genInfo(info)}
        </div>
    )
}

export default CompanyInfo;