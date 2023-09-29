import "./index.css";
import notFoundImg from "../../images/not-found.png";

const NotFound = ({ image = notFoundImg }) => {
  return (
    <div className="not-found-container">
      <img className="not-found-image" src={image} alt="not-found" />
    </div>
  );
};

export default NotFound;
