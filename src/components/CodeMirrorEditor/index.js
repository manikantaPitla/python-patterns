import { Component } from "react";
import CodeMirror from "@uiw/react-codemirror";
import { dracula } from "@uiw/codemirror-theme-dracula";
import { python } from "@codemirror/lang-python";
import "./index.css";

class CodeMirrorEditor extends Component {
  render() {
    const { code } = this.props;

    return (
      <CodeMirror
        className="code-ground"
        value={code}
        height="fit-content"
        theme={dracula}
        readOnly={true}
        extensions={[python()]}
        onChange={(value, viewUpdate) => {
          console.log("value:", value);
        }}
      />
    );
  }
}

export default CodeMirrorEditor;
