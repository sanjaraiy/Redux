import './App.css'
import Counter from './components/Counter'


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

export default App
