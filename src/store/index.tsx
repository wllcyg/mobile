import {configureStore,combineReducers} from "@reduxjs/toolkit";
import tabSlice from "@/store/tabSlice";

const reducer = combineReducers({
    tab:tabSlice
})
export default configureStore({
    reducer
})