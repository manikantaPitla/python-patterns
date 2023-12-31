import { Component } from "react";
import Loader from "../Loader";

class DeleteCode extends Component {
  state = { responseMsg: "", codeId: "", isLoading: false };

  onChangeCodeId = (e) => {
    this.setState({ codeId: e.target.value });
  };

  renderLoader = () => <Loader w="30" />;

  onDeleteRequest = async (e) => {
    e.preventDefault();
    const { codeId } = this.state;

    if (!codeId) {
      this.setState({ responseMsg: "Unique Id cannot be empty!" });
      return;
    }

    this.setState({ isLoading: true, responseMsg: "" });

    const deleteData = {
      codeId,
    };

    const options = {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(deleteData),
    };

    try {
      const deleteUrl = `https://python-patterns-server.onrender.com/deleteCode/${codeId}`;
      //   const deleteUrl = `http://localhost:4000/deleteCode/${codeId}`;

      const response = await fetch(deleteUrl, options);
      const data = await response.json();
      if (response.ok) {
        this.setState({
          responseMsg: data.message,
          codeId: "",
          isLoading: false,
        });
      } else {
        this.setState({
          isLoading: false,
          responseMsg: data.error,
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
    const { responseMsg, codeId, isLoading } = this.state;

    return (
      <div className="update-data-container">
        <div className="row m-0">
          <div className="col-12">
            <h1 className="heading">Delete Code</h1>
            <form className="row" onSubmit={this.onDeleteRequest}>
              <div className="col-12 col-md-6 p-2 px-3">
                <label className="pc-input-label" htmlFor="updateCodeId">
                  Code Id
                </label>
                <input
                  onChange={this.onChangeCodeId}
                  value={codeId}
                  id="updateCodeId"
                  className="form-control mb-2 pc-form-input"
                  placeholder="Enter Unique Id"
                />
              </div>
              <div className="col-12 p-2 px-3 d-flex justify-content-start align-items-center">
                <button
                  type="submit"
                  className="btn submit-btn mt-2 mb-4 shadow-1"
                >
                  Delete
                </button>
                {isLoading && (
                  <div className="mx-3 mb-3">{this.renderLoader()}</div>
                )}
                <p
                  className={`para mx-3 ${
                    responseMsg === "Deleted Successfully"
                      ? "text-success"
                      : "text-danger"
                  }`}
                >
                  {responseMsg}
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default DeleteCode;
