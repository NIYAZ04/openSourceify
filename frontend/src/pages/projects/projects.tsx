// src/components/projects/Projects.tsx

import React, { useState } from "react";
import "./projects.css";
import UploadForm from "./UploadForm";
import ProjectList from "./ProjectList";

const Projects: React.FC = () => {
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [showForm, setShowForm] = useState(false);

  const handleRadioChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedOption(event.target.value);
  };

  const handleUploadClick = () => {
    setShowForm(true);
  };

  const handleCloseForm = () => {
    setShowForm(false);
  };

  return (
    <>
      <div className="ProjectSectionFirstContainer">
        <div className="ProjectSectionFirstItems">
          <p>Choose your Domain</p>
          <div className="radio-inputs-selection-choice">
            {["Web", "Android", "Machine Learning", "Data Science", "Flutter"].map((domain) => (
              <label key={domain} className="radio">
                <input
                  type="radio"
                  name="radio"
                  value={domain}
                  checked={selectedOption === domain}
                  onChange={handleRadioChange}
                />
                <span className="name">{domain}</span>
              </label>
            ))}
          </div>
          <div className="UploadButtonRight">
            <button className="buttonForUploadProject" onClick={handleUploadClick}>
              Push Your Project
            </button>
          </div>
        </div>
      </div>
      {showForm && <UploadForm onClose={handleCloseForm} />}
      <ProjectList selectedDomain={selectedOption} />
    </>
  );
};

export default Projects;
