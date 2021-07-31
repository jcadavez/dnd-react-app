import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

export const RaceList = () => {
    const races = useSelector(state => state.race.list)

    const renderedRaces = races.map(race => (
        <article className="race-excerpt" key={race.index}>
            <Link to={race.url}>
                <h3>{race.name}</h3>
            </Link>
        </article>
    ))
    
    return (
        <section className="races-list">
            <h2>Races</h2>
            {renderedRaces}
        </section>
    )
}