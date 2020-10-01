import React, { useState } from 'react';

const QueryContext = React.createContext(['', () => {}]);

const QueryProvider = props => {
    const [state, setState] = useState('');

    // <MusicPlayerContext.Provider value={[state, setState]}>
    //   {props.children}
    // </MusicPlayerContext.Provider>

    return (
        <QueryContext.Provider value={[state, setState]}>
            {props.children}
        </QueryContext.Provider>
    )
}

export { QueryContext, QueryProvider };