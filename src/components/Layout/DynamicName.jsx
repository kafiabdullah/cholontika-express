import React, {useContext} from 'react';
import {AuthContext} from '../../context/AuthContext';

const DynamicName = () => {
    const {currentUser} = useContext(AuthContext);


    console.log(currentUser.displayName);

    return <h2>Null</h2>
};

export default DynamicName;