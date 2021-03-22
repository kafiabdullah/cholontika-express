import React, {useState} from 'react';

const ThemeContext = React.createContext(null);

const ThemeProvider = (props) => {
    return (
        <ThemeContext.Provider value={{}}>
            {props.children}
        </ThemeContext.Provider>
    )
};

export default ThemeProvider;
export {ThemeContext};