import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

export const ClassList = () => {
    const classes = useSelector(state => state.class.list)

    const renderedClasses = classes.map(classVal => (
        <article className="class-excerpt" key={classVal.index}>
            <Link to={classVal.url}>
                <h3>{classVal.name}</h3>
            </Link>
        </article>
    ))

    return (
        <section className="classes-list">
            <h2>Classes</h2>
            {renderedClasses}
        </section>
    )
}