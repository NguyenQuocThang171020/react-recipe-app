import Dish from "../Dish/Dish";
import Logout from "../Logout/Logout";
import Navbar from "../Navbar/Navbar";
import Footer from '../Footer/Footer'
import './home.css'

const Home = () => {

  return (
    <div className="home-page">
        <div className="caption">
            <Logout />
        </div>
        <div className="navbar">
             <Navbar />
        </div>
        <div className="dish">
             <Dish/>
        </div>
        <div className="footer">
            <Footer/>
        </div>
    </div>
  );
};

export default Home;
