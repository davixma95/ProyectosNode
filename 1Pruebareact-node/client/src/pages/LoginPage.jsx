import { useState } from "react"
import { loginRequest } from "../api/auth";

const LoginPage = () => {
  
  const [loginData, setLoginData] = useState({
    email:'',
    password:''
  });

    return (
    <>
        <div>Login Page</div>
        <form onSubmit={event => handleSubmit(event, loginData)}>
            <div>
                <label htmlFor="email">Email</label>
                <input
                type='text'
                id='email'
                onChange={event => setLoginData({...loginData, email: event.target.value})}
                ></input>
            </div>
            <div>
                <label htmlFor="password">password</label>
                <input
                type='text'
                id='password'
                onChange={event => setLoginData({...loginData, password: event.target.value})}
                ></input>
            </div>
            <button >Login</button>
        </form>
    </>
  )
}

const handleSubmit = async (event, loginData) => {
    event.preventDefault();
    try{
        await loginRequest(loginData);
    }catch(error){
        console.error(error)
    }
}

export default LoginPage