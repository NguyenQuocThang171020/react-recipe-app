import { DishContext } from "../../Context/DishContext";
import { useContext } from "react";
import DishCard from "./DishCard";
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import "./dish.css";
import { Link } from "react-router-dom";
const Dish = () => {
  const { product} = useContext(DishContext);
  return (
    <div className="all">
      <h1 className="title-food1"> Popular </h1>
      <div className="dish-container">
        <Splide options={{
          perPage:4,
          arrows:false,
          pagination:false,
          drag:"free",
          gap: '5rem',
        }}>
        {product.map((item, index) => {
          return (
            <SplideSlide key={index} >
              <Link to={'/detail/'+ item.id}> 
                  <DishCard data={item} />
              </Link>
               
            </SplideSlide>
          );
        })}
        </Splide>
      </div>
      <h1 className="title-food2"> Food Today </h1>
      <div className="dish-food">
        {product.map((item, index) => {
          return (
              <div className="food-today" key={index}> 
                <Link to={'/detail/'+ item.id}> 
                  <DishCard data={item} />
              </Link>
              </div>
          );
        })}
      </div>
    </div>
  );
};

export default Dish;
