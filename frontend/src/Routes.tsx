import Dashbord from "pages/Dashbord";
import Home from "pages/Home";
import { BrowserRouter, Route, Switch } from "react-router-dom";


const Routes = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact>
                    <Home />
                </Route>
                <Route path="/Dashbord">
                    <Dashbord />
                </Route>
            </Switch>
        
        </BrowserRouter>
    );

}

export default Routes;