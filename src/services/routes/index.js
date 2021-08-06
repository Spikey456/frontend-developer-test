import React from "react";
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";
import Devices from "../../modules/pages/Devices";
import Login from "../../modules/pages/Login";
import { useSelector } from 'react-redux';
import { LoadingOverlay } from "../../modules/components/LoadingOverlay";

const Routes = () => {

    const state = useSelector(state => state.dataReducer)

 

    
    return(
        <Router>
            {state.loading && (
                <LoadingOverlay />
            )}
            <Switch>
                <Route exact path='/' component={Login}/>
                <Route exact path='/devices' component={Devices}/>
            </Switch>
        </Router>
    )
   
}


export default Routes;