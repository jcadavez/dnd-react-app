import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
    list: [
        {
            "index" : "poor",
            "name"  : "Poor",
            "url"   : "/api/classes/poor"
        },
        {
            "index" : "rich",
            "name"  : "Rich",
            "url"   : "/api/classes/rich"
        }
    ],
    status: 'idle',
    error: null
}

export const fetchClasses = createAsyncThunk('classes/fetchclasses', async () => {
    let { results } = await fetch('https://www.dnd5eapi.co/api/classes')
        .then(response => response.json());
    return { results: results };
})

const classSlice = createSlice({
    name: 'classes',
    initialState,
    reducers: {},
    extraReducers: {
        [fetchClasses.pending]: (state, action) => {
            state.status = 'loading'
        },
        [fetchClasses.fulfilled]: (state, action) => {
            state.status = 'succeeded'
            const { results } = action.payload;
            state.list = results;
        },
        [fetchClasses.rejected]: (state, action) => {
            state.status = 'failed'
            state.error = action.error.message
        }
    }
})

export default classSlice.reducer