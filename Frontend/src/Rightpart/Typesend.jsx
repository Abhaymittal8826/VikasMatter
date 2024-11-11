import React from 'react'
import { IoSend } from "react-icons/io5";
import { IoIosAttach } from "react-icons/io";
const Typesend = () => {
  return (
    <div className='flex my-5 mx-16'>
        <button className='text-2xl bg-black'><IoIosAttach /></button>
      <input type="text" placeholder="Type here" className="input   text-white bg-black input-bordered w-3/4" />
    <button className='py-2 px-4  text-2xl bg-black'><IoSend /></button>
    </div>
  )
}


export default Typesend
