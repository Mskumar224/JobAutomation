import React, { useState } from "react";
import Sidebar from "./components/Sidebar"; // UI
import MainContent from "./components/MainContent";

const applyJobs = async (companies) => {
  try {
    const response = await fetch(
      "https://us-central1-jobautoapply.cloudfunctions.net/autoApplyJobs",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ resumeUrl: "resume.pdf", companyNames: companies }),
      }
    );

    const result = await response.json();
    alert(result.message);
  } catch (error) {
    console.error("Error applying to jobs:", error);
    alert("There was an error applying to jobs. Please try again.");
  }
};

function App() {
  const [companies, setCompanies] = useState([]);
  const [companyName, setCompanyName] = useState("");
  const [message, setMessage] = useState("");
  const [searchQuery, setSearchQuery] = useState("");

  // Prompt Suggestions
  const prompts = [
    "Apply to top tech companies",
    "Find remote jobs",
    "Optimize my resume",
    "Get AI-based job recommendations",
  ];

  const handleAddCompany = () => {
    if (companyName.trim() !== "") {
      setCompanies((prevCompanies) => [...prevCompanies, companyName.trim()]);
      setCompanyName("");
    }
  };

  const handleRemoveCompany = (index) => {
    setCompanies((prevCompanies) => prevCompanies.filter((_, i) => i !== index));
  };

  const handleApplyJobs = async () => {
    if (companies.length === 0) {
      setMessage("Please add at least one company to apply to.");
      return;
    }
    await applyJobs(companies);
    setMessage("Job applications sent!");
  };

  return (
    <div style={{ display: "flex" }}>
      <Sidebar />
      <div style={{ flex: 1, padding: "20px", fontFamily: "Arial, sans-serif" }}>
      <h1 style={{ textAlign: "center", fontSize: "2rem" }}>
  <span style={{ color: "blue" }}>Zvertex</span>
  <span style={{ color: "white", backgroundColor: "blue", padding: "5px 10px", borderRadius: "5px" }}>AI</span>
</h1>

        {/* Search Box */}
        <div style={{ marginBottom: "20px", textAlign: "center" }}>
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search for jobs, companies, or resume tips..."
            style={{
              padding: "10px",
              width: "80%",
              border: "1px solid #ccc",
              borderRadius: "5px",
            }}
          />
        </div>

        {/* Prompt Suggestions */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "10px", marginBottom: "20px" }}>
          {prompts.map((prompt, index) => (
            <button
              key={index}
              style={{
                padding: "10px",
                border: "1px solid #ccc",
                borderRadius: "5px",
                backgroundColor: "#f8f8f8",
                cursor: "pointer",
              }}
              onClick={() => setSearchQuery(prompt)}
            >
              {prompt}
            </button>
          ))}
        </div>

        {/* Company Input */}
        <div style={{ marginBottom: "20px" }}>
          <input
            type="text"
            value={companyName}
            onChange={(e) => setCompanyName(e.target.value)}
            placeholder="Enter Company Name"
            style={{ padding: "10px", marginRight: "10px", width: "70%" }}
          />
          <button onClick={handleAddCompany} style={{ padding: "10px" }}>Add</button>
        </div>

        {/* Company List */}
        <div
          style={{
            marginBottom: "20px",
            maxHeight: "200px",
            overflowY: "auto",
            border: "1px solid #ccc",
            padding: "10px",
          }}
        >
          {companies.map((company, index) => (
            <div
              key={index}
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                marginBottom: "5px",
              }}
            >
              <span>{company}</span>
              <button
                onClick={() => handleRemoveCompany(index)}
                style={{ background: "none", border: "none", color: "red", cursor: "pointer" }}
              >
                X
              </button>
            </div>
          ))}
        </div>

        {/* Apply Button */}
        <button
          onClick={handleApplyJobs}
          style={{
            padding: "10px",
            width: "100%",
            backgroundColor: "#4CAF50",
            color: "white",
            border: "none",
            cursor: "pointer",
          }}
        >
          Apply to Jobs
        </button>

        {message && (
          <p style={{ marginTop: "20px", color: message.includes("error") ? "red" : "green" }}>
            {message}
          </p>
        )}
      </div>
    </div>
  );
}

export default App;
