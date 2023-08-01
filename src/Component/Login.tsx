import React, { useEffect, useState } from 'react'
import axios from 'axios';
import Dashboard from './Dashboard';
import { useNavigate } from 'react-router-dom';
import { login } from '../Services/servicesApi';
const Login = () => {
  const navigate = useNavigate();

  const [state, setState] = useState({
    username: "",
    password: ""
  });
  const handleInputChange = (event:any) => {
    const { name, value } = event.target;
    setState((prevProps) => ({
      ...prevProps,
      [name]: value
    }));
  };

  async function handleSubmit (event:any) {
    event.preventDefault();
    console.log("state",state);

    try{
      const response = await login({
        username:state.username,
        password:state.password,
        
      })
      if (localStorage.getItem('user info')) {
        // Redirect to Dashboard if access token is present
        navigate('/dashboard');
      } 
       } catch(error: any) {
console.log("error",error);

    }
  };

  return (
    <div>
    <h1> Login!</h1>

<form onSubmit={handleSubmit}>
        <div className="form-control">
          <label>Email</label>
          <input
            type="text"
            name="username"
            value={state.username}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-control">
          <label>Password</label>
          <input
            type="password"
            name="password"
            value={state.password}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-control">
          <label></label>
          <button type="submit">Login</button>
        </div>
      </form>


  </div>
  )
}

export default Login
