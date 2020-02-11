import React from "react";
import fakeData from '../../fakeData.json';
import { Link } from "react-router-dom";


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
            <ul>
                {listless}
            </ul>

        </>
    );
};

export const Lesson = (props) => {
    const { value } = props;

    return (
        <>
            <li>
                <h4>
                    {`${value.date} ${value.title} `}
                </h4>
                <a>
                    {`${value.days} days  at ${value.place} price ->  ${value.price}€`}
                </a>
                {' '}<button><Link to={`/details/${value.id}`}> Order now ! </Link></button>
                <p>
                    {` langage ->  ${value.language}`}
                </p>
            </li>
        </>
    );
};