import React, { useState, useEffect, lazy, Suspense } from "react";
import Loader from "../Loader";
import "./index.css";

const LazyCodeMirrorEditor = lazy(() => import("../CodeMirrorEditor"));

const PatternItem = (props) => {
  const { patternsList } = props;
  const { codeType, codeDescription, codeHint, codeInput, codeOutput, code } =
    patternsList;

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const delay = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(delay);
  }, []);

  return (
    <>
      {isLoading ? (
        <div className="loading-spinner-container">
          <Loader w="40" />
        </div>
      ) : (
        <div className="mb-5">
          <h1 className="heading">{codeType}</h1>
          <p className="q-text">{codeDescription}</p>
          <p className="q-text">{codeHint}</p>
          <div className="row">
            <div className="col-12 py-2 mb-3  position-relative">
              <div className="code-ground-title-container  shadow-1 d-flex justify-content-center align-items-center">
                <p className="para code-g-text m-0">Input</p>
              </div>
              <Suspense>
                <LazyCodeMirrorEditor
                  className="input-code-container"
                  code={codeInput}
                />
              </Suspense>
            </div>
            <div className="col-12 col-md-6  py-2 mb-4 mb-md-0 code-and-output  position-relative">
              <div className="code-ground-title-container shadow-1 d-flex justify-content-center align-items-center">
                <p className="para code-g-text m-0">Code</p>
              </div>
              <Suspense>
                <LazyCodeMirrorEditor code={code} />
              </Suspense>
            </div>
            <div className="col-12 col-md-6 mb-3 py-2 code-and-output  position-relative">
              <div className="code-ground-title-container shadow-1 d-flex justify-content-center align-items-center">
                <p className="para code-g-text m-0">Output</p>
              </div>
              <Suspense>
                <LazyCodeMirrorEditor code={codeOutput} />
              </Suspense>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default PatternItem;
