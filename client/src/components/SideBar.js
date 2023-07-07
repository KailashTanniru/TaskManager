import React from 'react'
import { LiaHomeSolid } from "react-icons/lia";
import { BsSun,BsStar } from "react-icons/bs";
import { SlCalender } from "react-icons/sl";
import { AiOutlineCheck } from "react-icons/ai";
import { Link, Outlet } from "react-router-dom"

import Tasks from './Tasks';
const SideBar = () => {
  return (
    <>


    <h2 className="ml-4 mt-2">Mytodo App</h2>
    <div className='mt-24'>
   
    
      
       <Link to='/'><Tasks iconProp={<BsSun  className='text-xl'/>}   text="My Day"/></Link>
  
      <Link to='/tasks' ><Tasks iconProp={<LiaHomeSolid  className='text-xl'/>}   text="Tasks"/></Link> 
       <Link to='/important'><Tasks iconProp={<BsStar className='text-xl'/>}   text="Important" /></Link>
       <Link to='/completed'><Tasks iconProp={<AiOutlineCheck className='text-xl'/>}  text="Completed"/></Link>
       {/* <Tasks iconProp={<SlCalender className='text-xl'/>} count="5"  text="Upcoming" /> */}
      
       
    </div>
    <Outlet />
 </>
  )
}

export default SideBar