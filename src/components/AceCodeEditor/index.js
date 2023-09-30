import AceEditor from "react-ace";

import "ace-builds/src-noconflict/mode-python";
import "ace-builds/src-noconflict/theme-dracula";
import "ace-builds/src-noconflict/ext-language_tools";

import "./index.css";

const AceCodeEditor = (props) => {
  const { code, placeholder } = props;

  return (
    <div className="code-editor-container">
      <AceEditor
        className="ace-editor-container"
        placeholder={placeholder}
        mode="python"
        theme="dracula"
        showPrintMargin={true}
        showGutter={true}
        highlightActiveLine={false}
        value={code}
        setOptions={{
          enableBasicAutocompletion: false,
          enableLiveAutocompletion: false,
          enableSnippets: false,
          showLineNumbers: true,
          tabSize: 4,
          readOnly: true,
        }}
      />
    </div>
  );
};

export default AceCodeEditor;
