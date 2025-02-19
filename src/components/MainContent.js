import React from "react";

const MainContent = () => {
  return (
    <div style={styles.container}>
      <input type="text" placeholder="Search …..." style={styles.searchBar} />
      <div style={styles.promptsContainer}>
        <button style={styles.promptButton}>Prompt1 as per search</button>
        <button style={styles.promptButton}>Prompt2 as per search</button>
        <button style={styles.promptButton}>Prompt3 as per search</button>
      </div>
    </div>
  );
};

const styles = {
  container: {
    flex: 1,
    padding: "20px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  searchBar: {
    width: "80%",
    padding: "10px",
    fontSize: "16px",
    border: "1px solid gray",
    borderRadius: "5px",
    textAlign: "center",
    marginBottom: "20px",
  },
  promptsContainer: {
    display: "flex",
    gap: "15px",
  },
  promptButton: {
    padding: "10px",
    border: "1px solid gray",
    backgroundColor: "white",
    cursor: "pointer",
    borderRadius: "5px",
  },
};

export default MainContent;
