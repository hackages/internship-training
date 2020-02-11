import React from "react";
import fakeData from '../../fakeData.json';
import {Link} from "react-router-dom";
import Button from "@material-ui/core/Button";

export const Details = (props) => {

    const id = props.match.params.id;

    let product = fakeData.find(
        (product) => product.id === Number(id)
    );

    localStorage.setItem('product', JSON.stringify({ "price": product.price, "title": product.title }));

    return (
        <div>
            <h1>Details</h1>
            <p>Title : {product.title}</p>
            <p>Date : {product.date}</p>
            <p>days : {product.days}</p>
            <p>Price : {product.price + ' €'} / day </p>
            <p>Language : {product.language}</p>

            <section>
                <h2> Description </h2>
                <p>
                    {product.description}
                </p>
            </section>

            <Button variant="outlined" color="primary"  >
                <Link to={{
                    pathname: `/payment`

                }}> Buy </Link>
            </Button>

        </div>
    );
};