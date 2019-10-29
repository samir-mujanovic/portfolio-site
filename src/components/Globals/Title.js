import React from 'react'

const Title = ({ title, className }) => {
    return (
        <div className="page-heading">
            <h2 className={className}>{title}</h2>
        </div>
    )
}

export default Title
