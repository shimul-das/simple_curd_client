import React from 'react'
import { useLoaderData } from 'react-router-dom'

const Users = () => {
    const users=useLoaderData()
  return (
    <div>
        <h2>{users.length}</h2>
        {
            users.map(u=><p key={u._id}>{u.name}:{u.email}</p>)
        }
    </div>
  )
}

export default Users