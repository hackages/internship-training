import React, {useEffect} from "react";
import Button from "@material-ui/core/Button";
import Loading from '../../shared/Loading';
import ReactMarkdown from 'react-markdown';
import fakeData from '../../fakeData.json';
import {Store} from "../../core/redux/store";

const getLessonById = (id) => new Promise(res => {
    setTimeout(() => {
        res(fakeData.find(d => d.id === id))
    }, 1000)
});

export const Details = (props) => {

    const {state, dispatch} = React.useContext(Store);

    const id = Number.parseInt(props.match.params.id);
    let training = undefined;

    function redirection() {
        return window.location = `${process.env.REACT_APP_URL_BASE_PAYMENT}?id=${id}&redirectTo=https%3A%2F%2Fdev.community.hackages.io%2Factivity%2Fevent%2F${id}`
    }

    useEffect(() => {
        getLessonById(id).then(
            (data) => {
                training = data;
                dispatch({type: "ADD_TRAINING", payload: training})
            }
        );

    }, [id, training]);

    const trainings = state.trainings;
    training = trainings.find(t => t.id === id);

    if (training) {

        const days = training.dates.map(
            (date, index) => {
                if (index === 0) {
                    return "From " + date + " ";
                } else if (index === training.dates.length - 1) {
                    return "to " + date;
                }

                return "";

            });

        return (
            <div>
                <h1>Details</h1>
                <p>Title : {training.title}</p>
                <p>Date : {training.dates[0]}</p>
                <p>days : {training.dates.length}</p>
                <p>{days}</p>
                <p>Price : {(training.price) + ' €'} / day </p>
                <p>Language : {training.topics[0].name}</p>

                <section>
                    <h2> Description </h2>
                    <ReactMarkdown source={training.activity.description}/>
                </section>

                <Button
                    onClick={redirection} variant="outlined" color="primary">
                    Buy your training
                </Button>


            </div>
        );
    } else {
        return (
            <>
                <Loading></Loading>
            </>
        )
    }
};

