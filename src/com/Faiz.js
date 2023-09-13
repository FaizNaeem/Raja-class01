import React, { useEffect, useState } from 'react'
import './todolist.css'
import './Todo.css'
import Swal from 'sweetalert2';

const data1 =()=>{
    // localStorage.getItem("list")
    if(data1){
    
        return JSON.parse( localStorage.getItem("list"))
    }
    else{
        return []
    }
}
    


export default function Faiz() {
    const [input ,setInput]= useState("");
    const [item ,setItem]= useState(data1());
    const [btn ,setBtn]= useState(true)
    const [select ,setSelect]= useState(null)
    console.log(item);
const Submit =()=>{
    if(!input){
        Swal.fire({
            icon: 'error',
            title: 'Please Fill This Input',
            
          })
    }
    else if(input && select){
setItem(
    item.map((el)=>{
        console.log(el.id);
        console.log(select);
        if(el.id==select){
            return{...el,name:input}
        }
        return el
    })
)
setBtn(true)
setInput("")
setSelect(null)
    }
    else{
let obj = {id:new Date().getTime().toString(),name:input}
console.log(obj);
        setItem([...item,obj])
        setInput("")
        // console.log(item);
        // console.log(input);
    }
    // console.log(item);
}
const Del = (e)=> {
    console.log(e);
    let save = item.filter((ele)=>{
return e!==ele.id
    });
    setItem(save)
// console.log(e);
}
const Edit=(e)=>{
 let store = item.find((ele)=>{
return e===ele.id
})
setBtn(false)
setInput(store.name)
setSelect(e)
//  console.log(select);
//    console.log(e);
}
useEffect(()=>{
let data = localStorage.setItem("list",JSON.stringify((item)))
},[item])
    // console.log(item);
    // console.log(input);
  return (
    <>
        <h1 className=''>Todo List pen📝</h1>
    <div className='center'>
      {/* <form action="" > */}

      <div class="input-group mb-3">
  <input type="text" class="form-control" placeholder="Add Todo" aria-label="Username" value={input} required aria-describedby="basic-addon1" onChange={(e)=>setInput(e.target.value)} />
  {
      
      btn? <button className='btn btn-success' type='submit' onClick={Submit}>Add</button>: <button className='btn btn-success' type='submit' onClick={Submit}>Edit</button>
  }
</div>
{
    item.map((element)=>{
        // console.log(e.id);
        // let hi = e
return(
<ul className='row' key={element.id}>
<h6 className=''>{element.name} <button className='btn btn-sm hi btn-danger' onClick={()=>Del(element.id)}><i class="fa-solid fa-trash"></i></button><button className='btn btn-success btn-sm ' onClick={()=>Edit(element.id)}><i class="fa-solid fa-pen-to-square"></i></button></h6>
  
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
