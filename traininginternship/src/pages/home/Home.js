import React from "react";
import fakeData from '../../fakeData.json';

export const Home = (props) => {

    const listless = fakeData.map((
        lesson) => <Lesson key={lesson.title} value={lesson}/>);

    return (
        <>
            <h1>Trainings offered by Hackages</h1>
            <ul>
                <li>
                    {listless}
                </li>
            </ul>

        </>
    );
};

const Lesson = (props) => {
    const {value} = props;

    return (
        <div>
        <h4>
            {`${value.date} ${value.title} `}
        </h4>
        <a>
            {`${value.days} days  at ${value.place} price ->  ${value.price}€` }
        </a>
            {' '}<button> Order now ! </button>
            <p>
                {` langage ->  ${value.language}`}
            </p>
        </div>
    );
};