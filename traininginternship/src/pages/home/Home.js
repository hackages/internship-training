import React, { useState, useEffect } from "react";
import lesson from '../../core/services/lesson.service';
import { Link } from "react-router-dom";
import ListItem from '@material-ui/core/ListItem';
import List from '@material-ui/core/List';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Loading from '../../shared/Loading';

/**
 *
 * Challenge 1 : faire la requete de manière asynchrone avec un petit serveur de base --> Voir JSON server ( npm )
 */
export const Home = (props) => {
    console.log(process.env);
    console.log(process.env.REACT_APP_URL_BASE);

    const [products, setProducts] = useState({});

    useEffect(() => {
        lesson.getLessons().then(data => {
            setProducts(data);
        })
    }, []);
    
    if (products && products.activities) {
        
        const listless = products.activities.map(
            (lesson) => <Lesson key={lesson.title} value={lesson} />);

        return (
            <>
                <h1>Trainings offered by Hackages</h1>

                <List>
                    {listless}
                </List>

            </>
        );

    } else {
        return (
            <>
                <Loading></Loading>
            </>
        )
    }
};

export const Lesson = (props) => {
    const { value } = props;

    return (
        <>

            <ListItem>
                <Card variant="outlined">
                    <CardContent>
                        <h4>
                            {`${value.dates[0]} ${value.title} `}
                        </h4>
                        <p>
                            {`${value.dates.length} days  at ${value.location.country} - ${value.location.locality} price ->  ${value.price}€`}
                        </p>

                        <p>
                            {` langage ->  ${value.topics[0].name}`}
                        </p>
                    </CardContent>
                    <CardActions>
                        <Button size="small"><Link to={`/details/${value.id}`}> Order now ! </Link></Button>
                    </CardActions>
                </Card>
            </ListItem>

        </>
    );
};