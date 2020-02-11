import React from 'react';
import './App.css';
import { Home } from "./pages/home/Home";
import { Details } from "./pages/details/Details";
import { Page404 } from "./pages/page404";
import { SimpleSnackbar } from "./shared/Snackbar";
import {
    BrowserRouter,
    Switch,
    Route
} from "react-router-dom";
import { Payment } from "./pages/payment/Payment";

export const SnackbarContext = React.createContext({});

function App() {
    
    return (
        <>
            <SnackbarContext.Provider value={{"show": false, "text": ""}}>
                <BrowserRouter>
                    <Switch>
                        <Route exact path={'/'} component={Home} />
                        <Route path={'/details/:id'} component={Details} />
                        <Route path={'/payment'} component={Payment} />
                        <Route path={'**'} component={Page404} />
                    </Switch>
                </BrowserRouter>
                <SimpleSnackbar></SimpleSnackbar>
            </SnackbarContext.Provider>
        </>
    );
}


export default App;
