
import Footer from "../Footer/Footer";
import Nav from "../Navbar/Nav";
import Body from "./Body";
import Content from "./Content";
import "./style.css"
const Home=()=>{
    return(
        <div className="overflow-x-hidden">
        <div className="w-full h-full top-0 left-0 -z-1 custom-background overflow-hidden">
        <Nav/>
        <Content/>
        </div>
        <Body/>
        <Footer/>
        </div>
    )
}
export default Home;