import React, { useEffect } from "react";
import fakeData from '../../fakeData.json';
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";

export const lessons = () => {

    useEffect(() => {
        const response = await fetch(url, {
            method: 'POST', // *GET, POST, PUT, DELETE, etc.
            // mode: 'cors', // no-cors, *cors, same-origin
            // cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
            // credentials: 'same-origin', // include, *same-origin, omit
            headers: {
                'Content-Type': 'application/json'
                // 'Content-Type': 'application/x-www-form-urlencoded',
            },
            // redirect: 'follow', // manual, *follow, error
            // referrerPolicy: 'no-referrer', // no-referrer, *client
            body: JSON.stringify({text: "Coucou toi ! Tu sais que du a de beaux yeux ?"}) // body data type must match "Content-Type" header
        });
        return await response.json();
    }, [])

}