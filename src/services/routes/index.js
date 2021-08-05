import { Route, Switch, BrowserRouter as Router } from "react-router-dom";
import Devices from "../../modules/pages/Devices";
import Login from "../../modules/pages/Login";


const Routes = (props) =>  
    <Router>
        <Switch>
            <Route exact path='/' component={Login} props={props}/>
            <Route exact path='/devices' component={Devices} props={props}/>
        </Switch>
    </Router>


export default Routes