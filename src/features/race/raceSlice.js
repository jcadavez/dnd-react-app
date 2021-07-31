import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    list: [
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
    ],
    status: 'idle',
    error: null
}

const raceSlice = createSlice({
    name: 'races',
    initialState,
    reducers: {}
})

export default raceSlice.reducer