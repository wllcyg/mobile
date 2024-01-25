import {createSlice} from "@reduxjs/toolkit";

 const tabSlice = createSlice({
    name:'tabSlice',
    initialState:{
        activeIndex:0,
        bgColor:'#ff8c00',
        duration:'0s',
    },
    reducers:{
        setColor(state,{payload}){
            state.bgColor=payload;
        },
        setActiveIndex(state,{payload}){
            state.activeIndex=payload;
        },
        setDuration(state,{payload}){
            state.duration=payload;
        },
    },
})

export const { setColor,setActiveIndex,setDuration } = tabSlice.actions;
export default tabSlice.reducer;