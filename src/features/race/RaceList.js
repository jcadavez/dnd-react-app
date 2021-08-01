import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'

import { resetSingleRaceStatus } from './raceSlice'

export const RaceList = () => {
    const dispatch = useDispatch();
    const races = useSelector(state => state.races.list)
    
    const raceStatus = useSelector(state => state.races.singlestatus);
    
    useEffect(() => {
        if (raceStatus !== 'idle') {
            dispatch(resetSingleRaceStatus())
        }
    }, [raceStatus, dispatch])

    const renderedRaces = races.map(race => (
        <article className="race-excerpt" key={race.index}>
            <Link to={`/races/${race.url}`}>
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