import { Splide, SplideSlide } from "@splidejs/react-splide";
import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import DishCard from "../Dish/DishCard";
import Logout from "../Logout/Logout";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import './search.css'
const Search = () => {
    const [find,setFind] = useState([])
    const param = useParams();
    const getSearch = async(name)=>{
        const res = await axios.get(`https://api.spoonacular.com/recipes/complexSearch?apiKey=94c9864dcf114f608095504ce376bf7f&query=${name}`)
        const data = await res.data
        setFind(data.results)
    }
    useEffect(()=>{
        getSearch(param.name)
    },[param.name])
    return ( 
        <div className="home-page">
           <div className="caption">
            <Logout />
        </div>
        <div className="navbar">
             <Navbar />
        </div>
        <h1 className="list-food1">List Food</h1>
        <div className="dish-container">
        <Splide options={{
          perPage:4,
          arrows:false,
          pagination:false,
          drag:"free",
          gap: '5rem',
        }}>
            {find.map((item,index)=>{
                return (
                   <SplideSlide key={index} >
                       <Link to={'/detail/'+item.id}> 
                            <DishCard data={item} />
                       </Link>
                  
               </SplideSlide>
                )
            })}
             </Splide>
        </div>
        <h1 className="list-food2">{param.name}</h1>
      <div className="dish-food">
        {find.map((item, index) => {
          return (
              <div className="food-today" key={index}> 
                <Link to={'/detail/'+ item.id}> 
                  <DishCard data={item} />
              </Link>
              </div>
          );
        })}
      </div>
        <div className="footer">
            <Footer/>
        </div>
        </div>
     );
}
 
export default Search;
