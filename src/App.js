import React, { useState } from "react";
const ApplyJobs = async () => {
  const [companies, setCompanies] = useState([]); // Define state before using
  const response = await fetch("https://us-central1-jobautoapply.cloudfunctions.net/autoApplyJobs", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ resumeUrl: "resume.pdf", companyNames: companies }),
  });

  const result = await response.json();
  alert(result.message);
};
function App() {
  return (
      <div>
          <h1>Hello, Job Automation!</h1>
      </div>
  );
}

export default App; // Ensure it's a default export
