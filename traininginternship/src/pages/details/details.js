import React, {useEffect} from "react";
import fakeData from '../../fakeData';

export const Details = (props) => {

    return (
        <>
            <h1>Details</h1>
            Title : {props.title}
            Date : {props.date}
            days : {props.days}
            Price : {props.price} / days
            Language : {props.language}

            <section>
                <h2> Description </h2>
                <p>
                    {props.description}
                </p>
            </section>

            <button> Pay </button>

        </>
    );
};