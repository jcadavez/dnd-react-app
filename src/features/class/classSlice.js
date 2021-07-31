import { createSlice } from "@reduxjs/toolkit";

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



const classSlice = createSlice({
    name: 'classes',
    initialState,
    reducers: {}
})

export default classSlice.reducer