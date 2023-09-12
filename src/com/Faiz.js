import React, { useState } from 'react'
import './todolist.css'
import './Todo.css'
import Swal from 'sweetalert2';


export default function Faiz() {
    const [input ,setInput]= useState("");
    const [item ,setItem]= useState([]);
const Submit =()=>{
    if(!input){
        Swal.fire({
            icon: 'error',
            title: 'Please Fill This Input',
            
          })
    }
    else{

        setItem([...item,input])
        setInput("")
        // console.log(item);
        // console.log(input);
    }
    // console.log(item);
}
const Del = (e)=> {
    let save = item.filter((ele,ind)=>{
return ind!==e
    });
    setItem(save)
// console.log(e);
}
const Edit=(e)=>{
    Swal.fire({
        title: `Enter Value to Replace ${e}`,
        input: 'text',
        confirmButtonText: 'Replace / Edit !',
        showLoaderOnConfirm: true,
        content:"hi",
        html: `
        <input
          type="text"
          value="${e}"
          step="${e}"
          class="swal2-input"
          id="range-value">`
       
      })
      .then(async (result) => {
      if (result.isConfirmed) {
      
      }
    })
}
    // console.log(item);
    // console.log(input);
  return (
    <>
        <h1 className=''>Todo List 🖊⛔</h1>
    <div className='center'>
      {/* <form action="" > */}

      <div class="input-group mb-3">
  <input type="text" class="form-control" placeholder="Add Todo" aria-label="Username" value={input} required aria-describedby="basic-addon1" onChange={(e)=>setInput(e.target.value)} />
  <button className='btn btn-success' type='submit' onClick={Submit}>Add</button>
</div>{
    item.map((e,i)=>{
        // let hi = e
return(
<ul className='row'>
<h6>{e} <button className='btn btn-sm hi btn-danger' onClick={()=>Del(i)}><i class="fa-solid fa-trash"></i></button></h6>
  <button className='btn btn-success' onClick={()=>Edit(e)}><i class="fa-solid fa-pen-to-square"></i></button>
    <hr/>
</ul>
)
    })
}

      {/* </form> */}
    

    </div>
    </>
  )
}
