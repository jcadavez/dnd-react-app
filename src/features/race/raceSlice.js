import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
    selected: {
        "index" : "loading",
        "name" : "Loading",
        "speed" : 0,
        "ability_bonuses": [],
        "alignment": "loading info...",
        "age": "loading info...",
        "size": ""
    },
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
    singlestatus: 'idle',
    error: null
}

export const fetchRaces = createAsyncThunk('races/fetchraces', async () => {
    let { results } = await fetch('https://www.dnd5eapi.co/api/races')
        .then(response => response.json())
    return { results: results };
})

export const fetchSingleRace = createAsyncThunk('races/fetchsinglerace', async (url) => {
    let race = await fetch(`https://www.dnd5eapi.co/api/races/${url}`)
        .then(response => response.json())
    return { race: race };
})

const raceSlice = createSlice({
    name: 'races',
    initialState,
    reducers: {
        resetSingleRaceStatus(state, action) {
            state.singlestatus = 'idle';
        }
    },
    extraReducers: {
        [fetchRaces.pending]: (state, action) => {
            state.status = 'loading'
        },
        [fetchRaces.fulfilled]: (state, action) => {
            state.status = 'succeeded'
            let { results } = action.payload
            results = results.map(result => {
                const url = result.url.split("/");
                const newUrl = url[3]
                result.url = newUrl
                return result
            })
            state.list = results
        },
        [fetchRaces.rejected]: (state, action) => {
            state.status = 'failed'
            state.error = action.error.message
        },
        [fetchSingleRace.pending]: (state, action) => {
            state.singlestatus = 'loading'
        },
        [fetchSingleRace.fulfilled]: (state, action) => {
            state.singlestatus = 'succeeded'
            let { race } = action.payload
            state.selected = race
        },
        [fetchSingleRace.rejected]: (state, action) => {
            state.singlestatus = 'failed'
            state.error = action.error.message
        }
    }
})

export const { resetSingleRaceStatus } = raceSlice.actions

export default raceSlice.reducer