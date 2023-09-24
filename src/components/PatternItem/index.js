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
        <div className="col-12 py-2">
          <CodeMirrorEditor className="input-code-container" code={codeInput} />
        </div>
        <div className="col-12 col-md-6 py-2 mb-3 mb-md-0 code-and-output">
          <CodeMirrorEditor code={code} />
        </div>
        <div className="col-12 col-md-6 py-2 code-and-output">
          <CodeMirrorEditor code={codeOutput} />
        </div>
      </div>
    </div>
  );
};

export default PatternItem;
