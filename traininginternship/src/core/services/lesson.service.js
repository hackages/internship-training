import React from "react";
import axios from 'axios';


const baseURL = `http://localhost:3001/`;


function getLessons() {
    return axios.get(baseURL + `lesson`)
        .then(res => {
            return res.data;
        })
}

function getLesson(id) {
    return axios.get(baseURL + `lesson/` + id)
        .then(res => {
            return res.data;
        })
}

export default {
    getLessons,
    getLesson
}


