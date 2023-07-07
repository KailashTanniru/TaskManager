import React from 'react'
const Tasks = ({iconProp,text,action,count}) => {
  return (
   
    <div className='flex  m-1 items-center  p-5 hover:bg-gray-400 cursor-pointer '>
      <div className='flex-auto  md:flex-none w-14'>
         {iconProp}
      </div>
      <div className='flex-auto'>
        <p className='font-serif'>{text}</p>
      </div>
      <div className='flex-auto md:flex-none'>
        <p className='text-gray-500'>{count}</p>
      </div>
    </div>
   
  )
}

export default Tasks