import CodeMirrorEditor from "../CodeMirrorEditor";
import "./index.css";

const PatternItem = (props) => {
  const { patternsList } = props;
  const { codeType, codeDescription, codeHint, codeInput, codeOutput, code } =
    patternsList;

  return (
    <div className="mb-5">
      <h1 className="heading">{codeType}</h1>
      <p className="q-text">{codeDescription}</p>
      <p className="q-text">{codeHint}</p>
      <div className="row">
        <div className="col-12 py-2 mb-3  position-relative">
          <div className="code-ground-title-container  shadow-1 d-flex justify-content-center align-items-center">
            <p className="para code-g-text m-0">Input</p>
          </div>
          <CodeMirrorEditor className="input-code-container" code={codeInput} />
        </div>
        <div className="col-12 col-md-6  py-2 mb-4 mb-md-0 code-and-output  position-relative">
          <div className="code-ground-title-container shadow-1 d-flex justify-content-center align-items-center">
            <p className="para code-g-text m-0">Code</p>
          </div>
          <CodeMirrorEditor code={code} />
        </div>
        <div className="col-12 col-md-6 mb-3 py-2 code-and-output  position-relative">
          <div className="code-ground-title-container shadow-1 d-flex justify-content-center align-items-center">
            <p className="para code-g-text m-0">Output</p>
          </div>
          <CodeMirrorEditor code={codeOutput} />
        </div>
      </div>
    </div>
  );
};

export default PatternItem;
