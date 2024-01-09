import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Content=()=>{
    const navigate=useNavigate();
    const jwt=localStorage.getItem("jwt");
    const handleClick=()=>{
        if(jwt==null){
            navigate("/login");
        }
        else navigate("/verification");
    }
return(
    <div className="w-full h-full px-5 py-36">
    <div className="w-96 h-65">
        <h1 className="text-7xl text-white font-serif">Welcome to PassportPro</h1>
        </div> 
        <p className="text-white text-lg font-serif mt-4 font-bold">Fast,reliable and secure passport verification online.</p>
        <button className="rounded-full bg-stone-950 px-10 py-3 text-white mt-4 font-bold" onClick={handleClick}>Start Now</button>
</div>
);
}
export default Content;