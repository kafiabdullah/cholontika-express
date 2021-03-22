import React, {useContext, useState} from 'react';
import ThemeProvider from '../../context/ThemeContext';
import {AuthContext} from '../../context/AuthContext';
import RootContainer from '../Layout/RootContainer';
import {useParams} from 'react-router';
import Destination from '../Destination/Destination';
import searchCost from '../../services/searchCost';

const Dashboard = () => {
    const [transports, setTransports] = useState([]);

    const {destName} = useParams();
    const context = useContext(AuthContext);
    const currentUserId = context.currentUser.uid;

    const submitSearch = async (event) => {
        event.preventDefault();

        const pickForm = event.target.elements.pickForm.value;
        const pickTo = event.target.elements.pickTo.value;

        const data = await searchCost();
        let transports = data['transports'];

        transports = transports.filter(transport => transport.name === destName);

        setTransports(transports);
    }

    return (
        <RootContainer>
            <ThemeProvider>
                <div className="container">
                    <div className="App row">
                        <Destination submitSearch={submitSearch} transports={transports} destName={destName}/>
                    </div>
                </div>
            </ThemeProvider>
        </RootContainer>
    );
}

export default Dashboard;