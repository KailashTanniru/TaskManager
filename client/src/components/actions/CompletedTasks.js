import React, { useContext } from 'react'
import { GlobalContext } from '../../context/GlobalState';

const CompletedTasks = () => {
    const { todos }  = useContext(GlobalContext);
  return (
    <div>
    <h1>Completed Tasks</h1>
    <div className='m-5'>
    {
        todos.map(todo =>{
            return (todo.complete &&  <li   key={todo.id} className='flex  bg-[#F9F9F9] mb-2  p-2  justify-between items-center'>
            <div className='flex items-center ml-2 '>
            <input type="checkbox" class=" w-4 h-4  accent-pink-300 md:accent-pink-500" checked   /> 
               <label className='ml-4 font-light line-through'>{todo.title}</label>
            </div>    
        </li>

       )
       })
    }
    </div>
    </div>
  )
}

export default CompletedTasks