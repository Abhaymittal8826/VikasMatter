
  import User from './User'
  import React from 'react'
  import axios from 'axios'
  import useAllGetUsers from '../context/useAllGetUsers'
  const Users = () => {
    const [allUsers,loading] = useAllGetUsers();
    console.log(allUsers);
  console.log("fuewkjrhbdn");
    return (
      <div className='' >
    <div className='w-full px-4 my-4  bg-slate-800 p-2 rounded-md font-semibold "}'>
    Messages
    </div>
    <div className="overflow-y-auto" style={{ maxHeight: "500px" }}>
    <User className="mb-2" />
    <User className="mb-2" />
    <User className="mb-2" />
    <User className="mb-2" />
    <User className="mb-2" />
    <User className="mb-2" />
    <User className="mb-2" />
      
  </div>
      </div>
    )
  }

  export default Users
