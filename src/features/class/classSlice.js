import { createSlice } from "@reduxjs/toolkit";

const initialState = [
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
]

const classSlice = createSlice({
    name: 'class',
    initialState,
    reducers: {}
})

export default classSlice.reducer