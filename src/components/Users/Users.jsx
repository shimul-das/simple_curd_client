import React, { useState } from 'react'
import { useLoaderData } from 'react-router-dom'

const Users = () => {
    const loadedusers=useLoaderData()
    const [users,setusers]=useState(loadedusers)
    const handleDelete=(_id)=>{
        console.log("delete",_id)
        fetch(`http://localhost:5000/user/${_id}`,{
            method:"DELETE"
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data)
            if(data.deletedCount>0){
                alert("deleted successfully")
                const remaining=users.filter(user=>user._id !==_id)
                setusers(remaining)
            }
        })

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