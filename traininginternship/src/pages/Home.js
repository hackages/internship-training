import React, {useEffect} from "react";
import Link from 'next/link'
import ListItem from '@material-ui/core/ListItem';
import List from '@material-ui/core/List';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Loading from '../shared/Loading';
import fakeData from '../fakeData.json';
import {Store, StoreProvider} from "../core/redux/store";

const getLessons = () => new Promise(res => {
    setTimeout(() => {
        res(fakeData)
    }, 1000)
});

const Home = (props) => {
    const [isLoading, setIsLoading] = React.useState(true);
    const {state, dispatch} = React.useContext(Store);

    useEffect(() => {
        getLessons().then((lessons) => {
            setIsLoading(false);
            dispatch({type: 'SET_TRAININGS', payload: lessons});
        })
    }, [dispatch]);

    const listless = state.trainings.map(
        (lesson) => <Lesson key={lesson.title} value={lesson}/>);

    if (isLoading) {

        return (
            <Loading></Loading>
        );

    } else {

        return (
            <>
                <h1>Trainings offered by Hackages</h1>

                <List>
                    {listless}
                </List>

            </>
        );

    }

};


export const Lesson = (props) => {
    const {value} = props;

    const days = value.dates.map(
        (date, index) => {
            if (index === 0) {
                return "From " + date + " ";
            } else if (index === value.dates.length - 1) {
                return "to " + date;
            }

            return "";

        });

    return (
        <>

            <ListItem>
                <Card variant="outlined">
                    <CardContent>
                        <h1>
                            {`${value.dates[0]} ${value.title} `}
                        </h1>
                        <h2>
                            {days}
                        </h2>
                        <p>
                            {`${value.dates.length} days  at ${value.location.country} - ${value.location.locality} price ->  ${(value.price)}€`}
                        </p>

                        <p>
                            {` langage ->  ${value.topics[0].name}`}
                        </p>
                    </CardContent>
                    <CardActions>
                        <Button size="small">
                            <Link href={`/details/${value.id}`}>
                                <a>Order now !</a>
                            </Link>
                        </Button>
                    </CardActions>
                </Card>
            </ListItem>

        </>
    );
};

export default Home;
