import React, {useEffect} from "react";
import fakeData from '../../fakeData';
import {Link} from "react-router-dom";

export const Details = (props) => {

    const id = props.match.params.id;

    let product = fakeData.find(
        (product) => product.id === Number(id)
    );


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

            <button>
                <Link to={{
                    pathname: `/payment`,
                    product: {
                        price: product.price, // to recup in the payment component
                        title: product.title // to recup in the payment component
                    }
                }}> Buy </Link>
            </button>

        </div>
    );
};