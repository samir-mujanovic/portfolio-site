import React from 'react'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

const Experience = ({ exp }) => {

    const { position, date, company, description: { json } } = exp;
    return (
        <>
            <li className="event">
                <h5>{position}</h5>
                <h4>
                    <span className="date">{date}</span>
                    <span className="company">{company}</span>
                </h4>
                {documentToReactComponents(json)}
            </li>
        </>
    )
}

export default Experience
