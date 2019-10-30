import React from 'react'

const Subtitle = ({ title, className }) => {
    return (
        <div className={`sub-heading ${className}`}>
            <h3>{title}</h3>
        </div>
    )
}

export default Subtitle
