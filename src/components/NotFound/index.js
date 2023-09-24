import "./index.css";
import notFoundImage from "./not-found.png";

const NotFound = ({ image = notFoundImage }) => {
  return (
    <div className="not-found-container">
      <img className="not-found-image" src={image} alt="not-found" />
    </div>
  );
};

export default NotFound;
