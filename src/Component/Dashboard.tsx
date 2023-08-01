import React from 'react'
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
    const navigate = useNavigate();

const logoutHandler = () =>{
    localStorage.clear()
    navigate('/');
}
setTimeout(()=>{
logoutHandler()
},1000*60*5)
  return (
    <div>
      <p>Dashboard</p>
      <button onClick={logoutHandler}>Logout</button>
    </div>
  )
}

export default Dashboard
