import React from "react";
import fakeData from '../../fakeData.json';
import { Link } from "react-router-dom";
import ListItem from '@material-ui/core/ListItem';
import List from '@material-ui/core/List';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';


/**
 *
 * Challenge 1 : faire la requete de manière asynchrone avec un petit serveur de base --> Voir JSON server ( npm )
 */
export const Home = (props) => {


    const listless = fakeData.map(
        (lesson) => <Lesson key={lesson.title} value={lesson} />);

    return (
        <>
            <h1>Trainings offered by Hackages</h1>

            <List>
                {listless}
            </List>

        </>
    );
};

export const Lesson = (props) => {
    const { value } = props;

    return (
        <>

            <ListItem>
                <Card variant="outlined">
                    <CardContent>
                        <h4>
                            {`${value.date} ${value.title} `}
                        </h4>
                        <p>
                            {`${value.days} days  at ${value.place} price ->  ${value.price}€`}
                        </p>

                        <p>
                            {` langage ->  ${value.language}`}
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