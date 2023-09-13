import './App.css';
import { useEffect, useState } from 'react';
import Faiz from './com/Faiz';
// import ErrorHandling from './com/ErrorHandling';
// import Todo from './com/TodoForm';
// import TodoList from './com/TodoList';

function App() {
//   const [count ,setcount]=useState(0)
//   useEffect(()=>{
// console.log("empty array");
//   },[])
//   useEffect(()=>{
// console.log("no value");
//   },)
//   useEffect(()=>{
//     console.log("array plus passing variable");
//       },[count])
const [update , setUpdate] = useState([]);
const todo = (e) => {
   setUpdate([...update , e])
}
  return (
    <div className="App">
      <Faiz />
{/* <ErrorHandling/> */}

     {/* <Todo updateTodo = {todo} />
     <TodoList
           todoList = {update} 
            /> */}
{/* <input type="text" value={count} /> */}
{/* <button onClick={()=>setcount(count+1)}>Add</button> */}
    </div>
  )
}

export default App;
