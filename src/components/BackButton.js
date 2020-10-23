import React from 'react';
import { Link } from "react-router-dom"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'

const BackButton = () => {
    return (
        <Link to="/">
            <FontAwesomeIcon icon={faArrowLeft} className="text-primary"/>
        </Link>
    )
}

export default BackButton;