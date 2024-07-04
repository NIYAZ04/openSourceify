import React, { useState } from "react";
import "./Login.css";
import { Link, useNavigate } from "react-router-dom";
import { useMutation } from "@tanstack/react-query";
import { login } from "../../lib/api";

const Login: React.FC = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const {
    mutate: signIn,
    isPending,
    isError,
  } = useMutation({
    mutationFn: login,
    onSuccess: () => {
      navigate("/profile", {
        replace: true,
      });
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    signIn({ email, password });
  };

  return (
    <>
    <div className="thisCanFixErrorContainerForLogin">
    <div className="login-container">
      <h1>Login to your account</h1>
      {/* Display errors */}
      {isPending && <div className="error-message">Loading...</div>}
      {isError && (
        <div className="error-message">
          Invalid email or password. Please try again.
        </div>
      )}
      <form className="login-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && signIn({ email, password })}
          />
        </div>

        {/* Link to redirect to /password/forgot */}
        <Link
          to="/password/forgot"
          className="forgot-password-btn-in-Login-Form-99"
        >
          Forget Password?
        </Link>

        <button className="login-btn" id="signIn" type="submit">
          Sign in
        </button>
      </form>
      <p className="signup-link">
        Don't have an account?
        <Link to="/register" className="signup-btn">
          Sign up
        </Link>
      </p>
    </div>
    </div>

    </>
  );
};

export default Login;
