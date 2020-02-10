import React, {useEffect} from "react";
import fakeData from '../../fakeData';
import {Link} from "react-router-dom";

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

            <button>
                <Link to={{
                pathname: `/payment/`,
                props: {
                    price: props.price,
                    title: props.title
                }}}> Buy  </Link>
            </button>

        </>
    );
};