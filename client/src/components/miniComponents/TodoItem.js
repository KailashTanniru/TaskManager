import React, { useContext, useState } from 'react'
import { GlobalContext } from '../../context/GlobalState'
import CheckImp from './CheckImp'


const TodoItem = ({val}) => {
  const { todos }  = useContext(GlobalContext);
  const { deleteTodo,completeStatus } = useContext(GlobalContext)
  const [complete,setComplete] = useState(false);

  function checkComplete(val){
    setComplete(!complete);
    completeStatus(val,complete);
  }
   return (
    <div>
    {todos.length === 0 && <p>No todos to Show</p>}
    {
      todos.map(todo =>
       ( !todo.complete   &&  <li  onDoubleClick={()=>{
          deleteTodo(todo.id)
        }} key={todo.id} className='flex  bg-[#F9F9F9] mb-2  p-2  justify-between items-center'>
                    <div className='flex items-center ml-2 '>
                    <input type="checkbox" class=" w-4 h-4  accent-pink-300 md:accent-pink-500" checked={val}  value={complete} onChange={
                      ()=>{
                        checkComplete(todo.id)
                      }
                    }  /> 
                       <label className='ml-4 font-light'>{todo.title}</label>
                    </div>
                    <div className='flex items-baseline text-xl'>
                        <CheckImp id={todo.id} />
                        
                       {/* <AiOutlineStar className='text-[#5A96E3] mr-3'/>  */}
                       {/* <RiDeleteBinLine onClick={
                        ()=>{
                          console.log('clicked')
                          deleteTodo(todo.id)
                        }
                       }
                        className='text-xl cursor-pointer text-[#B70404]'/> */}
                    </div>
         </li>

      ))
    }
        
    </div>
  )
}

export default TodoItem