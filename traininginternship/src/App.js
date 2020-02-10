import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Home} from "./pages/home/Home";
import {Details} from "./pages/details/Details";

import {
    BrowserRouter,
    Switch,
    Route,
    Link
} from "react-router-dom";
import {Payment} from "./pages/payment/Payment";

function App() {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path={'/'} component={Home}/>
                <Route path={'/details/:id'} component={Details}/>
                <Route path={'/payment'} component={Payment}/>
            </Switch>
        </BrowserRouter>
    );
}
/**const Aboutid = (props) => {
    const id = props.match.params.id;
    return (
        <div>
            <h3>{id}</h3>
        </div>
    );
}; **/



export default App;
