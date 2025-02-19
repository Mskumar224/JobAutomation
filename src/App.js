import companies from "./data/companies"; // Import it from the correct file
const applyJobs = async () => {
  const response = await fetch("https://us-central1-jobautoapply.cloudfunctions.net/autoApplyJobs", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ resumeUrl: "resume.pdf", companyNames: companies }),
  });

  const result = await response.json();
  alert(result.message);
};
