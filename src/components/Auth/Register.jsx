import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { registerUser } from "../../User/reducers/Auth";
import Nav from "../Navbar/Nav";

const Register=()=>{
    const [data,setData]=useState({});
    const dispatch=useDispatch();
    const navigate=useNavigate();
    const handleChange=(e)=>{
        setData({...data,[e.target.name]:e.target.value})
    }
    const handleSubmit=(e)=>{
        e.preventDefault();
        console.log(data);
        dispatch(registerUser(data));
        navigate("/login");
    }
return(
<div>
      
            <div className="flex justify-center mt-24">
                <h2 className="text-2xl font-sans font-bold">Register</h2>
                </div>
            <div className="flex justify-center mx-auto mt-4 w-96 h-80 bg-gray-200">
                <form className="w-80 max-w-sm mt-4" method="POST" onSubmit={handleSubmit}>
  <div class="flex items-center border-b border-teal-500 py-2">
            <input name="firstName" className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none" type="text" placeholder="First Name" onChange={handleChange}/>
                </div>
                <div className="flex items-center border-b border-teal-500 py-2">
            <input name="lastName" className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none " type="text" placeholder="Last Name"  onChange={handleChange}/>
                </div>
                <div class="flex items-center border-b border-teal-500 py-2">
            <input name="email" className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none" type="email" placeholder="Email"  onChange={handleChange}/>
                </div>
                <div className="flex items-center border-b border-teal-500 py-2">
            <input name="phoneNumber" className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none" type="number" placeholder="Contact Number"  onChange={handleChange}/>
                </div>
                <div className="flex items-center border-b border-teal-500 py-2">
            <input name="password" className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none " type="password" placeholder="Password"  onChange={handleChange}/>
                </div>
                <div className="flex justify-center mt-8">
                <button class="flex-shrink-0 bg-teal-500 hover:bg-teal-700 border-teal-500 hover:border-teal-700 text-sm border-4 text-white py-1 px-2 rounded" type="submit">
                    Sign Up
                </button>
                </div>
            </form>
                
            </div>
            
</div>
);
}
export default Register;