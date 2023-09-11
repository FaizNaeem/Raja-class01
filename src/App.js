import './App.css';
import { useEffect, useState } from 'react';
import Todo from './com/Todo';


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
     <Todo todolist={update}/>
{/* <input type="text" value={count} /> */}
{/* <button onClick={()=>setcount(count+1)}>Add</button> */}
    </div>
  )
}

export default App;
