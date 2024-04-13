# Redux in React :-
This is global state management library. it is used for avoiding `props drilling` in an application.


## Architecture of Redux :-





## Follow the following steps (How to understand Redux) :-
- Context API
- Redux with react-redux
- Redux-toolkit library

1) ### Context API








2) ### Redux  with react-redux

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







