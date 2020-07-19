import React from 'react'

const Experience = ({ edu }) => {

    const { school, date, course, description: { description } } = edu;
    return (
        <>
            <li className="event">
                <h5>{school}</h5>
                <h4>
                    <span className="date">{date}</span>
                    <span className="company">{course}</span>
                </h4>
                <p>{description}</p>
            </li>
        </>
    )
}

export default Experience
