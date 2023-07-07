import React, { useContext } from 'react'

import TodoItem from './TodoItem'
import { GlobalContext } from '../../context/GlobalState';
const ShowTodos = ({imp}) => {
   const { todos }  = useContext(GlobalContext);
  return (
    <>
        <div>
            <ul className=' ml-7 mr-7 mt-2 mb-2 rounded '>
               <TodoItem  val={imp}/>
               {/* <li  className='flex   p-2  justify-between items-center'>
                    <div className='flex items-center ml-2 '>
                    <input type="checkbox" class=" w-4 h-4  accent-pink-300 md:accent-pink-500"  /> 
                       <label className='ml-4 font-light'>Learn Reactjs</label>
                    </div>
                    <div className='flex items-center text-xl'>
                       <AiOutlineClose 
                        className='m-1 cursor-pointer text-[#B70404]'/>
                       <AiOutlineStar /> 
                    </div>
         </li> */}
            </ul>
        </div>
    
        
    </>
  )
}

export default ShowTodos