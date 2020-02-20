import React from 'react';
import './App.css';
import { Home } from "./pages/Home";
import { Details } from "./pages/Details";
import { Page404 } from "./pages/page404";
import {
    BrowserRouter,
    Switch,
    Route
} from "react-router-dom";
import { StoreProvider } from "./core/redux/store";

function App() {

    return (
        <>
            <StoreProvider>
                <BrowserRouter>
                    <Switch>
                        <Route exact path={'/'} component={Home} />
                        <Route path={'/details/:id'} component={Details} />
                        <Route path={'**'} component={Page404} />
                    </Switch>
                </BrowserRouter>
            </StoreProvider>

        </>
    );
}


export default App;
