import React from 'react'
import { useSelector } from 'react-redux'

function Todos() {
    //todos is the array of objects that store all of our todo tasks
    const  todos = useSelector((state) => state.todos.todos)
    console.log(todos)
  return (
    <div>
        {
            todos.map((ele)=>{
                return (
                    <div className="todo" key={ele.id}>
                        <h3>{ele.text}</h3>
                        <button className="remove">Remove</button>
                    </div>
                )
            })
        }
    </div>
  )
}

export default Todos