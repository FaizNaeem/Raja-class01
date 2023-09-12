import React from 'react'
import './todolist.css'
import Swal from 'sweetalert2';

export default function TodoList(props) {
        const {
            todoList
        } = props
        console.log(todoList);
    
        const edit = (i) => {
          Swal.fire({
              title: `Enter Value to Replace`,
              input: 'text',
              confirmButtonText: 'Replace / Edit !',
              showLoaderOnConfirm: true,
            })
// console.log(i);
// Swal.fire({
//   title: `Enter Value to Replace`,
//   input: 'text',
//   confirmButtonText: 'Replace / Edit !',
//   showLoaderOnConfirm: true,
// }).then(async (result) => {
//   if (result.isConfirmed) {
//       await updateDoc(data, {
//           todo: result.value + " (edited on " + new Date().getHours() + ":" + new Date().getMinutes() + " )"
//       });
//       Swal.fire({
//           title: `Value Replaced`,
//           icon: 'success'
//       }).then(() => {
//           location.reload()
//       })
//   }
// })
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
// alert("Please enter Value")

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
