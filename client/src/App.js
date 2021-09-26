import React from 'react';
import { Switch, Route} from "react-router-dom";
import './App.css';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import NotFound from './components/NotFound/NotFound';
import Homepage from './components/Homepage/Homepage';


const App = () => {


    return (
        <>
            <Switch>
                <Route exact path="/" component={Login} />
                <Route path="/signup" component={Register} />
                <Route path="/home" component={Homepage} />
                <Route component={NotFound} />
            </Switch>
        </>
    )
} 
export default App;
