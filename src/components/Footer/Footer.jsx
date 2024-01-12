import { Link } from "react-router-dom";

const Footer=()=>{
    return(
        <div className="w-full px-3 py-10 bg-stone-700">
            
            <div className="grid grid-cols-1 gap-x-24 sm:grid-cols-2 lg:grid-cols-4">
                <div className="w-36 h-24">
                    <h2 className="font-bold font-sans text-xl text-stone-400">PassportPro</h2>
                   
                    <p className="font-bold font-sans text-lg text-stone-400">Secure Journey guaranteed</p>
                </div>
                <div className="w-24 h-32">
                    <h2 className="mb-3 font-bold text-stone-400 text-xl">Services</h2>

                    <div><Link className="text-white hover:underline">Individual</Link></div>
                    <div><Link className="text-white hover:underline">Support</Link></div>
                    <div><Link className="text-white hover:underline">Pricing</Link></div>
                   <div> <Link className="text-white hover:underline">Corporate</Link></div>
                </div>
                {/* <div className="w-24 h-32 ">
                    <h2 className="mb-3 font-bold">Legal Information</h2>

                    <div><Link>Terms And Condition</Link></div>
                    <div><Link>Privacy Policy</Link></div>
                    <div><Link>Copyright Policy</Link></div>
                   <div> <Link>Hyperlinking Policy</Link></div>
                </div> */}
                <div className="w-24 h-32">
                    <h2 className="mb-3 font-bold text-stone-400 text-xl">Support</h2>

                    <div><Link className="text-white hover:underline">FAQs</Link></div>
                    <div><Link className="text-white hover:underline">Tutorials</Link></div>
                    <div><Link className="text-white hover:underline">Guides</Link></div>
                </div>
                <div className="w-32 h-32">
                    <h2 className="mb-3 font-bold text-stone-400 text-xl">Contact Us</h2>

                    <div><p className="text-white hover:underline">+91-9116268890</p></div>
                   <div className="flex flex-row"> <Link><svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="24" height="24" viewBox="0 0 24 24">
    <path d="M12,2C6.477,2,2,6.477,2,12c0,5.013,3.693,9.153,8.505,9.876V14.65H8.031v-2.629h2.474v-1.749 c0-2.896,1.411-4.167,3.818-4.167c1.153,0,1.762,0.085,2.051,0.124v2.294h-1.642c-1.022,0-1.379,0.969-1.379,2.061v1.437h2.995 l-0.406,2.629h-2.588v7.247C18.235,21.236,22,17.062,22,12C22,6.477,17.523,2,12,2z"></path>
</svg></Link><Link><svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="30" height="30" viewBox="0 0 30 30">
<path d="M26.37,26l-8.795-12.822l0.015,0.012L25.52,4h-2.65l-6.46,7.48L11.28,4H4.33l8.211,11.971L12.54,15.97L3.88,26h2.65 l7.182-8.322L19.42,26H26.37z M10.23,6l12.34,18h-2.1L8.12,6H10.23z"></path>
</svg></Link><Link><svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="24" height="24" viewBox="0 0 24 24">
    <path d="M19,3H5C3.895,3,3,3.895,3,5v14c0,1.105,0.895,2,2,2h14c1.105,0,2-0.895,2-2V5C21,3.895,20.105,3,19,3z M9,17H6.477v-7H9 V17z M7.694,8.717c-0.771,0-1.286-0.514-1.286-1.2s0.514-1.2,1.371-1.2c0.771,0,1.286,0.514,1.286,1.2S8.551,8.717,7.694,8.717z M18,17h-2.442v-3.826c0-1.058-0.651-1.302-0.895-1.302s-1.058,0.163-1.058,1.302c0,0.163,0,3.826,0,3.826h-2.523v-7h2.523v0.977 C13.93,10.407,14.581,10,15.802,10C17.023,10,18,10.977,18,13.174V17z"></path>
</svg></Link><Link><svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="24" height="24" viewBox="0 0 24 24">
    <path d="M21,5c0,0-3-1-9-1S3,5,3,5s-1,3-1,7s1,7,1,7s3,1,9,1s9-1,9-1s1-3,1-7S21,5,21,5z M10,15.464V8.536L16,12L10,15.464z"></path>
</svg></Link>
                </div>   
                </div>
            </div>
            <div class="w-full p-4 text-center mt-16">
    
    <Link
      className="text-white dark:text-neutral-400 hover:underline"
      href="/">© 2024 PassportPro</Link>
     <Link
      className="text-white dark:text-neutral-400 mx-6 hover:underline"
      href="/">Terms of Use and Privacy</Link>
       <Link
      className="text-white dark:text-neutral-400 hover:underline mr-6"
      href="/">Careers</Link>
       <Link
      className="text-white dark:text-neutral-400 hover:underline"
      href="/">Cookie Preferences</Link>
  </div>
        </div>
    );
}
export default Footer;