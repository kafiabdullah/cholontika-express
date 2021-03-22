import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Dashboard from './components/Dashboard/Dashboard';
import SignIn from './components/SignIn/SignIn';
import SignUp from './components/Signup/Signup';
import {AuthProvider} from './context/AuthContext';
import PrivateRoute from './route/PrivateRoute';
import Home from './components/Home/Home';

function App() {
    return (
        <AuthProvider>
            <Router>
                <div>
                    <Route exact path="/" component={Home}/>
                    <PrivateRoute exact path="/destination/:destName" component={Dashboard}/>
                    <Route exact path="/signin" component={SignIn}/>
                    <Route exact path="/signup" component={SignUp}/>
                </div>
            </Router>
        </AuthProvider>
    );
}

export default App;