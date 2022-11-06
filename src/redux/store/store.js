import {configureStore} from "@reduxjs/toolkit";
import MainReducer from "../reducers/MainSlice";



export const store = configureStore({
  reducer: {
    main: MainReducer,
  }
})

