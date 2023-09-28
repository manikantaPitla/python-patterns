import { Component } from "react";
import PatternItem from "../PatternItem";
import NotFound from "../NotFound";
import Loader from "../Loader";
import noDataImage from "./noData.png";
import { v4 } from "uuid";
import "./index.css";

const filterSelectList = [
  { id: v4(), value: "All Patterns" },
  { id: v4(), value: "Rectangle" },
  { id: v4(), value: "Square" },
  { id: v4(), value: "Triangle" },
  { id: v4(), value: "M Pattern" },
  { id: v4(), value: "Pyramid" },
];

class Patterns extends Component {
  state = {
    patternsDataList: [],
    isLoading: true,
    filteredListType: filterSelectList[0].value,
  };

  componentDidMount() {
    this.getAllPatterns();
  }

  getAllPatterns = async () => {
    try {
      //   const requestUrl = "https://expensive-pear-squirrel.cyclic.cloud/";
      const requestUrl = "https://python-patterns-server.onrender.com/";

      const response = await fetch(requestUrl);
      const data = await response.json();
      const patternList = data.data;

      const updatedList = patternList.map((each) => ({
        id: each.id,
        codeType: each.code_type,
        codeDescription: each.code_description,
        codeHint: each.code_hint,
        codeInput: each.code_input,
        codeOutput: each.code_output,
        code: each.code,
      }));

      this.setState({
        patternsDataList: updatedList,
        isLoading: false,
      });
    } catch (Err) {
      console.log(Err.message);
    }
  };

  filterPatternsListType = (e) => {
    this.setState({ filteredListType: e.target.value });
  };

  getFilteredList = () => {
    const { patternsDataList, filteredListType } = this.state;
    let filteredList = [];

    switch (filteredListType) {
      case filterSelectList[1].value:
      case filterSelectList[2].value:
      case filterSelectList[3].value:
      case filterSelectList[4].value:
      case filterSelectList[5].value:
        filteredList = patternsDataList.filter((each) =>
          each.codeType.toLowerCase().includes(filteredListType.toLowerCase())
        );
        break;
      default:
        filteredList = patternsDataList;
        break;
    }

    return filteredList;
  };

  filterSearchInput = () => {
    const { searchInput } = this.props;

    const filteredList = this.getFilteredList().filter((each) =>
      each.codeType.toLowerCase().includes(searchInput.toLowerCase())
    );
    return filteredList;
  };

  renderSpinner = () => (
    <div className="loading-spinner-container">
      <Loader w="40" />
    </div>
  );

  render() {
    const { isLoading, filteredListType } = this.state;

    const filteredPatternsList = this.filterSearchInput();

    return (
      <div className="patterns-container">
        <div
          className="filter-container"
          id="filterContainer"
          onClick={this.ToggleFilterMenu}
        >
          <div className="d-flex align-items-center">
            <i className="fa-solid fa-sliders mx-2"></i>
            <select
              className="form-control shadow-0 para filter-select-container"
              onChange={this.filterPatternsListType}
              value={filteredListType}
            >
              {filterSelectList.map((each) => (
                <option key={each.id} value={each.value}>
                  {each.value}
                </option>
              ))}
            </select>
          </div>
        </div>
        <hr />
        <div className="pb-3 pattern-data-container">
          {isLoading ? (
            this.renderSpinner()
          ) : filteredPatternsList.length === 0 ? (
            <NotFound image={noDataImage} />
          ) : (
            filteredPatternsList.map((each) => (
              <PatternItem key={each.id} patternsList={each} />
            ))
          )}
        </div>
      </div>
    );
  }
}

export default Patterns;
