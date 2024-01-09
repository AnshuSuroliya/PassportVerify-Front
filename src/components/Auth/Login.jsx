import { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { loginUser } from "../../User/reducers/Auth";
import Nav from "../Navbar/Nav";

const Login=()=>{
    const dispatch=useDispatch();
    const navigate=useNavigate();
    const [data,setData]=useState({});
    const handleChange=(e)=>{
        setData({...data,[e.target.name]:e.target.value})
    }
    const handleSubmit=(e)=>{
        e.preventDefault();
        dispatch(loginUser(data));
        setTimeout(()=>{
            navigate("/");
        },1000)
        
    }
    return(
        <div className="bg-gradient-to-br from-gray-300 to-gray-100 h-screen w-full p-1">
           
               
                
            <div className="flex justify-center mx-auto w-96 h-96 bg-white mt-24 shadow-2xl rounded-md">
            
                <form className="w-60 max-w-sm mt-4" method="POST" onSubmit={handleSubmit}>
                <h2 className="text-3xl font-sans font-bold font-sans flex justify-center mb-6">Login</h2>
                    <div className="flex justify-center mb-4">
                <svg className="w-10 h-10 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
    <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z"/>
  </svg></div>
  <div class="flex items-center border-b border-teal-500 py-2">
      
            <input name="email" className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-rounded outline-blue-500 text-center" type="email" placeholder="Email" onChange={handleChange}/>
                </div>
                <div class="flex items-center border-b border-teal-500 py-2">
            <input name="password" className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-rounded outline-blue-500 text-center" type="password" placeholder="Password" onChange={handleChange}/>
                </div>
                <div className="flex justify-center mt-8">
                <button className="flex-shrink-0 bg-teal-500 hover:bg-teal-700 border-teal-500 hover:border-teal-700 text-sm border-4 text-white py-1 px-2 rounded" type="submit">
                    Sign In
                </button>
                </div>
                <p className="text-center mt-5">Don't Have an Account? <Link className="font-bold font-sans text-emerald-400" to="/register">Sign Up</Link></p>
                </form>
                
            </div>
        </div>
    )
}
export default Login;