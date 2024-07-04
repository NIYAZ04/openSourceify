import { useQuery } from "@tanstack/react-query";
import { useParams, Link } from "react-router-dom";
import { verifyEmail } from "../../lib/api";

const VerifyEmail: React.FC = () => {
  const { code } = useParams<{ code: string }>(); // Ensure `code` is treated as string

  const { isLoading, isSuccess, isError } = useQuery({
    queryKey: ["emailVerification", code],
    queryFn: () => verifyEmail(code!), // Pass `code` directly as string
  });

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "100vh",
        textAlign: "center",
      }}
    >
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        <>
          <div
            style={{
              padding: "20px",
              borderRadius: "8px",
              border: isSuccess ? "1px solid green" : "1px solid red",
              backgroundColor: isSuccess ? "#d4edda" : "#f8d7da",
            }}
          >
            {isSuccess ? "Email Verified!" : "Invalid Link"}
          </div>
          {isError && (
            <p style={{ color: "gray" }}>
              The link is either invalid or expired.{" "}
              <Link to="/password/forgot" replace>
                Get a new link
              </Link>
            </p>
          )}
          <Link to="/" replace>
            Back to home
          </Link>
        </>
      )}
    </div>
  );
};

export default VerifyEmail;
