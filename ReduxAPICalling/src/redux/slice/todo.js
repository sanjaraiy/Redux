import {createSlice, createAsyncThunk} from '@reduxjs/toolkit'

//=========Middleware to fetch a data from other source(API calls)==============
//=====When this Action is dispatched then callback function is executed and API call 
export const fetchTodos = createAsyncThunk('fetchTodos',async () =>{
  const res = await fetch('https://jsonplaceholder.typicode.com/todos');
  const data = await res.json();
  return data;
})

const todoSlice = createSlice({
    name : 'todo',
    initialState:{
        isLoading:false,
        data:null,
        isError: false,
    },
    extraReducers: (builder) => {
       builder.addCase(fetchTodos.pending, (state,action)=>{
          state.isLoading = true;

       })
       builder.addCase(fetchTodos.fulfilled, (state, action)=>{
            state.isLoading = false;
            state.data = action.payload;
       })
       builder.addCase(fetchTodos.rejected, (state,action)=>{
           console.log("Error", action.payload);
           state.isError = true;
       })
    }
   
})

export const {} = todoSlice.actions;

export default todoSlice.reducer;