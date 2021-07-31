import React from 'react'
import { useSelector } from 'react-redux'

export const RaceList = () => {
    const races = useSelector(state => state.race.list)

    const renderedRaces = races.map(race => (
        <article className="race-excerpt" key={race.index}>
            <h3>{race.name}</h3>
        </article>
    ))
    
    return (
        <section className="races-list">
            <h2>Races</h2>
            {renderedRaces}
        </section>
    )
}