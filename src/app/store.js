import { configureStore } from "@reduxjs/toolkit"

import raceReducer from '../features/race/raceSlice'

export default configureStore({
    reducer: {
        race: raceReducer
    }
})