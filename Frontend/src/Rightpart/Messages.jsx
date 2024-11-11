import React from 'react'
import Message from './Message'
const Messages = () => {
  return (
    <div className="overflow-y-auto" style={{ maxHeight: "500px" }}>
      <Message/>
      <Message/>
      <Message/>
      <Message/>
    </div>
  )
}

export default Messages
