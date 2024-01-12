
import Footer from "../Footer/Footer";
import Nav from "../Navbar/Nav";
import Body from "./Body";
import Content from "./Content";
import "./style.css"
import Caraousel from "../caraousel/Caraousel";
const Home=()=>{
    return(
        <div className="overflow-x-hidden">
        <Nav/>
        {/* <Caraousel/> */}
        <div className="mt-6 bg-img1 w-full bg-no-repeat bg-cover bg-contain">
            <Content/>
        </div>
        <Body/>
        <Footer/>
        </div>
    )
}
export default Home;