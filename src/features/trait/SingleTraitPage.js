import React, { useEffect } from 'react' 
import { useSelector, useDispatch } from 'react-redux'

import { fetchSingleTrait } from './traitSlice'

export const SingleTraitPage = ({ match }) => {
    const dispatch = useDispatch();
    const { traitUrl } = match.params 

    const traitStatus = useSelector(state => state.traits.singlestatus)

    useEffect(() => {
        if (traitStatus === 'idle') {
            dispatch(fetchSingleTrait(traitUrl))
        }
    }, [traitStatus, traitUrl, dispatch])

    const trait = useSelector(state => state.traits.selected)
    const renderedDescs = trait.desc.map(desc => (
        <article className="trait-desc-excerpt">
            <p>{desc}</p>
        </article>
    ))
    return (
        <section className="trait">
            <h2>{trait["name"]}</h2>
            {renderedDescs}
        </section>
    )
}