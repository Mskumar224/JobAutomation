import React, { useState, useEffect } from "react";

const CompanySelection = ({ onSelectCompany }) => {
  const [companies, setCompanies] = useState([]);
  const [selectedCompany, setSelectedCompany] = useState("");

  useEffect(() => {
    // Fetch real company data from an API
    fetch("https://api.example.com/companies")
      .then((response) => response.json())
      .then((data) => setCompanies(data))
      .catch((error) => console.error("Error fetching companies:", error));
  }, []);

  const handleCompanyChange = (event) => {
    setSelectedCompany(event.target.value);
  };

  const handleSubmit = () => {
    if (selectedCompany) {
      onSelectCompany(selectedCompany);
    } else {
      alert("Please select a company.");
    }
  };

  return (
    <div>
      <h2>Select Company</h2>
      <select value={selectedCompany} onChange={handleCompanyChange}>
        <option value="">-- Select a Company --</option>
        {companies.map((company) => (
          <option key={company.id} value={company.name}>{company.name}</option>
        ))}
      </select>
      <button onClick={handleSubmit}>Confirm Selection</button>
    </div>
  );
};

export default CompanySelection;
