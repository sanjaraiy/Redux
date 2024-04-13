# Redux in React :-
This is global state management library. it is used for avoiding `props drilling` in an application.






## Follow the following steps (How to understand Redux) :-
- Context API
- Redux with react-redux
- Redux-toolkit library

1) ### Context API








2) ### Redux  with react-redux
 Redux is state management library but react-redux is another package for giving some `hooks and methods ` so that `React` may interact with `Redux` library.
 ` (Provider, useSelector and useDispatch etc.)` is given by React-redux (intermediator btw redux and react) so that react access and manipulate data the of redux-store.


- Create a store by using createStore method from purely redux
```js
import {createStore} from "redux";

export const store = createStore(); 

```

- Go to main.js file and import a `Provider` (intermediator) from `react-redux` 
- Wrap app component by using Provider and give attribute `store={store}` so that give access the store to the all components app or app (for communicate app components with store that is defined in `redux/store` file or created store)

```js
import {Provider} from 'react-redux'
import { store } from './redux/store.js'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
   </React.StrictMode>,
)
```

- Then after define a `reducer (this is simply function)` that has access of `state and action` (state => it is current state of redux-store, action => it is just dispatched event that is performed on current state of redux-store) and after performing action on current state of redux-store, it returns updated state to the redux-store, then after updated the state of redux-store.

```js

import {createStore} from "redux";

const reducer = (state=0,action)=>{
   switch(action.type){
    case 'INCREMENT' : return state+1;
    case 'DECREMENT' : return state-1;
    default : return state;
   }
}

export const store = createStore(reducer); 
```

- If we want to update  a state of redux-store,for this, we use the `useDispatch hook`,it has access of `action`, by using this, we  can dispatch a event or action (send the data or action (event) to the redux-store)

```js
import { useSelector } from 'react-redux'

function Counter() {
    const  count = useSelector((state)=>{ return state;} )
  return (
    <div>{count}</div>
  )
}
```

- If we want to access or get some data or get current state of redux-state, for this, we use the `useSelector hook`, it has access of `current state of redux-store`, by using this, we can reterive a current state of redux-store or get data from a redux-store.

```js
import { useDispatch } from 'react-redux'

function App() {
    const dispatch = useDispatch();
return (
    <>
      <button onClick={(e)=>dispatch({type:'INCREMENT'})}>Increment</button>
      <Counter></Counter>
      <button onClick={(e)=>dispatch({type:'DECREMENT'})}>Decrement</button>
    </>
  )
}
```

3) ### Redux-toolkit Library :-
If we want to develop a production level project then, we use a `@reduxjs/toolkit ` library.

- Create a store or configure a store from `@redux/toolkit`

```js
import {configureStore} from '@reduxjs/toolkit'

export const store = configureStore({ })
```

- Go to main.js file and import a `Provider` (intermediator) from `react-redux` 
- Wrap app component by using Provider and give attribute `store={store}` so that give access the store to the all components app or app (for communicate app components with store that is defined in `redux/store` file or created store)

```js
import {Provider} from 'react-redux'
import { store } from "./redux/store";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
  <Provider store={store}>
    <App />
  </Provider>
    
 </React.StrictMode>
);

```

- After that we can `create a Slice` for every feature from `@reduxjs/toolkit` in an application.
- Every Slice(object) contains 3 properties (Slice_name, initialState, define reducers (one or more))

```js
 import { createSlice } from "@reduxjs/toolkit";

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

export default cartSlice.reducer;

```
- Then After export Slice's reducer by using `name_Slice.reducer` into configured store , (we can export enitre Slice then after we can access the reducer from Slice by using `object's dot property`)

```js
  import {configureStore} from '@reduxjs/toolkit'
  import cartReducer from './slices/cartSlice'

 export const store = configureStore({
   reducer:{
         cart:cartReducer,
   },
})
```
- We can access the state (initial State or current state of store) by using `useSelector hook ` from react-redux

```js
import { useSelector } from "react-redux";

 const items = useSelector((state) =>{ return state } )
    console.log('Items', items)

```
- We can set the data or send the data into the store by using `useDispatch hook` from react-redux.
-> first, export reducer items.
```js
import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    //1) Slice name
    name :'Cart', 
    //2) intialState
    initialState:["abc","cde"], 
    //3) Define reducers for particular feature
    reducers :{
        addItem: (state,action) =>{
            state.push(action.payload); 
        },
    },
    
  
})
export const {addItem} = cartSlice.actions

export default cartSlice.reducer;

```
-> dispatch reducer action in `useDispatch` hook on particular trigger action 

```js

import { addItem } from "../redux/slices/cartSlice";
import { useDispatch } from "react-redux";

const Product = (props) => {
   
   const dispatch = useDispatch();
  
  return (
   
  <button onClick={(e)=>dispatch(addItem({name:props.productName, price:props.price}))} className="btn btn-primary">
            Add to cart
        </button>
      
  );
};

```

-> finally, get a current state of store by using `useSelector hook`.







