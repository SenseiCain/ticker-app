import React, { useState, useEffect } from 'react';
import { useParams } from "react-router-dom"

const CompanyPage = props => {
    let { ticker } = useParams();
    console.log(ticker)

    return (
        <div>
            
        </div>
    )
}

export default CompanyPage;