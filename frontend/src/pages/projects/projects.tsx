import React, { useState } from 'react';
import './projects.css';
import UploadForm from './UploadForm.tsx'; 
const Projects: React.FC = () => {
  // State to manage the selected radio button
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [showForm, setShowForm] = useState(false); // State to control the form popup

  // Function to handle radio button selection
  const handleRadioChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedOption(event.target.value);
  };

  const handleUploadClick = () => {
    setShowForm(true); // Show the form when "Upload your project" button is clicked
  };

  const handleCloseForm = () => {
    setShowForm(false); // Close the form
  };

  return (
    <>
      <div className='ProjectSectionFirstContainer'>
        <div className='ProjectSectionFirstItems'>
          <p>Choose your Domain</p>
          <div className="radio-inputs-selection-choice">
            <label className="radio">
              <input
                type="radio"
                name="radio"
                value="Web"
                checked={selectedOption === "Web"}
                onChange={handleRadioChange}
              />
              <span className="name">Web</span>
            </label>
            <label className="radio">
              <input
                type="radio"
                name="radio"
                value="Android"
                checked={selectedOption === "Android"}
                onChange={handleRadioChange}
              />
              <span className="name">Android</span>
            </label>
            <label className="radio">
              <input
                type="radio"
                name="radio"
                value="Machine Learning"
                checked={selectedOption === "Machine Learning"}
                onChange={handleRadioChange}
              />
              <span className="name">Machine Learning</span>
            </label>
            <label className="radio">
              <input
                type="radio"
                name="radio"
                value="Data Science"
                checked={selectedOption === "Data Science"}
                onChange={handleRadioChange}
              />
              <span className="name">Data Science</span>
            </label>
            <label className="radio">
              <input
                type="radio"
                name="radio"
                value="Flutter"
                checked={selectedOption === "Flutter"}
                onChange={handleRadioChange}
              />
              <span className="name">Flutter</span>
            </label>
          </div>
          <div className='UploadButtonRight'>
            <button className="buttonForUploadProject" onClick={handleUploadClick}>Push Your Project</button>
          </div>
        </div>
      </div>           
      {/* Form Popup */}
      {showForm && <UploadForm onClose={handleCloseForm} />}
    </>
  );
};

export default Projects;
