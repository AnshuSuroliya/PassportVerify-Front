import { useEffect, useState } from "react";
import { useDispatch } from "react-redux"
import { Link, useNavigate } from "react-router-dom";
import { verifyPassport } from "../../User/reducers/Verify";
import { authenticateWithGoogle, handleCallback, listFiles } from "../../User/Gdrive";
import useDrivePicker from "react-google-drive-picker";
import axios from "axios";
const Verification=()=>{
    const dispatch=useDispatch();
    const [data,setData]=useState({});
    const navigate=useNavigate();
    const handleChange=(e)=>{
        setData({...data,[e.target.name]:e.target.value});
    }
    // const handleLogin = () => {
    //     authenticateWithGoogle();
    //   };
     
      const handleCallbackRequest = async () => {
        const urlParams = new URLSearchParams(window.location.search);
        const code = urlParams.get('code');
        const auth = await handleCallback(code);
        const files = await listFiles(auth);
        console.log(files);
    };
    const handleSubmit=(e)=>{
        e.preventDefault();
        dispatch(verifyPassport(data));
        navigate("/");
    }
     
    const [openPicker,authResponse]=useDrivePicker();
    const handleClick=()=>{
        openPicker({
            clientId:"414452798257-2upm2aj9ai85a3ttccnhj9n5b1lq8lod.apps.googleusercontent.com",
            developerKey:"AIzaSyDV8GcHfZqQBxLZdo6evrfjhsqMRftqhTA",
            viewId:"DOCS",
            showUploadView:true,
            showUploadFolders:true,
            supportDrives:true,
            multiselect:true
        })
    }
return(
    <div>
        <div className="flex justify-center mt-24">
                <h2 className="text-2xl font-sans font-bold">Register Passport</h2>
                </div>
            <div className="flex justify-center mx-auto mt-4 w-96 bg-gray-200">
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
            <input name="address" className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none " type="text" placeholder="Address"  onChange={handleChange}/>
                </div>
                <div className="flex items-center border-b border-teal-500 py-2">
            <input name="age" className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none " type="number" placeholder="Age"  onChange={handleChange}/>
                </div>
                <div className="flex items-center border-b border-teal-500 py-2">
            <input name="passportNumber" className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none " type="number" placeholder="Passport Number"  onChange={handleChange}/>
                </div>
                <div className="flex justify-center mt-4">
                    <Link onClick={handleClick}><img src="https://th.bing.com/th/id/OIP.lgdmCc6UHAWc27h0o4tSbwHaHa?rs=1&pid=ImgDetMain" height="50" width="50"/></Link>
                </div>
                <div className="flex justify-center mt-8">
                <button class="flex-shrink-0 bg-teal-500 hover:bg-teal-700 border-teal-500 hover:border-teal-700 text-sm border-4 text-white py-1 px-2 rounded" type="submit">
                    Register
                </button>
                </div>
            </form>
                
            </div>
    </div>
)
}
export default Verification;