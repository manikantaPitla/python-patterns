import { Route, Switch } from "react-router-dom";
import { Component } from "react";
import Home from "../Home";
import About from "../About";
import Contact from "../Contact";
import NotFound from "../NotFound";
import Patterns from "../Patterns";
import "./index.css";

class MainContent extends Component {
  render() {
    const { searchInput } = this.props;

    return (
      <div className="main-content p-3 p-md-4">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route
            exact
            path="/patterns"
            render={(props) => (
              <Patterns {...props} searchInput={searchInput} />
            )}
          />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/about" component={About} />
          <Route component={NotFound} />
        </Switch>
      </div>
    );
  }
}

export default MainContent;
