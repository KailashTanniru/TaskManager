import React, { useContext } from 'react'
import { GlobalContext } from '../../context/GlobalState';

const ImportantTodos = () => {
    const { todos }  = useContext(GlobalContext);
    console.log(todos);
  return (
    <div>

    <h1>Important Tasks</h1>
    <div className='m-5'>
    {
        todos.map(todo =>{
            return (todo.imp===true &&  <li   key={todo.id} className='flex  bg-[#F9F9F9] mb-2  p-2  justify-between items-center'>
            <div className='flex items-center ml-2 '>
            <input type="checkbox" class=" w-4 h-4  accent-pink-300 md:accent-pink-500"  /> 
               <label className='ml-4 font-light '>{todo.title}</label>
            </div>    
            
        </li>

       )
       })
    }
    </div>
    </div>
  )
}

export default ImportantTodos