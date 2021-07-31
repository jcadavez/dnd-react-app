import React from 'react'
import { useSelector } from 'react-redux'

export const TraitList = () => {
    const traits = useSelector(state => state.traits)

    const renderedTraits = traits.map(trait => (
        <article className="trait-excerpt" key={trait.index}>
            <h3>{trait.name}</h3>
        </article>
    ))

    return (
        <section className="traits-list">
            <h2>Traits</h2>
            {renderedTraits}
        </section>
    )
}