import axios from 'axios';

const config = {
    headers: {'crossdomain': 'true'}
};

function getLessons() {
    return axios.get(process.env.REACT_APP_URL_BASE + "activities?types[]=event&types[]=learningPath&sortBy=dates&sortByType=asc&periods[]=upcoming&price=true&privacies[]=public&published=true&toPopulate[]=topics&toPopulate[]=location", config)
        .then(res => {
            return res.data;
        })
}

function getLesson(id) {
    return axios.get(process.env.REACT_APP_URL_BASE + "activities/" + id + "?toPopulate[]=subscribers&toPopulate[]=topics&toPopulate[]=location&toPopulate[]=groups&toPopulate[]=owner&toPopulate[]=mentors&toPopulate[]=contacts&toPopulate[]=steps.activities", config)
        .then(res => {
            return res.data;
        })
}

export default {
    getLessons,
    getLesson
}


