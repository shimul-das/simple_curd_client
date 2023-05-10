import React from 'react'
import { useLoaderData } from 'react-router-dom'

const Update = () => {
    const useloaddata=useLoaderData()
    const handleupdate=(event)=>{
        event.preventDefault()
        const form=event.target;
        const email=form.email.value;
        const name=form.name.value;
        console.log(email,name)
        const updatedUser={name,email};

        fetch(`http://localhost:5000/user/${useloaddata._id}`,{
            method:'PUT',
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(updatedUser)
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data)
            if(data.modifiedCount>0){
                alert("updated successfully")
            }
        })
    }
  return (
    <div>
        <h1>Profile page user name : {useloaddata.name}</h1>
        <form onSubmit={handleupdate} >
            <input type="text" defaultValue={useloaddata.name} name='name' id='' /><br></br>
            <input type="email" defaultValue={useloaddata.email} name='email' id='' /><br></br>
            <input type="submit" value="update" id='' /><br></br>
        </form>
    </div>
  )
}

export default Update