import './dish.css'
const DishCard = (props) => {
    const {data} = props
    return (  
        <div className="dishcard-page">
                <img className='image-dishcard' src={data.image} alt={data.title} />
                <p className='title-dishcard'>{data.title}</p>
                <div className="gradient"></div>
        </div>
        
    );
}
 
export default DishCard;