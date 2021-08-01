import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

import { resetSingleTraitStatus } from './traitSlice'

export const TraitList = () => {
    const dispatch = useDispatch();
    const traits = useSelector(state => state.traits.list)
    const traitStatus = useSelector(state => state.traits.resetSingleTraitStatus)

    useEffect(() => {
        if (traitStatus !== 'idle') {
            dispatch(resetSingleTraitStatus())
        }
    }, [traitStatus, dispatch])

    const renderedTraits = traits.map(trait => (
        <article className="trait-excerpt" key={trait.index}>
            <Link to={trait.url}>
                <h3>{trait.name}</h3>
            </Link>
        </article>
    ))

    return (
        <section className="traits-list">
            <h2>Traits</h2>
            {renderedTraits}
        </section>
    )
}