import React, { useContext, useState } from 'react'
import { AiFillSchedule, AiOutlinePlus } from "react-icons/ai";
import { GlobalContext } from '../../context/GlobalState';



const AddTodo = () => {
  const [todo,setTodo] = useState('');
  const { addTodo } = useContext(GlobalContext)


  const onSubmit = (e) =>{
    e.preventDefault();
    if(todo === ''){
      console.log("Add todo")
      return;
    }
    else{
      const newTodo = {
        id:crypto.randomUUID(),
        title:todo,
        complete:false,
        imp:false,
      }
      addTodo(newTodo)
      setTodo('')

    }
 
    

  }
  return (
    <form onSubmit={onSubmit}>
    <div className='m-8  flex  items-center   p-3 '>
        <div className='w-full mr-5 border-b border-[#3C486B]'>
        <input value={todo} onChange={(e)=> {console.log(todo); setTodo(e.target.value)}}   class="appearance-none bg-transparent border-none text-2xl  w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none" type="text" placeholder="Add Task" aria-label="Full name" />
        
        </div>
        <div className='flex'>
        <div className=' text-[#EEEEEE] text-xl  p-4  m-2 cursor-pointer bg-[#5A96E3] rounded-full '>
          <AiOutlinePlus onClick={onSubmit}/>
           
        </div>  
        <div className=' text-[#EEEEEE] text-xl  p-4  m-2 cursor-pointer bg-[#5A96E3] rounded-full '>
            <AiFillSchedule />
        </div> 
        </div>
    </div>
    </form>
  )
}

export default AddTodo