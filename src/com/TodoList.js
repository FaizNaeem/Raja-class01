import React from 'react'

export default function TodoList(props) {
        const {
            todoList
        } = props
        console.log(todoList);
    
        const edit = (e) => {
            console.log(e);
        }
        const dele = (e) => {
            console.log(e);
        }
  return (
    <div>TodoList</div>
  )
}
