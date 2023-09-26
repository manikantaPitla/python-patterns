import { Component } from "react";
import { withRouter } from "react-router-dom";
import "./index.css";

class Navigation extends Component {
  state = { isPathPatterns: false };

  resizeSearchBar = () => {
    const searchContainer = document.getElementById("searchContainer");
    const pageName = document.getElementById("pageName");

    searchContainer.classList.toggle("search-resize");
    pageName.classList.toggle("page-title");
  };

  onChangeSearchInputText = (e) => {
    const { onChangeSearchInput } = this.props;
    onChangeSearchInput(e);
  };

  render() {
    const { resizeSideBar, resizeMenuBar } = this.props;

    return (
      <nav className="navigation py-2" id="navigation">
        <div className="nav-left">
          <div
            className="menu-bar-container d-none d-md-flex"
            onClick={resizeSideBar}
          >
            <i className="fa-solid fa-bars menu-bar-icon"></i>
          </div>
          <div
            className="menu-bar-container d-flex d-md-none"
            onClick={resizeMenuBar}
          >
            <i className="fa-solid fa-bars menu-bar-icon"></i>
          </div>
          <h1 className="page-name" id="pageName">
            Python Patterns
          </h1>
        </div>
        <div className="nav-right">
          <div className="search-container" id="searchContainer">
            <input
              type="search"
              className="search-input"
              placeholder="Search"
              onChange={this.onChangeSearchInputText}
            />
            <div
              className="search-icon-container"
              onClick={this.resizeSearchBar}
            >
              <i className="fa-solid fa-search search-icon"></i>
            </div>
          </div>
        </div>
      </nav>
    );
  }
}

export default withRouter(Navigation);
