import React,{useState} from 'react'
import './Todo.css'

export default function Todo(props) {
  const {
    updateTodo
} = props
let [inputValue , setInputValue] = useState('');

const submit = (e) => {
    e.preventDefault()
    updateTodo(inputValue);
    // console.log(inputValue);
    setInputValue('')
}
  return (
    <div className='center'>
      <form action="" onSubmit={submit}>

      <div class="input-group mb-3">
  <input type="text" class="form-control" placeholder="Add Todo" aria-label="Username" required aria-describedby="basic-addon1" onChange={(e)=>setInputValue(e.target.value)}/>
  <button className='btn btn-success' type='submit' onClick={submit}>Add</button>
</div>
      </form>

    </div>
  )
}
