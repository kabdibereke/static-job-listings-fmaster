import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { createAsyncThunk } from '@reduxjs/toolkit'
import { IJobs } from '../type'

export const fetchJobList = createAsyncThunk(
  'users/fetchJobList',
   async ()=> {
      
    const response = await fetch(
      `https://run.mocky.io/v3/50d38f59-778f-48a2-b0f5-ac61d1c852c1`,
    );
    return response.json()
  
    
  }
)

export interface JobList {
  data: IJobs[],
  items:string[],
  status: 'loading' | 'error' |  'success'
}

const initialState: JobList = {
  data: [],
  items:[],
  status:'loading'
}

export const JobListSlice = createSlice({
  name: 'items',
  initialState,
  reducers: {
    addItems: (state, action) => {
        if(state.items.includes(action.payload)) {
            return 
           }else {
            state.items.push(
                action.payload,
            );
        
           }
            
    },
    removeItems: (state, action) => {
        state.items = state.items.filter(
            (item) => item!== action.payload,
        );
    },
    deleteItems: (state) => {
        state.items = [];
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchJobList.pending, (state, action) => {
      state.status = "loading";
			state.data = [];
    }),
    builder.addCase(fetchJobList.fulfilled, (state, action) => {
        state.status = "success";
        state.data = action.payload;
    }),
    builder.addCase(fetchJobList.rejected, (state, action) => {
      state.status = "success";
      state.data = []
  })
  },
})


export const { addItems,removeItems,deleteItems } = JobListSlice.actions

export default JobListSlice.reducer