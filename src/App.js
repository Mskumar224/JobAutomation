import React from "react";
import "./styles.css";

function App() {
  return (
    <div className="container">
      {/* Sidebar */}
      <div className="sidebar">
        <h2 style={{ color: "white", textAlign: "center" }}>ZvertexAI</h2>
        <button>Upload Resume</button>
        <button>Modify Resume</button>
        <button>Auto Apply</button>
        <button>Recent History</button>
      </div>

      {/* Main Section */}
      <div style={{ width: "100%", textAlign: "center", marginTop: "20px" }}>
        <input
          type="text"
          placeholder="Search ......"
          className="search-bar"
        />

        {/* Prompt Buttons */}
        <div className="prompt-buttons">
          <div className="prompt">Prompt 1 as per search</div>
          <div className="prompt">Prompt 2 as per search</div>
          <div className="prompt">Prompt 3 as per search</div>
        </div>
      </div>
    </div>
  );
}

export default App;
