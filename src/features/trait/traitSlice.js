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

export const fetchTraits = createAsyncThunk('traits/fetchtraits', async () => {
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
            let { results } = action.payload
            results = results.map(result => {
                const url = result.url.split("/");
                const newUrl = `${url[2]}/${url[3]}`
                result.url = newUrl
                return result
            })
            state.list = results
        },
        [fetchTraits.rejected]: (state, action) => {
            state.status = 'failed'
            state.error = action.error.message
        }
    }
})

export default traitSlice.reducer