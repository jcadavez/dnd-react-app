import { createSlice } from "@reduxjs/toolkit";

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

const traitSlice = createSlice({
    name: 'traits',
    initialState,
    reducers: {}
})

export default traitSlice.reducer