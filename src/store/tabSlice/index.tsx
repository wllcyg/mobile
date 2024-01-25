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
        }
    },
})

export const { setColor } = tabSlice.actions;
export default tabSlice.reducer;