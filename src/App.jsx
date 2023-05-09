import { json } from 'react-router-dom';
import './App.css'

function App() {
const  handleaddUser =(event)=>{
  event.preventDefault();
  const form=event.target;
  const name=form.name.value;
  const email=form.email.value;
  const user={name,email}
  console.log("new user ",user);
  fetch('http://localhost:5000/user',{
    method: "POST", // or 'PUT'
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(user),
  })
     .then(res=>res.json())
     .then(data=>{
      console.log(data);
      if(data.insertedId){
        alert('user added successfully');
        form.reset();
      }
    
    })
}
  

  return (
    <>
      <h1>Simple CURD System</h1>
      <form onSubmit={handleaddUser} >
        <input type="text" name='name' id=''/><br />
        <input type="text" name='email' id=''/><br />
        <input type="submit" value="Add User" id=''/><br />
      </form>
    </>
  )
}

export default App
