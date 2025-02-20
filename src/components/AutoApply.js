import React from "react";

const AutoApply = ({ resumeURL, company }) => {
  const handleApply = async () => {
    if (!resumeURL || !company) {
      alert("Please upload a resume and select a company first.");
      return;
    }

    try {
      const response = await fetch("https://us-central1-jobautoapply.cloudfunctions.net/autoApplyJobs", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ resumeUrl: resumeURL, companyName: company }),
      });

      const result = await response.json();
      alert(result.message);
    } catch (error) {
      console.error("Error applying to jobs:", error);
      alert("There was an error applying to jobs. Please try again.");
    }
  };

  return (
    <div>
      <h2>Auto-Apply for Jobs</h2>
      <button onClick={handleApply}>Apply Now</button>
    </div>
  );
};

export default AutoApply;
