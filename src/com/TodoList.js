import React from 'react'
import './todolist.css'

export default function TodoList(props) {
        const {
            todoList
        } = props
        console.log(todoList);
    
        const edit = (e) => {
           
        }
        const dele = (e) => {
            console.log(e);
        }
  return (
    <div>
            <ul>
          {
            todoList.map((element , index , array) => {
                console.log(element);
                return (
                <li style={{textTransform : 'capitalize'}}>{element}
                <button className='btn btn-sm btn-success' onClick={() => edit(element)}>Edit</button>    
                <button className='btn btn-sm btn-danger' onClick={() => dele(element)}>Delete</button>    
                </li>
                )
            })
          }
      </ul>
    </div>
  )
}
