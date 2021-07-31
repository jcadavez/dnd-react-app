import { createSlice } from "@reduxjs/toolkit";

const initialState = [
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
]

const traitSlice = createSlice({
    name: 'trait',
    initialState,
    reducers: {}
})

export default traitSlice.reducer