import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useMutation } from "@tanstack/react-query";
import './ForgotPassword.css'; // Make sure to import the CSS file
import { sendPasswordResetEmail } from "../../lib/api";

const ForgotPassword: React.FC = () => {
  const [email, setEmail] = useState("");

  const {
    mutate: sendPasswordReset,
    isPending,
    isSuccess,
    isError,
    error,
  } = useMutation({
    mutationFn: sendPasswordResetEmail,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    sendPasswordReset(email); 
  };

  return (
    <div className="forgotPassword-container">
      <div className="welcome-message">Enter your Email</div>
      <form className="forgot-password-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="email">Email </label>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="forgot-password-btn">
          Send Reset Link
        </button>
      </form>
     
      {isPending && <div className="error-message">Loading...</div>}
      {isError && (
        <div className="error-message">
          {error?.message || "An error occurred. Please try again."}
        </div>
      )}
      {isSuccess && (
        <div className="success-message">
          Email sent! Check your inbox for further instructions.
        </div>
      )}
      <div className="navigation-links">
        <Link to="/login" className="navigation-link">
          Go back to Login
        </Link>
        <br />
        <Link to="/register" className="navigation-link">
          Go back to Signup
        </Link>
      </div>
    </div>
  );
};

export default ForgotPassword;
