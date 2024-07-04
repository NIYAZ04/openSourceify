import React, { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { Link } from "react-router-dom";
import { resetPassword } from "../lib/api";

interface ResetPasswordFormProps {
  code: string;
}

const ResetPasswordForm: React.FC<ResetPasswordFormProps> = ({ code }) => {
  const [password, setPassword] = useState("");
  const {
    mutate: resetUserPassword,
     isPending,
    isSuccess,
    isError,
    error,
  } = useMutation({
    mutationFn: resetPassword,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    resetUserPassword({ password, verificationCode: code });
  };

  return (
    <div className="reset-password-form-container">
      <div className="form-title">Change your password</div>
      {isError && <div className="error-message">{error.message || "An error occurred"}</div>}
      {isSuccess ? (
        <div className="success-message">
          Password updated successfully!
          <Link to="/login" className="navigation-link">Sign in</Link>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="reset-password-form">
          <div className="form-group">
            <label htmlFor="password">New Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              autoFocus
            />
          </div>
          <button
            type="submit"
            className="reset-password-btn"
            disabled={password.length < 6 || isPending}
          >
            {isPending ? "Resetting..." : "Reset Password"}
          </button>
        </form>
      )}
    </div>
  );
};

export default ResetPasswordForm;
