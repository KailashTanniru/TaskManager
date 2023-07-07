import React, { useContext, useRef, useState } from 'react'
import {  AiOutlineStar, AiFillStar } from 'react-icons/ai'
import { GlobalContext } from '../../context/GlobalState';
const CheckImp = (id) => {
    const [checked,setStatus]  = useState(false);
    // const { changeStatus } = useContext(GlobalContext)

    function changeCheck(){
      setStatus(!checked)
        // changeStatus(id);
        console.log("hi")
    }

  return (
     <>
     { 
      !checked ? <span  onClick={()=> (
       setStatus(!checked)
      )} ><AiOutlineStar className='text-[#5A96E3] mr-5'/></span> : <span onClick={()=> (
        setStatus(!checked)
      )} ><AiFillStar  className='text-[#5A96E3] mr-5'/></span> 
      }
     </>
  )
}

export default CheckImp