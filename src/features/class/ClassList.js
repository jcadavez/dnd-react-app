import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

import { resetSingleClassStatus } from './classSlice'

export const ClassList = () => {
    const dispatch = useDispatch();
    const classes = useSelector(state => state.classes.list)
    const classStatus = useSelector(state => state.classes.singlestatus)

    useEffect(() => {
        if (classStatus !== 'idle') {
            dispatch(resetSingleClassStatus())
        }
    }, [classStatus, dispatch])

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