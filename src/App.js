import { Component } from "react";
import Navigation from "./components/Navigation";
import ContentBody from "./components/ContentBody";
import ManupulateDataCard from "./components/ManupulateDataCard";
import "./App.css";

class App extends Component {
  state = { isPostCodeOpen: false, searchInput: "" };

  componentDidMount() {
    window.addEventListener("keydown", this.toggleCodePost);
  }

  componentWillUnmount() {
    window.removeEventListener("keydown", this.toggleCodePost);
  }

  onChangeSearchInput = (e) => {
    this.setState({ searchInput: e.target.value });
  };

  toggleCodePost = (event) => {
    if (event.altKey && event.key === "w") {
      this.setState((prevState) => ({
        isPostCodeOpen: !prevState.isPostCodeOpen,
      }));
    }
  };

  resizeSideBar = () => {
    const sidebar = document.getElementById("sidebar");
    const sidebarIcons = document.querySelectorAll(".sidebar-link-icon");
    sidebar.classList.toggle("resize-sidebar-lg");
    sidebarIcons.forEach((each) => {
      each.classList.toggle("icon-margin");
    });
  };

  resizeMenuBar = () => {
    const sidebar = document.getElementById("sidebar");
    const sideBarBackBlur = document.getElementById("sideBarBackBlur");

    sidebar.classList.toggle("resize-sidebar-sm");
    sideBarBackBlur.classList.toggle("sidebar-bg-blur");
  };

  render() {
    const { isPostCodeOpen, searchInput } = this.state;

    return (
      <div className="App">
        {isPostCodeOpen && <ManupulateDataCard />}
        <Navigation
          resizeSideBar={this.resizeSideBar}
          resizeMenuBar={this.resizeMenuBar}
          onChangeSearchInput={this.onChangeSearchInput}
        />
        <ContentBody
          resizeMenuBar={this.resizeMenuBar}
          searchInput={searchInput}
        />
      </div>
    );
  }
}

export default App;
