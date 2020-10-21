import React from 'react';

const CompanyInfo= ({ info }) => {

    const genInfo = data => {
        if(data) {

            const { hq, ceo, industry, website, description, fte } = data;

            return (
                <div className="pt-4">
                    <ul className="list-unstyled">
                        <li className="pb-2">
                            HQ: <span className="text-secondary">{hq}</span>
                        </li>
                        <li className="pb-2">
                            Industry: <span className="text-secondary">{industry}</span>
                        </li>
                        <li className="pb-2">
                            CEO: <span className="text-secondary">{ceo}</span>
                        </li>
                        <li className="pb-2">
                            FTE: <span className="text-secondary">{fte}</span>
                        </li>
                        <li className="pb-2">
                            Website: <a href={website} target="_blank">{website}</a>
                        </li>
                        <li className="crop-text">
                            Description: <span className="text-secondary">{description}</span>
                        </li>
                        
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