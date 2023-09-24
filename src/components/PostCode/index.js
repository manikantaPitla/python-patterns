import { Component } from "react";
import { v4 } from "uuid";
import CodeMirrorEditor from "../CodeMirrorEditor";
import "./index.css";

class PostCode extends Component {
  state = {
    id: v4(),
    codeType: "",
    codeDescription: "",
    codeHint: "",
    codeInput: "",
    codeOutput: "",
    code: "",
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

    const reqUrl = "https://bright-teal-polo-shirt.cyclic.cloud/postcode";

    try {
      const response = await fetch(reqUrl, postMethod);
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      const data = await response.json();
      console.log(data.message);

      this.setState({
        id: v4(),
        codeType: "",
        codeDescription: "",
        codeHint: "",
        codeInput: "",
        codeOutput: "",
        code: "",
      });
    } catch (error) {
      console.error("Fetch error:", error);
    }
  };

  render() {
    const { codeDescription, codeHint, codeInput, codeOutput, code } =
      this.state;

    return (
      <div className="post-code-container">
        <div className="post-code-card">
          <div className="pc-form-container">
            <h1 className="heading">Insert Your Code</h1>
            <form onSubmit={this.onSubmitPostCode}>
              <label className="pc-input-label" htmlFor="codeType">
                Code type
              </label>
              <select
                className="form-control mb-2 pc-form-input"
                id="codeType"
                onChange={this.onChangeCodeType}
              >
                <option value="Solid Rectangle">Solid Rectangle</option>
                <option value="Pyramid">Pyramid</option>
                <option value="Inverted Pyramid">Inverted Pyramid</option>
                <option value="Rectangle">Rectangle</option>
                <option value="Hollow Rectangle">Hollow Rectangle</option>
                <option value="Square">Square</option>
                <option value="Hollow Square">Hollow Square</option>
                <option value="Solid Right Angled Triangle">
                  Solid Right Angled Triangle
                </option>
                <option value="Right Angled Triangle">
                  Right Angled Triangle
                </option>
                <option value="Hollow Right Angled Triangle">
                  Hollow Right Angled Triangle
                </option>
                <option value="Inverted Right Angled Triangle">
                  Inverted Right Angled Triangle
                </option>
                <option value="Two Right Angled Triangle">
                  Two Right Angled Triangle
                </option>
              </select>
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
              <label className="pc-input-label" htmlFor="codeHint">
                Code hint
              </label>
              <textarea
                rows={3}
                className="pc-form-input form-control mb-2"
                placeholder="Code Hint"
                id="codeHint"
                onChange={this.onChangeCodeHint}
                value={codeHint}
              ></textarea>
              <label className="pc-input-label">Code input</label>
              <textarea
                rows={4}
                className="form-control mb-2 pc-form-input"
                placeholder="Enter input"
                onChange={this.onChangeCodeInput}
                value={codeInput}
              ></textarea>
              <label className="pc-input-label">Code</label>
              <textarea
                rows={6}
                className="form-control mb-2 pc-form-input"
                placeholder="Enter code"
                onChange={this.onChangeCode}
                value={code}
              ></textarea>
              <label className="pc-input-label">Code output</label>
              <textarea
                rows={6}
                className="form-control mb-2 pc-form-input"
                placeholder="Enter code output"
                onChange={this.onChangeCodeOutput}
                value={codeOutput}
              ></textarea>
              <button type="submit" className="btn bg-dark text-white mb-4">
                Submit
              </button>
            </form>
          </div>
          <hr className="pc-vr-line bg-dark" />
          <div className="pc-code-output-container">
            <h1 className="heading">Code output</h1>

            <div>
              <CodeMirrorEditor code={code} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default PostCode;
