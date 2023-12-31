import { withRouter, Link } from "react-router-dom";
import "./index.css";

const Home = () => (
  <div className="home-container px-md-4">
    <h1 className="heading text-left text-md-center mb-3">Introduction</h1>
    <p className="para text-left text-md-center">
      Welcome to our website dedicated to Python printing patterns! Here, you
      will find a collection of different patterns From simple shapes like
      squares and rectangles to more complex designs like pyramids and diamonds,
      our website offers a variety of patterns.
    </p>
    <p className="para text-left text-md-center">
      Are you ready to explore the world of Python printing patterns? There you
      go, find the mastering art of Python printing patterns.
    </p>
    <div className="d-flex justify-content-start justify-content-md-center">
      <Link to="/patterns">
        <button className="explore-btn btn shadow-0" type="button">
          Explore
        </button>
      </Link>
    </div>
    <div>
      <hr className="hr-line" />
    </div>
    <div className="avail-patterns-container">
      <h1 className="heading mb-4 text-left text-md-center">
        Avaliable Patterns
      </h1>
      <ul className="avail-list-container">
        <li className="avail-list-item">Square</li>
        <li className="avail-list-item">Rectangle</li>
        <li className="avail-list-item">Triangle</li>
        <li className="avail-list-item">Pyramid</li>
        <li className="avail-list-item">Diamond</li>
      </ul>
    </div>
  </div>
);

export default withRouter(Home);
