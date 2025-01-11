import React, { useState } from "react";
import "../styles/code.css"

const CodePlayground = () => {
  const [code, setCode] = useState("<!-- Let's code and have fun -->");
  const [previewContent, setPreviewContent] = useState(code);


  // Update preview when "Run" button is clicked
  const handleRun = () => {
    setPreviewContent(code); // Dynamically update preview
  };

  // Clear editor and preview
  const handleClear = () => {
    setCode("");
    setPreviewContent("");
  };

  // Download the current code as an HTML file
  const handleDownload = () => {
    const blob = new Blob([code], { type: "text/html" });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = "code.html";
    link.click();
  };

  return (
    <div className="container-fluid">
      <div className="row">
        {/* Sidebar */}
        <nav className="col-md-3 col-lg-2 d-md-block bg-dark text-light sidebar">
          <div className="position-sticky pt-3">
            <h4 className="text-center">Subjects</h4>
            <ul className="nav flex-column">
              {[
                "HTML",
                "CSS",
                "JavaScript",
                "Web APIs",
                "Node",
                "TypeScript",
                "SQL",
                "React",
                "Python",
              ].map((subject) => (
                <li className="nav-item" key={subject}>
                  <a
                    className="nav-link active text-light"
                    href="#"
                    onClick={(e) => {
                      e.preventDefault();
                      setPreviewContent(`<p>You clicked on ${subject}</p>`);
                    }}
                  >
                    {subject}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </nav>

        {/* Main Content */}
        <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
          <div className="d-flex justify-content-between align-items-center pt-3 pb-2 mb-3 border-bottom">
            <h1 className="h2">Code Playground</h1>
          </div>
          <div className="row">
            {/* Code Editor */}
            <div className="col-md-4">
              <h5>Code Editor</h5>
              <textarea
                id="codeEditor"
                className="form-control"
                rows="15"
                placeholder="Write your code here..."
                value={code}
                onChange={(e) => setCode(e.target.value)}
              ></textarea>
              <button className="btn btn-primary mt-2" onClick={handleRun}>
                Run
              </button>
              <button
                className="btn btn-secondary mt-2 ms-2"
                onClick={handleClear}
              >
                Clear
              </button>
              <button
                className="btn btn-success mt-2 ms-2"
                onClick={handleDownload}
              >
                Download Code
              </button>
            </div>

            {/* Live Preview */}
            <div className="col-md-8">
              <h5>Live Preview</h5>
              <div
                id="preview"
                className="border p-3 bg-light"
                style={{ minHeight: "500px" }}
                dangerouslySetInnerHTML={{ __html: previewContent }}
              ></div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default CodePlayground;
