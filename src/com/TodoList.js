import React from 'react'
import './todolist.css'

export default function TodoList(props) {
        const {
            todoList
        } = props
        console.log(todoList);
    
        const edit = (i) => {
 
        }
        const dele = (e) => {
          const hello =  todoList.filter((ele ,ind)=>{
            return ind!== e

          })
        }
  return (
    <div>
            <ul>
          {
            todoList.map((element , index , array) => {
                console.log(element);
                if(!element){

                }
                else{

                  return (
                    <li style={{textTransform : 'capitalize'}}>{element}
                <button className='btn btn-sm btn-success' onClick={() => edit(index)}>Edit</button>    
                <button className='btn btn-sm btn-danger' onClick={() => dele(index)}>Delete</button>    
                </li>
                )
              }
            })
          }
      </ul>
    </div>
  )
}
