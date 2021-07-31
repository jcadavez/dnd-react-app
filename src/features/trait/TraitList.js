import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

export const TraitList = () => {
    const traits = useSelector(state => state.trait.list)

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