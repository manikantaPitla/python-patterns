import { Component } from "react";
import { Link } from "react-router-dom";
import { v4 } from "uuid";
import "./index.css";

const sideBarLinksList = [
  { id: v4(), to: "/", icon: "fa-solid fa-house", text: "Home" },
  { id: v4(), to: "/patterns", icon: "fa-brands fa-python", text: "Patterns" },
  { id: v4(), to: "/contact", icon: "fa-solid fa-envelope", text: "Contact" },
  { id: v4(), to: "/about", icon: "fa-solid fa-user", text: "About" },
];

class Sidebar extends Component {
  state = { activeTabId: null, isModeDark: true };

  componentDidMount() {
    this.getLocalStorage();
    this.checkActiveTab();
    this.intervalID = setInterval(this.checkActiveTab, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.intervalID);
  }

  checkActiveTab = () => {
    const currentPathname = window.location.pathname;
    const activeLink = sideBarLinksList.find(
      (link) => link.to === currentPathname
    );

    if (activeLink) {
      this.setState({ activeTabId: activeLink.id });
    }
  };

  onClickBackBtn = () => {
    const { resizeMenuBar } = this.props;
    resizeMenuBar();
  };

  changePageTheme = () => {
    this.setState(
      (prevState) => ({ isModeDark: !prevState.isModeDark }),
      () => {
        this.setInLocalStorage();
        this.getLocalStorage();
      }
    );
  };

  getLocalStorage = () => {
    const pageTheme = localStorage.getItem("isModeDark");
    const page = document.querySelector(".App");
    if (JSON.parse(pageTheme)) {
      page.classList.add("dark-mode");
    } else {
      page.classList.remove("dark-mode");
    }
    this.setState({ isModeDark: JSON.parse(pageTheme) });
  };

  setInLocalStorage = (mode) => {
    const { isModeDark } = this.state;
    localStorage.setItem("isModeDark", JSON.stringify(isModeDark));
  };

  onClickLink = (activeId) => {
    this.setState({ activeTabId: activeId });
  };

  ToggleFilterMenu = () => {
    const filterContainer = document.getElementById("filterContainer");
    filterContainer.classList.toggle("open-filter-menu");
  };

  render() {
    const { activeTabId, isModeDark } = this.state;
    return (
      <>
        <div
          className="d-md-none d-none"
          id="sideBarBackBlur"
          onClick={this.onClickBackBtn}
        ></div>
        <div className="sidebar shadow-md-2" id="sidebar">
          <div>
            <div
              className="back-btn-container d-md-none"
              onClick={this.onClickBackBtn}
            >
              <i className="fa-solid fa-angle-left back-icon"></i>
              <h1 className="back-text">Back</h1>
            </div>
            {sideBarLinksList.map((each) => (
              <Link
                key={each.id}
                className={`sidebar-link-item ${
                  each.id === activeTabId ? "activeTab" : null
                }`}
                to={each.to}
                onClick={() => this.onClickLink(each.id)}
              >
                <i className={`${each.icon} sidebar-link-icon`}></i>
                <p className="sidebar-link-name">{each.text}</p>
              </Link>
            ))}
          </div>

          <div
            className="dark-mode-container sidebar-link-item"
            onClick={this.changePageTheme}
          >
            <i
              className={`fa-solid ${
                isModeDark ? "fa-sun" : "fa-moon"
              } sidebar-link-icon`}
            ></i>
            <p className=" sidebar-link-name">
              {isModeDark ? "Light Mode" : "Dark Mode"}
            </p>
          </div>
        </div>
      </>
    );
  }
}

export default Sidebar;
