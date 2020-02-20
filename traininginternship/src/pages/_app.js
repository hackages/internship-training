import React from 'react';
import {StoreProvider} from "../core/redux/store";

function MyApp({ Component, pageProps }) {
    return <StoreProvider><Component {...pageProps} /></StoreProvider>
}


export default MyApp