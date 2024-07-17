import React, { useState } from "react";
import "./register.css";
import { Link, useNavigate } from "react-router-dom";
import { useMutation } from "@tanstack/react-query";
import { register } from "../../lib/api";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { AxiosError } from "axios";
const Register: React.FC = () => {
  const navigate = useNavigate();
  const [userName, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const {
    mutate: createAccount,
    isPending,
    isError,
    error,
  } = useMutation({
    mutationFn: register,
    onSuccess: () => {
      navigate("/profile", {
        replace: true,
      });
    },
    onError: (error: AxiosError) => {
      if (error.response?.data) {
        const errorData = error.response.data as { message: string }[];
        errorData.forEach((err) => {
          toast.error(err.message);
        });
      } else {
        toast.error("Please check your credentials");
      }
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Client side validation
    if (password !== confirmPassword) {
      toast.error("Passwords do not match");
      return;
    }

    if (password.length < 6) {
      toast.error("Password must be at least 6 characters long");
      return;
    }

    createAccount({ email, password, confirmPassword, userName });
  };

  return (
    <>
      <div className="thisCanFixTheRegisterContainer">
        <div className="register-container">
          <div className="welcome-message">Hello Tech Enthusiast</div>
          {isPending && <div className="error-message">Loading...</div>}
          {isError && (
            <div className="error-message">
              {error?.message || "Please check your credentials"}
            </div>
          )}
          <h1>Create your account</h1>
          <form className="register-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="userName"
                value={userName}
                onChange={(e) => setName(e.target.value)}
              />
            </div>

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
              />
            </div>

            <div className="form-group">
              <label htmlFor="confirmPassword">Confirm Password</label>
              <input
                type="password"
                id="confirmPassword"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                onKeyDown={(e) =>
                  e.key === "Enter" &&
                  createAccount({ email, password, confirmPassword, userName })
                }
              />
            </div>

            <button className="register-btn" id="register" type="submit">
              Register
            </button>
          </form>

          <p className="login-link">
            Have an account?
            <Link to="/login" className="login-btn">
              Login
            </Link>
          </p>
        </div>
      </div>
      <ToastContainer />
    </>
  );
};

export default Register;
