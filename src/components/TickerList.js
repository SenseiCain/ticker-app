import React, { useState, useEffect } from 'react';

const TickerList = props => {
    const [list, setList] = useState(['AAPL', 'MSFT', 'AMZN']);
    const [data, setData] = useState([])

    useEffect(() => {
        // console.log('mounted')
    })

    return(
        <div></div>
    )
}

export default TickerList;