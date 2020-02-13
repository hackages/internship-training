import React from 'react';
import './App.css';
import { Home } from "./pages/home/Home";
import { Details } from "./pages/details/Details";
import { Page404 } from "./pages/page404";
import {
    BrowserRouter,
    Switch,
    Route
} from "react-router-dom";
import { Payment } from "./pages/payment/Payment";

function App() {

    return (
        <>
            <BrowserRouter>
                <Switch>
                    <Route exact path={'/'} component={Home} />
                    <Route path={'/details/:id'} component={Details} />
                    <Route path={'/payment/:id'} component={Payment} />
                    <Route path={'**'} component={Page404} />
                </Switch>
            </BrowserRouter>
        </>
    );
}


export default App;
