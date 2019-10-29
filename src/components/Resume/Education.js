import React from 'react'

const Experience = ({ edu }) => {

    const { school, date, course, description: { description } } = edu;
    return (
        <>
            <li className="event">
                <h4>{school}</h4>
                <h5>
                    <span className="date">{date}</span>
                    <span className="company">{course}</span>
                </h5>
                <p>{description}</p>
            </li>
        </>
    )
}

export default Experience
