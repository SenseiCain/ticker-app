import React, { useState, useEffect } from 'react';

const CompanyInfo= ({ info }) => {
    const [state, setState] = useState({
         hq: '',
         indsutry: '',
         ceo: '',
         fte: '',
         website: '',
         description: ''
         });

    useEffect(() => {
        if(info){
            setState({ 
                hq: info.hq,
                industry: info.industry,
                ceo: info.ceo,
                fte: info.fte,
                website: info.website,
                description: info.description
            })
        }
    }, [info])


    return (
        <div>
            <div className="pt-4">
                    <ul className="list-unstyled">
                        <li className="pb-2">
                            HQ: <span className="text-secondary">{state.hq}</span>
                        </li>
                        <li className="pb-2">
                            Industry: <span className="text-secondary">{state.industry}</span>
                        </li>
                        <li className="pb-2">
                            CEO: <span className="text-secondary">{state.ceo}</span>
                        </li>
                        <li className="pb-2">
                            FTE: <span className="text-secondary">{state.fte}</span>
                        </li>
                        <li className="pb-2">
                            Website: <a href={state.website} target="_blank">{state.website}</a>
                        </li>
                        <li className="crop-text">
                            Description: <span className="text-secondary">{state.description}</span>
                        </li>
                    </ul>
                </div>
        </div>
    )
}

export default CompanyInfo;