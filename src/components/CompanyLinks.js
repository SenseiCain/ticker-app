import React from 'react';
import { Link } from "react-router-dom"

const CompanyLinks = ({ baseUrl }) => {
    return (
        <div className="d-flex justify-content-around pb-2">
            <Link to={`${baseUrl}/info`}>Info</Link>
            <Link to={`${baseUrl}/chart`}>Chart</Link>
            <Link to={`${baseUrl}/data`}>Data</Link>
        </div>
    )
}

export default CompanyLinks;