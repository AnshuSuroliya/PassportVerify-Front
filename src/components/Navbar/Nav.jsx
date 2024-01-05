import { Link, useNavigate } from "react-router-dom";
const Nav=()=>{
        const navigate=useNavigate();
return(
<div>
        <div className="w-full  h-24 sm:p-5 py-3">
            
               <div className="inline w-full">
                    <h2 className="mt-3 text-2xl text-white font-bold hidden sm:inline float-left font-sans">PassportPro</h2>
                    <button className="bg-lime-500 rounded-full px-6 mt-2 py-2 mx-5 text-white float-right font-sans" onClick={()=>navigate("/login")}>Login</button>
                    
                    <Link className="mt-3 mx-5 text-lg text-white font-bold float-right font-sans" to="/">Contact</Link>
                    <Link className="mt-3 mx-5 text-lg text-white font-bold float-right font-sans" to="/">Home</Link>

                   
                   
               </div>
            
           
        </div>
       
        </div>
);
}
export default Nav;