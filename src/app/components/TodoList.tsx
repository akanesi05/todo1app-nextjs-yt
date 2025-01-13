import {Task} from "@/types"
import React,{useEffect} from 'react'
import Todo from "./Todo";
interface TodoListProps {
  todos:Todo[];
}

function TodoList({todos}:TodoListProps) {
  return (
    <ul className="space-y-3">
      {todos.map((todo)=>(
       <Todo key={todo.id} todo={todo}/>
      ))}
      {/* <li>
        <span className="flex justify-between p-4 bg-white border-l-4 border-blue-500 rounded shadow">
          散歩
        </span>
        <div>
        <button className="text-green-500 mr-3">edit</button>
         <button className="text-red-500 mr-3">
           delete
         </button>
        </div>
        
      </li> */}
      {/* <li>
        <span className="flex justify-between p-4 bg-white border-l-4 border-blue-500 rounded shadow">
          散歩
        </span>
        <div>
        <button className="text-green-500 mr-3">edit</button>
         <button className="text-red-500 mr-3">
           delete
         </button>
        </div>
        
      </li>
      <li>
        <span className="flex justify-between p-4 bg-white border-l-4 border-blue-500 rounded shadow">
          散歩
        </span>
        <div>
        <button className="text-green-500 mr-3">edit</button>
         <button className="text-red-500 mr-3">
           delete
         </button>
        </div>
        
      </li> */}
    <div>TodoList</div>
    </ul>
  )
}

export default TodoList
