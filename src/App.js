import React, { useState } from "react";
import "./App.css";
import UploadResume from "./components/UploadResume"; // Import the new Upload Resume component

function App() {
  const [resumeURL, setResumeURL] = useState("");

  // Function to handle resume upload
  const handleResumeUpload = (url) => {
    setResumeURL(url);
  };

  return (
    <div className="app-container" style={{ textAlign: "center", padding: "20px" }}>
      {/* Header with Search Box */}
      <header className="header">
        <h1 style={{ color: "#2196F3" }}>
          Zvertex<span style={{ color: "#000000" }}>AI</span>
        </h1>
        <input
          type="text"
          placeholder="Search for jobs..."
          className="search-box"
          style={{
            width: "60%",
            padding: "10px",
            marginTop: "10px",
            borderRadius: "5px",
            border: "1px solid #ccc",
          }}
        />
      </header>

      {/* Prompt Suggestions */}
      <div className="prompt-container" style={{ marginTop: "20px" }}>
        <button className="prompt-button">Best IT Jobs</button>
        <button className="prompt-button">Startup Openings</button>
        <button className="prompt-button">Remote Jobs</button>
        <button className="prompt-button">AI Industry Hiring</button>
      </div>

      {/* Upload Resume Section */}
      <UploadResume onResumeUpload={handleResumeUpload} />

      {/* Resume Preview */}
      {resumeURL && (
        <div className="resume-preview">
          <h3>Preview Your Resume</h3>
          <iframe
            src={resumeURL}
            title="Resume Preview"
            style={{ width: "80%", height: "400px", border: "1px solid #ccc" }}
          />
        </div>
      )}

      {/* Select Companies Dropdown */}
      <div className="company-selection" style={{ marginTop: "20px" }}>
        <h3>Select Companies to Apply</h3>
        <select className="company-dropdown">
          <option value="">Choose a company</option>
          <option value="Google">Google</option>
          <option value="Amazon">Amazon</option>
          <option value="Microsoft">Microsoft</option>
          <option value="Tesla">Tesla</option>
        </select>
      </div>

      {/* Auto-Apply Button */}
      <button
        className="apply-button"
        style={{
          padding: "10px 20px",
          marginTop: "20px",
          backgroundColor: "#2196F3",
          color: "white",
          border: "none",
          cursor: "pointer",
        }}
        onClick={() => alert("Auto Apply activated!")}
      >
        Auto Apply Now
      </button>
    </div>
  );
}

export default App;
