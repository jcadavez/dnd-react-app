import React from 'react'
import { useSelector } from 'react-redux'

export const ClassList = () => {
    const classes = useSelector(state => state.class.list)

    const renderedClasses = classes.map(classVal => (
        <article className="class-excerpt" key={classVal.index}>
            <h3>{classVal.name}</h3>
        </article>
    ))

    return (
        <section className="classes-list">
            <h2>Classes</h2>
            {renderedClasses}
        </section>
    )
}