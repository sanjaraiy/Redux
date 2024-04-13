
import "./App.css";
import {useDispatch, useSelector} from 'react-redux'
import { fetchTodos } from "./redux/slice/todo";

function App() {
  
 const dispatch = useDispatch();

 const state = useSelector((state) => state);

 console.log(state.Todo)
  
 if(state.Todo.isLoading){
    return <h1>Loading...</h1>
 }

  return (
    <div className="App">
      <button onClick={(e) => dispatch(fetchTodos())} >Fetch Todos</button>
      {
        state.Todo.data && state.Todo.data.map((todo)=> <li>{todo.title}</li>)
      }
    </div>
  );
}

export default App;
