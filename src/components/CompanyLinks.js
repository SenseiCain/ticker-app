import React from 'react';
import { Link } from "react-router-dom"

const CompanyLinks = ({ baseUrl }) => {
    return (
        <div>
            <Link to={`${baseUrl}/info`}>Info</Link>
            <Link to={`${baseUrl}/chart`}>Chart</Link>
            <Link to={`${baseUrl}/data`}>Data</Link>
        </div>
    )
}

export default CompanyLinks;