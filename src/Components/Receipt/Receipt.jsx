import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Logout from "../Logout/Logout";
import Navbar from "../Navbar/Navbar";
import Footer from '../Footer/Footer'
import "./receipt.css";
const Receipt = () => {
  const param = useParams();
  const [detail, setDetail] = useState({});
  const [activeTab, setActiveTab] = useState("instructions");
  const getDetail = async () => {
    const res = await axios.get(
      `https://api.spoonacular.com/recipes/${param.id}/information?apiKey=94c9864dcf114f608095504ce376bf7f`
    );
    const data = await res.data;
    setDetail(data);
  };
  useEffect(() => {
    getDetail();
  }, [param.id]);
  return (
    <div className="home-page">
      <div className="caption">
        <Logout />
      </div>
      <div className="navbar">
        <Navbar />
      </div>
      <div className="detail">
        <div className="infomation-detail">
          <p className="title-receipt">{detail.title}</p>
          <img className="img-receipt" src={detail.image} alt={detail.title} />
        </div>
        <div className="receipt">
          <div className="button-receipt">
          <button
            className={activeTab === "instructions" ? "active" : ""}
            onClick={() => setActiveTab("instructions")}
          >
            Instructions
          </button>
          <button
            className={activeTab === "ingredients" ? "active" : ""}
            onClick={() => setActiveTab("ingredients")}
          >
            Ingredients
          </button>
          </div>
          <div className="text-receipt">
          {activeTab === "instructions" && (
            <div className="instructions-box">
              <p className="instruction-text" dangerouslySetInnerHTML={{ __html: detail.summary }}></p>
              <br />
              <p className="instruction-text"
                dangerouslySetInnerHTML={{ __html: detail.instructions }}
              ></p>
            </div>
          )}
          {activeTab === "ingredients" && (
            <ul className="ingredients-box">
              {detail.extendedIngredients.map((ingredient) => {
                return <li className="ingredients-text" key={ingredient.id}>{ingredient.original}</li>;
              })}
            </ul>
          )}
          </div>
        </div>
      </div>
      <div className="footer">
        <Footer />
      </div>
    </div>
  );
};

export default Receipt;
