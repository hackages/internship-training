import React, { useEffect, useState } from "react";
import lesson from '../../core/services/lesson.service';
import {Link} from "react-router-dom";
import Button from "@material-ui/core/Button";

export const Details = (props) => {
    const [product, setProduct] = useState({});

    const id = props.match.params.id;

    useEffect(() => {
        lesson.getLesson(id).then(data => {
            setProduct(data);
        })
    }, [id])

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
                <Link to={`/payment/${id}`}> Buy </Link>
            </Button>

        </div>
    );
};