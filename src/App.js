const applyJobs = async () => {
  const [companies, setCompanies] = useState([]); // Define state before using
  const response = await fetch("https://us-central1-jobautoapply.cloudfunctions.net/autoApplyJobs", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ resumeUrl: "resume.pdf", companyNames: companies }),
  });

  const result = await response.json();
  alert(result.message);
};
