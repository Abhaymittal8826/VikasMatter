import React from 'react'
import { FaSearch } from "react-icons/fa";
const Search = () => {
  return (
    <div className='flex gap-2'>
 <div className='w-full px-2   rounded-full flex bg-slate-900 m-2'>
 <input
 className=' border bg-slate-900 outline-none border-black text-white py-1 px-5 m-2 w-10/12'
 placeholder='Search'
 type='search'
 />
<button className='text-1xl'> <FaSearch /></button>
 </div>
 <div>
 
 </div>
 
    </div>
  )
}

export default Search
