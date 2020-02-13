import React, { useEffect, useState } from "react";
import lesson from '../../core/services/lesson.service';
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";
import Loading from '../../shared/Loading';
import ReactMarkdown from 'react-markdown';

export const Details = (props) => {
    const [product, setProduct] = useState({});

    const id = props.match.params.id;

    useEffect(() => {
        lesson.getLesson(id).then(data => {
            setProduct(data);
        })
    }, [id])

    if (product && product.activity) {

        const days = product.activity.dates.map(
            (date, index) => {
                if (index === 0) {
                    return "From " + date + " ";
                } else if (index === product.activity.dates.length - 1) {
                    return "to " + date;
                }

                return "";

            });

        return (
            <div>
                <h1>Details</h1>
                <p>Title : {product.activity.title}</p>
                <p>Date : {product.activity.dates[0]}</p>
                <p>days : {product.activity.dates.length}</p>
                <p>{days}</p>
                <p>Price : {(product.activity.price / 100) + ' €'} / day </p>
                <p>Language : {product.activity.topics[0].name}</p>

                <section>
                    <h2> Description </h2>
                    <ReactMarkdown source={product.activity.description} />
                </section>

                <Button variant="outlined" color="primary"  >
                    <Link to={`/payment/${id}`}> Buy </Link>
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