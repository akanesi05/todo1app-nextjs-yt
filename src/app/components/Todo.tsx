
import React from 'react'

interface TodoProps {
    todos:Task[];
  }
  
const Todo = ({todo}:TodoProps) => {
  return (
    <li key={todo.id}>
    <span className="flex justify-between p-4 bg-white border-l-4 border-blue-500 rounded shadow">
      {todo.text}
    </span>
    <div>
    <button className="text-green-500 mr-3">edit</button>
     <button className="text-red-500 mr-3">
       delete
     </button>
    </div>
    
  </li>
  )
}

export default Todo
