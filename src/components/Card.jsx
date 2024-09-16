import { useNavigate } from "react-router-dom";
import "./Ncard.css";
import {useStore} from "../services/lib/zustand"
const Card = ({ product,handleClick }) => {
  const navigate = useNavigate();
  const click = () => {
    handleClick(product._id)
  };
  return (
    <div className="t-shirt" onClick={click}>
      <img
        src={`data:${product.image.fileType};base64,${product.image.fileContent}`}
        alt="T-shirt with Tape Details"
      />
      <p className="p8">{product.title}</p>
      <p id="ratii">{product.rating}</p>
      <p id="product">{product.price}</p>
    </div>
    
  );
};

export default Card;
