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
  return (
    <div className="App">
     <Todo/>
{/* <input type="text" value={count} /> */}
{/* <button onClick={()=>setcount(count+1)}>Add</button> */}
    </div>
  )
}

export default App;
