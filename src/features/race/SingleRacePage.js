import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { fetchSingleRace } from './raceSlice'

export const SingleRacePage = ({ match }) => {
    const dispatch = useDispatch();
    const { raceUrl } = match.params;
    
    const raceStatus = useSelector(state => state.race.singlestatus);
    
    useEffect(() => {
        if (raceStatus === 'idle') {
            dispatch(fetchSingleRace(raceUrl))
        }
    }, [raceStatus, raceUrl, dispatch])

    const race = useSelector(state => state.race.selected)

    return (
        <section>
            <article className="race">
                <h2>{race["name"]}</h2>
                <p className="race-content">{race["alignment"]}</p>
            </article>
        </section>
    )
}