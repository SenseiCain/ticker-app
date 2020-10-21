import React, { useState } from 'react';

const QueryContext = React.createContext(['', () => {}]);

const QueryProvider = props => {
    const [state, setState] = useState('');

    return (
        <QueryContext.Provider value={[state, setState]}>
            {props.children}
        </QueryContext.Provider>
    )
}

export { QueryContext, QueryProvider };