import './footer.css'
import SwiperCore, {Autoplay} from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-creative";
import { Swiper, SwiperSlide } from "swiper/react";
import { useContext } from "react";
import { DishContext } from "../../Context/DishContext";
import {BsFacebook} from 'react-icons/bs'
import { BsYoutube } from "react-icons/bs";
import { BsTwitter } from "react-icons/bs";
import {GiRotaryPhone} from "react-icons/gi"
import {AiOutlineGlobal} from "react-icons/ai"
import {FiMail} from "react-icons/fi"
const Footer = () => {
    const {food} = useContext(DishContext)
    SwiperCore.use([Autoplay]);
    return ( 
       <div className='footer-page'>
         <div className='swiper'>
         <Swiper
          loop={true}
          grabCursor={true}
          effect={"creative"}
          creativeEffect={{
            prev: {
              shadow: true,
              translate: [0, 0, -400],
            },
            next: {
              translate: ["100%", 0, 0],
            },
          }}
          centeredSlides={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
        >
          {food.map((item,index)=>{
            return(
                <SwiperSlide key={index}><img className="image-popular" src={item.image} alt={item.title} /></SwiperSlide>
            )
          })}
        </Swiper>
         </div>
         <div className='contact'>
          <p><FiMail/> Email:nagi.kusan1234@gmail.com </p>
          <p><GiRotaryPhone/> Phone : +84 111 111 111</p>
          <p><AiOutlineGlobal/> Website : recipefood2022.netlify.app</p>
         </div>
         <div className='logo-icon'>
         <a href="facebook.com"><BsFacebook className="contact-icon" /></a> <br />
          <a href="youtube.com"><BsYoutube className="contact-icon"/></a><br />
          <a href="https://twitter.com/"><BsTwitter className="contact-icon"/></a><br />
         </div>
       </div>
     );
}
 
export default Footer;
