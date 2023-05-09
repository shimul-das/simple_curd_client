import React from 'react'
import { useLoaderData } from 'react-router-dom'

const Users = () => {
    const users=useLoaderData()
    const handleDelete=(_id)=>{
        console.log("delete",_id)
        fetch(`http://localhost:5000/user/${_id}`,{
            method:"DELETE"
        })
        .then(res=>res.json())
        .then(data=>console.log(data))

    }
  return (
    <div>
        <h2>{users.length}</h2>
        {
            users.map(u=><p key={u._id}>{u.name}:{u.email}: {u._id} <button onClick={()=>handleDelete(u._id)}>X</button></p>)
        }
    </div>
  )
}

export default Users