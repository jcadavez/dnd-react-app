import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
    list: [
        {
            "index" : "good",
            "name"  : "Good",
            "url"   : "/api/traits/good"
        },
        {
            "index" : "evil",
            "name"  : "Evil",
            "url"   : "/api/traits/evil"
        }
    ],
    status: 'idle',
    error: null
}

export const fetchTraits = createAsyncThunk('app/fetchraces', async () => {
    let { results } = await fetch('https://www.dnd5eapi.co/api/traits')
        .then(response => response.json());
    return { results: results };
})

const traitSlice = createSlice({
    name: 'traits',
    initialState,
    reducers: {},
    extraReducers: {
        [fetchTraits.pending]: (state, action) => {
            state.status = 'loading'
        },
        [fetchTraits.fulfilled]: (state, action) => {
            state.status = 'succeeded'
            const { results } = action.payload
            state.list = results
        },
        [fetchTraits.rejected]: (state, action) => {
            state.status = 'failed'
            state.error = action.error.message
        }
    }
})

export default traitSlice.reducer