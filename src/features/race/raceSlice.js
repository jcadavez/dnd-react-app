import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

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

export const fetchRaces = createAsyncThunk('races/fetchraces', async () => {
    let { results } = await fetch('https://www.dnd5eapi.co/api/classes')
        .then(response => response.json())
    return { results: results };
})

const raceSlice = createSlice({
    name: 'races',
    initialState,
    reducers: {},
    extraReducers: {
        [fetchRaces.pending]: (state, action) => {
            state.status = 'loading'
        },
        [fetchRaces.fulfilled]: (state, action) => {
            state.status = 'succeeded'
            const { results } = action.payload
            state.list = results
        },
        [fetchRaces.rejected]: (state, action) => {
            state.status = 'failed'
            state.error = action.error.message
        }
    }
})

export default raceSlice.reducer