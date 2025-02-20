import React, { useState } from "react";
import { storage } from "../firebase"; // Make sure Firebase is configured
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";

const UploadResume = ({ onResumeUpload }) => {
  const [file, setFile] = useState(null);
  const [uploading, setUploading] = useState(false);
  const [previewURL, setPreviewURL] = useState("");

  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];
    if (selectedFile && (selectedFile.type === "application/pdf" || selectedFile.type.includes("word"))) {
      setFile(selectedFile);
      setPreviewURL(URL.createObjectURL(selectedFile));
    } else {
      alert("Please upload a valid PDF or Word document.");
    }
  };

  const handleUpload = async () => {
    if (!file) {
      alert("Please select a file to upload.");
      return;
    }

    setUploading(true);
    const storageRef = ref(storage, `resumes/${file.name}`);
    
    try {
      await uploadBytes(storageRef, file);
      const url = await getDownloadURL(storageRef);
      onResumeUpload(url); // Pass uploaded file URL to App.js
      alert("Resume uploaded successfully!");
    } catch (error) {
      console.error("Upload failed:", error);
      alert("Failed to upload resume.");
    }

    setUploading(false);
  };

  return (
    <div style={{ margin: "20px 0", padding: "10px", backgroundColor: "#f8f9fa", borderRadius: "5px" }}>
      <input type="file" accept=".pdf,.doc,.docx" onChange={handleFileChange} />
      {previewURL && (
        <iframe
          src={previewURL}
          title="Resume Preview"
          style={{ width: "100%", height: "300px", marginTop: "10px" }}
        />
      )}
      <button onClick={handleUpload} disabled={uploading} style={{ padding: "10px", marginTop: "10px", backgroundColor: "#2196F3", color: "white", border: "none", cursor: "pointer" }}>
        {uploading ? "Uploading..." : "Upload Resume"}
      </button>
    </div>
  );
};

export default UploadResume;
