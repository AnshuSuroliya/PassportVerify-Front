import { useDispatch, useSelector } from "react-redux";
import {Menu, Transition } from '@headlessui/react'
import { Fragment } from "react";
import { Link, useNavigate } from "react-router-dom";
import { loginUser, logout } from "../../User/reducers/Auth";
const Nav=()=>{
        const navigate=useNavigate();
        const dispatch=useDispatch();
       const jwt=localStorage.getItem("jwt");
        
        const handleLogout=()=>{
               dispatch(logout());
                
        }
        const handleClick=()=>{
          if(jwt==null){
            navigate("/login");
          }
          else navigate("/verification");
        }

return(
<div className="bg-stone-700 fixed top-0 w-full z-10">
        <div className="w-full  h-16 sm:p-2">
            
               <div className="inline w-full sm:m-0">
                    <h2 className="mt-1 ml-6 text-2xl text-white font-bold hidden sm:inline float-left font-sans">PassportPro</h2>
                    {jwt ?
                     <Menu as="div" className="ml-3 float-right mt-1 mr-6">
                     <div>
                       <Menu.Button className="flex rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                       <svg className="w-10 h-10 text-white dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
    <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z"/>
  </svg>
                       </Menu.Button>
                     </div>
                     <Transition
                       as={Fragment}
                       enter="transition ease-out duration-100"
                       enterFrom="transform opacity-0 scale-95"
                       enterTo="transform opacity-100 scale-100"
                       leave="transition ease-in duration-75"
                       leaveFrom="transform opacity-100 scale-100"
                       leaveTo="transform opacity-0 scale-95"
                     >
                       <Menu.Items className="absolute right-0 z-10 mt-2 w-32 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                         <Menu.Item>
                           
                             <Link
                               to="/"
                              onClick={handleLogout}
                               className= 'block px-4 py-2 text-sm text-gray-700'
                             >
                               Logout
                             </Link>
                         </Menu.Item> 
                         </Menu.Items>
                </Transition>
                </Menu> 
                                :
                    <button className="bg-stone-950 rounded-full px-8 py-2 mx-5 text-white float-right font-sans mt-1 font-bold" onClick={()=>navigate("/login")}>Login</button>
                    
                     }
                    {/* <Link className="mt-2 mx-5 text-lg text-white font-bold float-right font-sans" to="/">Contact</Link> */}
                    <button className="mt-2 mx-5 text-lg text-white font-bold float-right font-sans" onClick={handleClick}>Verify</button>
                    <Link className="mt-2 mx-5 text-lg text-white font-bold float-right font-sans" to="/">Home</Link>

                   
                   
               </div>
            
           
        </div>
       
        </div>
);
}
export default Nav;