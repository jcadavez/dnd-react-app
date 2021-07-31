import { createSlice } from "@reduxjs/toolkit";

const initialState = [
    {
        "index" : "chocolate",
        "name"  : "Chocolate",
        "url"   : "/api/races/chocolate"
    },
    {
        "index" : "vanilla",
        "name"  : "Vanilla",
        "url"   : "/api/races/vanilla"
    }
]

const raceSlice = createSlice({
    name: 'race',
    initialState,
    reducers: {}
})

export default raceSlice.reducer