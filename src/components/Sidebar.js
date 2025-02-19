import React from "react";

const Sidebar = () => {
  return (
    <div style={styles.sidebar}>
      <button style={styles.button}>Upload Resume</button>
      <button style={styles.button}>Modify Resume</button>
      <button style={styles.button}>Auto Apply</button>
      <button style={styles.button}>Recent History</button>
    </div>
  );
};

const styles = {
  sidebar: {
    width: "200px",
    height: "100vh",
    backgroundColor: "#E5E7EB",
    padding: "10px",
    display: "flex",
    flexDirection: "column",
    gap: "10px",
  },
  button: {
    padding: "10px",
    border: "1px solid gray",
    backgroundColor: "white",
    cursor: "pointer",
    textAlign: "left",
  },
};

export default Sidebar;
