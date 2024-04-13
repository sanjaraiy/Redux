import { createSlice, createSelector} from "@reduxjs/toolkit";

const cartSlice = createSlice({
    //1) Slice name
    name :'Cart', 
    //2) intialState
    initialState:[], 
    //3) Define reducers for particular feature
    reducers :{
        addItem: (state,action) =>{
            state.push(action.payload);  //state is immutable 
        },
    },
})

export const getItemsSelector = createSelector(
    (state) => state.cart,
    (state) => state
)


export const {addItem} = cartSlice.actions

export default cartSlice.reducer;