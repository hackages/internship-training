import React, { useEffect, useState } from "react";
import lesson from '../../core/services/lesson.service';
import Button from "@material-ui/core/Button";
import Loading from '../../shared/Loading';
import ReactMarkdown from 'react-markdown';

export const Details = (props) => {
    const [product, setProduct] = useState({});

    const id = props.match.params.id;

    function redirection() {
        return window.location =`${process.env.REACT_APP_URL_BASE_PAYMENT}?id=${id}&redirectTo=https%3A%2F%2Fdev.community.hackages.io%2Factivity%2Fevent%2F${id}`
    }

    useEffect(() => {
        lesson.getLesson(id).then(data => {
            setProduct(data);
        })
    }, [id]);

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

                <Button
                    onClick={redirection} variant="outlined" color="primary"  >
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

