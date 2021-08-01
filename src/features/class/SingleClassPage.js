import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { fetchSingleClass } from './classSlice'

export const SingleClassPage = ({ match }) => {
    const dispatch = useDispatch();
    const { classUrl } = match.params;

    const classStatus = useSelector(state => state.classes.singlestatus)

    useEffect(() => {
        if (classStatus === 'idle') {
            dispatch(fetchSingleClass(classUrl))
        }
    }, [classStatus, classUrl, dispatch])

    const classObj = useSelector(state => state.classes.selected)

    return (
        <section>
            <article className="class">
                <h2>{classObj["name"]}</h2>
                <p className="class-content">{classObj["hit_die"]}</p>
            </article>
        </section>
    )
}