import { configureStore } from '@reduxjs/toolkit'
import jobListReducer, { addItems } from './filterSlice'

import * as reduxThunk from "redux-thunk/extend-redux";
export const store = configureStore({
  reducer: {
    jobList: jobListReducer,
    items:addItems
  },

})


export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch