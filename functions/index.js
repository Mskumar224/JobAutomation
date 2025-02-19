import React, { useState } from "react";
import './App.css';

function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const [prompts, setPrompts] = useState(['Prompt1 as per search', 'Prompt2 as per search', 'Prompt3 as per search']);

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
    // Here you would typically handle the search logic
  };

  return (
    <div className="app-container">
      <div className="sidebar">
        <div className="logo">ZvertexAI</div>
        <button className="sidebar-button">Upload Resume</button>
        <button className="sidebar-button">Modify Resume</button>
        <button className="sidebar-button">Auto Apply</button>
        <button className="sidebar-button">Recent History</button>
      </div>
      <div className="main-content">
        <input 
          type="text" 
          value={searchTerm} 
          onChange={handleSearch} 
          placeholder="Search ......" 
          className="search-bar"
        />
        <div className="prompts">
          {prompts.map((prompt, index) => (
            <div key={index} className="prompt-card">{prompt}</div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;