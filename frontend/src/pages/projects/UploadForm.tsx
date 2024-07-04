import React from 'react';
import './uploadForm.css';

interface UploadFormProps {
  onClose: () => void; // Callback to close the form
}

const UploadForm: React.FC<UploadFormProps> = ({ onClose }) => {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Handle form submission logic here (e.g., API call, validation, etc.)
    // You can access form data using event.target elements
  };

  return (
    <div className="form-popup">
      <div className="form-container">
        <span className="close" onClick={onClose}>&times;</span>
        <h2>Upload Your Project</h2>
        <form onSubmit={handleSubmit}>
          <label htmlFor="projectName">Name of Project:</label>
          <input type="text" id="projectName" name="projectName" required />
          
          <label htmlFor="projectLink">Link of Project:</label>
          <input type="url" id="projectLink" name="projectLink" required />

          <label>Will you pay your contributors?</label>
          <div>
            <input type="radio" id="payContributorsYes" name="payContributors" value="Yes" />
            <label htmlFor="payContributorsYes">Yes</label>
          </div>
          <div>
            <input type="radio" id="payContributorsNo" name="payContributors" value="No" />
            <label htmlFor="payContributorsNo">No</label>
          </div>

          <label htmlFor="license">License of Project:</label>
          <select id="license" name="license" required>
            <option value="">Select a license</option>
            <option value="MIT">MIT License</option>
            <option value="GPL-3.0">GNU General Public License v3.0</option>
            <option value="Apache-2.0">Apache License 2.0</option>
            <option value="BSD-3-Clause">BSD 3-Clause License</option>
            <option value="NoLicense">No License</option>
          </select>

          <label htmlFor="domain">Domain of Project:</label>
          <select id="domain" name="domain" required>
            <option value="">Select a domain</option>
            <option value="Web">Web</option>
            <option value="Android">Android</option>
            <option value="Machine Learning">Machine Learning</option>
            <option value="Data Science">Data Science</option>
            <option value="Flutter">Flutter</option>
          </select>

          <label htmlFor="codingLanguages">Coding Languages Used:</label>
          <input type="text" id="codingLanguages" name="codingLanguages" required />

          <label htmlFor="projectDescription">Project Description:</label>
          <textarea id="projectDescription" name="projectDescription" required></textarea>

          <label htmlFor="maintainers">Maintainers/Contributors Names:</label>
          <input type="text" id="maintainers" name="maintainers" required />

          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default UploadForm;
