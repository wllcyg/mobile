import {createSlice} from "@reduxjs/toolkit";

 const tabSlice = createSlice({
    name:'tabSlice',
    initialState:{
        activeIndex:0,
        bgColor:'#ff8c00',
    },
    reducers:{
        setColor(state,{payload}){
            state.bgColor=payload;
        },
        setActiveIndex(state,{payload}){
            state.activeIndex=payload;
        },
    },
})

export const { setColor,setActiveIndex } = tabSlice.actions;
export default tabSlice.reducer;