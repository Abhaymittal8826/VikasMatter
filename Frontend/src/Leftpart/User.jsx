import React from 'react'

const User =  ({user}) => {
  if(!user) return null;
  return (
    <div >

 <div className='flex hover:bg-slate-900 duration-200 rounded-lg m-4'>
 <div className="avatar online text-xl">
  <div className="w-16 rounded-full ">
    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMUqPsWz_dcHK1R8XTP-IX6NHYUW4GYQ_cYw&s" />
  </div>
 </div>
<div className='p-5  text-1xl px-8'>
  <div>{user.fullname}</div>
  <div>{user.email}</div>
      
    </div>   
    </div> 
    </div>
  )
}

export default User
