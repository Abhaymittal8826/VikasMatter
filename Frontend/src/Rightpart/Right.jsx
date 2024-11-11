import React from 'react'
import Chatuser from './Chatuser'
import Message from './Message'
import Messages from './Messages'
import Typesend from './Typesend'
const Right = () => {
  return (
    <div className='w-3/4 bg-zinc-900'>
     <div className='w-full  flex justify-center bg-slate-900'>
  
     </div>
         <div className='w-full'>
         <Chatuser/>
           <Messages/>
           <Typesend/>
         </div>
    </div>
  )
}

export default Right
