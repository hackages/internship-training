import React, {useEffect} from "react";


export const Payment = (props) => {


    const pay = localStorage.getItem('payp');
    const tit = localStorage.getItem('payt');

    return (
        <div>
            <h1>{' The order is about : '} {tit} </h1>
            <h3>{pay + ' €'}</h3>
        </div>
    );
};