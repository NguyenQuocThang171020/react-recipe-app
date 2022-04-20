import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import DishCard from "../Dish/DishCard";
import Logout from "../Logout/Logout";
import Navbar from "../Navbar/Navbar";
import Footer from '../Footer/Footer'
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import './cusine.css'
const Cusine = () => {
    let param = useParams()
    const [cusine,setCusine] = useState([])
    
    const getCusine = async(name)=>{
        const res = await axios.get(`https://api.spoonacular.com/recipes/complexSearch?apiKey=94c9864dcf114f608095504ce376bf7f&cuisine=${name}`)
        const data = await res.data
        setCusine(data.results)
    }
    useEffect(()=>{
     getCusine(param.type);
    },[param.type])
    return ( 
        <div className="cusine-page">
           <div className="caption">
            <Logout />
        </div>
        <div className="navbar">
             <Navbar />
        </div>
        <h1 className="title-type">{param.type}</h1>
        <div className="cusine">
        <Splide options={{
          perPage:4,
          arrows:false,
          pagination:false,
          drag:"free",
          gap: '5rem',
        }}>
            {cusine.map((item,index)=>{
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
        <h1>List Food </h1>
        <div className="dish-food">
            {cusine.map((item,index)=>{
                return (
                    <div className="food-today" key={index}> 
                       <Link to={'/detail/'+item.id}>
                            <DishCard data={item} />
                       </Link>
                       </div>
                )
            })}
        </div>
        <div className="footer">
            <Footer/>
        </div>
        </div>
       
     );
}
 
export default Cusine;
