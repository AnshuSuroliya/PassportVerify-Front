
import Footer from "../Footer/Footer";
import Nav from "../Navbar/Nav";
import Content from "./Content";
import "./style.css"
const Home=()=>{
    return(
        <div>
        <div className="w-full h-full top-0 left-0 -z-1 custom-background">
        <Nav/>
        <Content/>
        </div>
        <Footer/>
        </div>
    )
}
export default Home;