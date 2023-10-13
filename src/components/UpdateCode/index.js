import { Component } from "react";
import { v4 } from "uuid";

import Loader from "../Loader";

const updateOptionList = [
  {
    id: v4(),
    text: "code type",
    value: "code_type",
  },
  {
    id: v4(),
    text: "code description",
    value: "code_description",
  },
  {
    id: v4(),
    text: "code hint",
    value: "code_hint",
  },
  {
    id: v4(),
    text: "code input",
    value: "code_input",
  },
  {
    id: v4(),
    text: "code ",
    value: "code",
  },
  {
    id: v4(),
    text: "code output",
    value: "code_output",
  },
];

class UpdateCode extends Component {
  state = {
    updateValue: "",
    codeId: "",
    updateOption: updateOptionList[0].value,
    isLoading: false,
  };

  changeUpdateOption = (event) => {
    this.setState({ updateOption: event.target.value });
  };

  renderLoader = () => <Loader w="30" />;

  onChangeCodeId = (event) => {
    this.setState({ codeId: event.target.value });
  };

  onChangeUpdateValue = (event) => {
    this.setState({ updateValue: event.target.value });
  };

  onSubmitRequest = async (e) => {
    e.preventDefault();
    const { updateValue, codeId, updateOption } = this.state;

    if (!updateValue || !codeId || !updateOption) {
      this.setState({ responseMsg: "All fields required!" });
      return;
    }
    this.setState({ isLoading: true, responseMsg: "" });

    const updateData = {
      codeOption: updateOption,
      codeValue: updateValue,
    };

    const options = {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updateData),
    };

    try {
      const Updateurl = `https://python-patterns-server.onrender.com/updateCode/${codeId}`;
      //   const Updateurl = `http://localhost:4000/updateCode/${codeId}`;

      const response = await fetch(Updateurl, options);
      const data = await response.json();
      if (response.ok) {
        this.setState({ responseMsg: data.message, isLoading: false });
      } else {
        this.setState({
          responseMsg: data.error,
          isLoading: false,
        });
      }
    } catch (error) {
      this.setState({
        isLoading: false,
        responseMsg: "Something went wrong. Please try again!",
      });
    }
  };

  render() {
    const { updateValue, codeId, updateOption, responseMsg, isLoading } =
      this.state;

    return (
      <div className="update-data-container">
        <form className="row m-0" onSubmit={this.onSubmitRequest}>
          <div className="col-12">
            <h1 className="heading">Update Code</h1>
          </div>
          <div className="col-12 col-md-6 p-2 px-3">
            <label className="pc-input-label" htmlFor="updateCodeId">
              Code Id
            </label>
            <input
              id="updateCodeId"
              className="form-control mb-2 pc-form-input"
              placeholder="Enter Unique Id"
              onChange={this.onChangeCodeId}
              value={codeId}
            />
          </div>
          <div className="col-12 col-md-6 p-2 px-3">
            <label className="pc-input-label" htmlFor="updateSelect">
              Update options
            </label>
            <select
              value={updateOption}
              onChange={this.changeUpdateOption}
              className="form-control mb-2 pc-form-input"
              id="updateSelect"
            >
              {updateOptionList.map((each) => (
                <option key={each.id} value={each.value}>
                  {each.text}
                </option>
              ))}
            </select>
          </div>
          <div className="col-12 col-md-6 p-2 px-3">
            <label className="pc-input-label">Update value</label>
            <textarea
              onChange={this.onChangeUpdateValue}
              className="form-control mb-2 pc-form-input"
              rows={4}
              placeholder="Enter value"
              value={updateValue}
            ></textarea>
          </div>
          <div className="col-12 p-2 px-3 d-flex align-items-center">
            <button type="submit" className="btn submit-btn mt-2 mb-4 shadow-1">
              Update
            </button>
            {isLoading && (
              <div className="mx-3 mb-3">{this.renderLoader()}</div>
            )}
            <p
              className={`para mx-3 ${
                responseMsg === "Updated Successfully"
                  ? "text-success"
                  : "text-danger"
              }`}
            >
              {responseMsg}
            </p>
          </div>
        </form>
      </div>
    );
  }
}

export default UpdateCode;
