// src/components/uploadForm/UploadForm.tsx

import React, { useState } from "react";
import "./uploadForm.css";
import { useMutation } from "@tanstack/react-query";
import { createProject } from "../../lib/api";

interface UploadFormProps {
  onClose: () => void;
}

const UploadForm: React.FC<UploadFormProps> = ({ onClose }) => {
  const [formData, setFormData] = useState({
    name: "",
    link: "",
    willPay: "",
    license: "",
    domain: "",
    languages: "",
    description: "",
    maintainers: ""
  });

  const {
    mutate: submitProject,
    isPending,
    isError,
    error,
  } = useMutation({
    mutationFn: createProject,
    onSuccess: () => {
      onClose();
    },
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    submitProject({
      name: formData.name,
      link: formData.link,
      willPay: formData.willPay === "Yes",
      license: formData.license,
      domain: formData.domain,
      languages: formData.languages,
      description: formData.description,
      maintainers: formData.maintainers.split(",").map(maintainer => maintainer.trim()),
    });
  };

  return (
    <div className="form-popup">
      <div className="form-container">
        <span className="close" onClick={onClose}>&times;</span>
        <h2>Upload Your Project</h2>
        {isPending && <div>Loading...</div>}
        {isError && <div>{error?.message || "An error occurred"}</div>}
        <form onSubmit={handleSubmit}>
          <label htmlFor="name">Name of Project:</label>
          <input type="text" id="name" name="name" required onChange={handleChange} />

          <label htmlFor="link">Link of Project:</label>
          <input type="url" id="link" name="link" required onChange={handleChange} />

          <label>Will you pay your contributors?</label>
          <div>
            <input type="radio" id="willPayYes" name="willPay" value="Yes" onChange={handleChange} />
            <label htmlFor="willPayYes">Yes</label>
          </div>
          <div>
            <input type="radio" id="willPayNo" name="willPay" value="No" onChange={handleChange} />
            <label htmlFor="willPayNo">No</label>
          </div>

          <label htmlFor="license">License of Project:</label>
          <select id="license" name="license" required onChange={handleChange}>
            <option value="">Select a license</option>
            <option value="MIT">MIT License</option>
            <option value="GPL-3.0">GNU General Public License v3.0</option>
            <option value="Apache-2.0">Apache License 2.0</option>
            <option value="BSD-3-Clause">BSD 3-Clause License</option>
            <option value="NoLicense">No License</option>
          </select>

          <label htmlFor="domain">Domain of Project:</label>
          <select id="domain" name="domain" required onChange={handleChange}>
            <option value="">Select a domain</option>
            <option value="Web">Web</option>
            <option value="Android">Android</option>
            <option value="Machine Learning">Machine Learning</option>
            <option value="Data Science">Data Science</option>
            <option value="Flutter">Flutter</option>
          </select>

          <label htmlFor="languages">Coding Languages Used:</label>
          <input type="text" id="languages" name="languages" required onChange={handleChange} />

          <label htmlFor="description">Project Description:</label>
          <textarea id="description" name="description" required onChange={handleChange}></textarea>

          <label htmlFor="maintainers">Maintainers/Contributors Names:</label>
          <input type="text" id="maintainers" name="maintainers" required onChange={handleChange} />

          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default UploadForm;
