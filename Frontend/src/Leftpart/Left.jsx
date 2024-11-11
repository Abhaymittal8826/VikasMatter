import React from 'react'
import Search from './Search'
import Users from './Users'
import Logout from './Logout'
const Left = () => {
  return (
  <>
 
  <div className='w-1/4 bg-zinc-950'>
  <Search/>
  <Users/>
  <Logout/>
  </div>
  </>
  )
}

export default Left
