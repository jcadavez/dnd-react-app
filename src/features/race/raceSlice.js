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
            let { results } = action.payload
            results = results.map(result => {
                const url = result.url.split("/");
                const newUrl = `${url[2]}/${url[3]}`
                result.url = newUrl
                return result
            })
            state.list = results
        },
        [fetchRaces.rejected]: (state, action) => {
            state.status = 'failed'
            state.error = action.error.message
        }
    }
})

export default raceSlice.reducer