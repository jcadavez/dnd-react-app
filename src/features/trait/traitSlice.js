import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
    selected: {
        "index" : "loading",
        "name" : "Loading",
        "races" : [],
        "subraces" : [],
        "desc" : ["loading"],
        "proficiencies" : []
    },
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
    singlestatus: 'idle',
    error: null
}

export const fetchTraits = createAsyncThunk('traits/fetchtraits', async () => {
    let { results } = await fetch('https://www.dnd5eapi.co/api/traits')
        .then(response => response.json());
    return { results: results };
})

export const fetchSingleTrait = createAsyncThunk('traits/fetchsingletrait', async (url) => {
    let trait = await fetch(`https://www.dnd5eapi.co/api/traits/${url}`)
        .then(response => response.json())
    return { trait: trait }
})

const traitSlice = createSlice({
    name: 'traits',
    initialState,
    reducers: {
        resetSingleTraitStatus(state, action) {
            state.singlestatus = 'idle'
        }
    },
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
        },
        [fetchSingleTrait.pending]: (state, action) => {
            state.singlestatus = 'loading'
        },
        [fetchSingleTrait.fulfilled]: (state, action) => {
            state.singlestatus = 'succeeded'
            let { trait } = action.payload 
            state.selected = trait
        },
        [fetchSingleTrait.rejected]: (state, action) => {
            state.singlestatus = 'failed'
            state.error = action.error
        }
    }
})

export const { resetSingleTraitStatus } = traitSlice.actions

export default traitSlice.reducer