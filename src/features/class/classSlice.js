import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
    selected: {
        "index" : "loading",
        "name" : "Loading",
        "hit_die" : 0,
        "proficiency_choices" : [],
        "proficiencies" : [],
        "saving_throws" : [],
        "starting_equipment" : [],
        "starting_equipment_options" : []
    },
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
    singlestatus: 'idle',
    error: null
}

export const fetchClasses = createAsyncThunk('classes/fetchclasses', async () => {
    let { results } = await fetch('https://www.dnd5eapi.co/api/classes')
        .then(response => response.json());
    return { results: results };
})

export const fetchSingleClass = createAsyncThunk('classes/fetchsingleclass', async (url) => {
    let classVal = await fetch(`https://www.dnd5eapi.co/api/classes/${url}`)
        .then(response => response.json())
    return { classVal : classVal }
})

const classSlice = createSlice({
    name: 'classes',
    initialState,
    reducers: {
        resetSingleClassStatus(state, action) {
            state.singlestatus = 'idle'
        }
    },
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
        },
        [fetchSingleClass.pending]: (state, action) => {
            state.singlestatus = 'loading'
        },
        [fetchSingleClass.fulfilled]: (state,action) => {
            state.singlestatus = 'succeeded'
            let { classVal } = action.payload 
            state.selected = classVal
        },
        [fetchSingleClass.rejected]: (state, action) => {
            state.singlestatus = 'failed'
            state.error = action.error.message
        }
    }
})

export const { resetSingleClassStatus } = classSlice.actions

export default classSlice.reducer