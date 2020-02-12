import React from "react";
import axios from 'axios';


const baseURL = `https://plateform-h-api-dev.now.sh/`;


function getLessons() {
    return axios.get(baseURL + "activities?types[]=event&types[]=learningPath&sortBy=dates&sortByType=asc&periods[]=upcoming&price=true&privacies[]=public&published=true&toPopulate[]=topics&toPopulate[]=location")
        .then(res => {
            return res.data;
        })
}

function getLesson(id) {
    console.log(id);
    return axios.get(baseURL + "activities/" + id + "?toPopulate[]=subscribers&toPopulate[]=topics&toPopulate[]=location&toPopulate[]=groups&toPopulate[]=owner&toPopulate[]=mentors&toPopulate[]=contacts&toPopulate[]=steps.activities")
        .then(res => {
            return res.data;
        })
}

export default {
    getLessons,
    getLesson
}


