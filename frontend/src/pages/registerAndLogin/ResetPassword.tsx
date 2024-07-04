import { useSearchParams, Link } from "react-router-dom";
import React from "react";
import ResetPasswordForm from "../../components/ResetPasswordForm";

const ResetPassword: React.FC = () => {
  const [searchParams] = useSearchParams();
  const code = searchParams.get("code");
  const exp = Number(searchParams.get("exp"));
  const now = Date.now();
  const linkIsValid = code && exp && exp > now;

  return (
    <div className="reset-password-container">
      {linkIsValid ? (
        <ResetPasswordForm code={code} />
      ) : (
        <div className="invalid-link-container">
          <div className="error-message">Invalid Link</div>
          <div className="error-description">
            The link is either invalid or expired.
          </div>
          <Link to="/password/forgot" className="navigation-link">
            Request a new password reset link
          </Link>
        </div>
      )}
    </div>
  );
};

export default ResetPassword;
