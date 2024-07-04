import React, { useState } from "react";
import "./contactus.css";
const ContactUs: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    termsAccepted: false,
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value, type } = e.target;
    const newValue =
      type === "checkbox" ? (e.target as HTMLInputElement).checked : value;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: newValue,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Add your form submission logic here
    alert("Thanks for submitting the form!");
  };

  return (
    <div className="wrapper">
      <form className="form" onSubmit={handleSubmit}>
        <div className="pageTitle title">Contact Us</div>
        <div className="secondaryTitle title">
          We value your feedback! Feel free to share any suggestions or comments
          you may have. Your input helps us improve and better serve you. Thank
          you for taking the time to connect with us!{" "}
        </div>
        <input
          type="text"
          className="name formEntry"
          placeholder="Name"
          name="name"
          value={formData.name}
          onChange={handleChange}
        />
        <input
          type="text"
          className="email formEntry"
          placeholder="Email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
        <textarea
          className="message formEntry"
          placeholder="Message"
          name="message"
          value={formData.message}
          onChange={handleChange}
        />
        <input
          type="checkbox"
          className="termsConditions"
          name="termsAccepted"
          checked={formData.termsAccepted}
          onChange={handleChange}
        />
        <label style={{ color: "grey" }} htmlFor="terms">
          I Accept the <span style={{ color: "#0e3721" }}>Terms of Use</span> &{" "}
          <span style={{ color: "#0e3721" }}>Privacy Policy</span>.
        </label>
        <br />
        <button type="submit" className="submit formEntry">
          Submit
        </button>
      </form>
    </div>
  );
};

export default ContactUs;
