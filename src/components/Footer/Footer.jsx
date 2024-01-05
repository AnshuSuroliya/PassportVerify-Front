import { Link } from "react-router-dom";

const Footer=()=>{
    return(
        <div className="w-full h-60 px-3 py-10">
            
            <div className="flex flex-row h-32">
                <div className="w-36 h-24">
                    <h2 className="font-bold font-sans text-xl">PassportPro</h2>
                   
                    <p className="font-bold font-sans text-lg">Secure Journey guaranteed</p>
                </div>
                <div className="w-24 h-32 mx-48">
                    <h2 className="mb-3 font-bold">Services</h2>

                    <div><Link>Individual</Link></div>
                    <div><Link>Support</Link></div>
                    <div><Link>Pricing</Link></div>
                   <div> <Link>Corporate</Link></div>
                </div>
                <div className="w-24 h-32">
                    <h2 className="mb-3 font-bold">Legal Information</h2>

                    <div><Link>Terms And Condition</Link></div>
                    <div><Link>Privacy Policy</Link></div>
                    <div><Link>Copyright Policy</Link></div>
                   <div> <Link>Hyperlinking Policy</Link></div>
                </div>
            </div>
            
        </div>
    );
}
export default Footer;