import { Component } from "react";
import { v4 } from "uuid";
import CodeMirrorEditor from "../CodeMirrorEditor";
import "./index.css";

const CodePlaceholder = `M = int(input())
N = int(input())
for i in range(M):
  print( "* " * N )`;

const outputPlaceholder = `* * * * * *
* * * * * *
* * * * * *
* * * * * *`;

const codeTypeList = [
  {
    id: v4(),
    codeValue: "Rectangle",
  },
  {
    id: v4(),
    codeValue: "Solid Rectangle",
  },

  {
    id: v4(),
    codeValue: "Hollow Rectangle",
  },
  {
    id: v4(),
    codeValue: "Pyramid",
  },
  {
    id: v4(),
    codeValue: "Inverted Pyramid",
  },
  {
    id: v4(),
    codeValue: "Square",
  },
  {
    id: v4(),
    codeValue: "Hollow Square",
  },
  {
    id: v4(),
    codeValue: "Right Angled Triangle",
  },
  {
    id: v4(),
    codeValue: "Solid Right Angled Triangle",
  },
  {
    id: v4(),
    codeValue: "Hollow Right Angled Triangle",
  },
  {
    id: v4(),
    codeValue: "Inverted Right Angled Triangle",
  },
  {
    id: v4(),
    codeValue: "Two Right Angled Triangle",
  },
  {
    id: v4(),
    codeValue: "M Pattern With *",
  },
];

class PostCode extends Component {
  state = {
    id: v4(),
    codeType: "",
    codeDescription: "",
    codeHint: "",
    codeInput: "",
    codeOutput: "",
    code: "",
    responseMsg: "",
  };

  onChangeCodeType = (e) => {
    this.setState({ codeType: e.target.value });
  };

  onChangeCodeDescription = (e) => {
    this.setState({ codeDescription: e.target.value });
  };

  onChangeCodeHint = (e) => {
    this.setState({ codeHint: e.target.value });
  };

  onChangeCodeInput = (e) => {
    this.setState({ codeInput: e.target.value });
  };

  onChangeCode = (e) => {
    this.setState({ code: e.target.value });
  };

  onChangeCodeOutput = (e) => {
    this.setState({ codeOutput: e.target.value });
  };

  onSubmitPostCode = async (e) => {
    e.preventDefault();

    const {
      id,
      codeType,
      codeDescription,
      codeHint,
      codeInput,
      codeOutput,
      code,
    } = this.state;

    if (
      !codeType ||
      !codeDescription ||
      !codeHint ||
      !codeInput ||
      !codeOutput ||
      !code
    ) {
      this.setState({ responseMsg: "All fields required!" });
      return;
    }

    const postData = {
      id: id,
      code_type: codeType,
      code_description: codeDescription,
      code_hint: codeHint,
      code_input: codeInput,
      code_output: codeOutput,
      code: code,
    };
    const postMethod = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(postData),
    };

    const reqUrl = "https://python-patterns-server.onrender.com/postcode";
    // const reqUrl = "http://localhost:4000/postcode/";

    try {
      const response = await fetch(reqUrl, postMethod);
      if (response.ok) {
        const data = await response.json();

        this.setState({
          id: v4(),
          codeType: "",
          codeDescription: "",
          codeHint: "",
          codeInput: "",
          codeOutput: "",
          code: "",
          responseMsg: data.message,
        });
      } else {
        this.setState({
          responseMsg: "Something went wrong. Please try again!",
        });
      }
    } catch (error) {
      alert(error);
    }
  };

  render() {
    const {
      codeDescription,
      codeHint,
      codeInput,
      codeOutput,
      code,
      responseMsg,
    } = this.state;

    return (
      <div className="post-code-container">
        <div className="pc-form-container">
          <form className="row m-0" onSubmit={this.onSubmitPostCode}>
            <div className="col-12">
              <h1 className="heading">Insert Your Code</h1>
            </div>
            <div className="col-12 col-md-6 p-2 px-3">
              <label className="pc-input-label" htmlFor="codeType">
                Code type
              </label>
              <select
                className="form-control mb-2 pc-form-input"
                id="codeType"
                onChange={this.onChangeCodeType}
              >
                {codeTypeList.map((each) => (
                  <option key={each.id} value={each.codeValue}>
                    {each.codeValue}
                  </option>
                ))}
              </select>
            </div>
            <div className="col-12 col-md-6 p-2 px-3">
              <label className="pc-input-label" htmlFor="codeDescription">
                Code description
              </label>
              <input
                className="pc-form-input form-control mb-2"
                type="text"
                placeholder="Description"
                id="codeDescription"
                onChange={this.onChangeCodeDescription}
                value={codeDescription}
              />
            </div>
            <div className="col-12 col-md-6 p-2 px-3">
              <label className="pc-input-label" htmlFor="codeHint">
                Code hint
              </label>
              <textarea
                rows={4}
                className="pc-form-input form-control mb-2"
                placeholder="Code Hint"
                id="codeHint"
                onChange={this.onChangeCodeHint}
                value={codeHint}
              ></textarea>
            </div>
            <div className="col-12 col-md-6 p-2 px-3">
              <label className="pc-input-label">Code input</label>
              <textarea
                rows={4}
                className="form-control mb-2 pc-form-input"
                placeholder="Enter input"
                onChange={this.onChangeCodeInput}
                value={codeInput}
              ></textarea>
            </div>
            <div className="col-12 col-md-6 p-2 px-3">
              <label className="pc-input-label">Code</label>
              <textarea
                rows={6}
                className="form-control mb-2 pc-form-input"
                placeholder="Enter code"
                onChange={this.onChangeCode}
                value={code}
              ></textarea>
            </div>
            <div className="col-12 col-md-6 p-2 px-3">
              <label className="pc-input-label">Code output</label>
              <textarea
                rows={6}
                className="form-control mb-2 pc-form-input"
                placeholder="Enter code output"
                onChange={this.onChangeCodeOutput}
                value={codeOutput}
              ></textarea>
            </div>
            <div className="col-12 p-2 px-3 d-flex justify-content-end align-items-center">
              <p
                className={`para mx-3 ${
                  responseMsg === "All fields required!"
                    ? "text-danger"
                    : "text-success"
                }`}
              >
                {responseMsg}
              </p>
              <button
                type="submit"
                className="btn submit-btn mt-2 mb-4 shadow-1"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
        <hr />
        <div className="row m-0 pc-preview-container">
          <div className="col-12">
            <h1 className="heading">Code Preview</h1>
          </div>
          <div className="col-12 col-md-6 p-2 px-3">
            <p className="pc-input-label">Code</p>
            <CodeMirrorEditor
              placeholder={CodePlaceholder}
              className="pc-code-output-ground"
              code={code}
            />
          </div>

          <div className="col-12 col-md-6 p-2 px-3">
            <p className="pc-input-label">Code output</p>
            <CodeMirrorEditor
              className="pc-code-output-ground"
              code={codeOutput}
              placeholder={outputPlaceholder}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default PostCode;
