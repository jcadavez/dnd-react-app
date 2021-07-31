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
            let { results } = action.payload;
            results = results.map(result => {
                const url = result.url.split("/");
                const newUrl = `${url[2]}/${url[3]}`
                result.url = newUrl
                return result
            })
            state.list = results;
        },
        [fetchClasses.rejected]: (state, action) => {
            state.status = 'failed'
            state.error = action.error.message
        }
    }
})

export default classSlice.reducer