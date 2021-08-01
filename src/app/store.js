import { configureStore } from "@reduxjs/toolkit"

import raceReducer from '../features/race/raceSlice'
import classReducer from '../features/class/classSlice'
import traitReducer from '../features/trait/traitSlice'

export default configureStore({
    reducer: {
        races: raceReducer,
        classes: classReducer,
        traits: traitReducer
    }
})