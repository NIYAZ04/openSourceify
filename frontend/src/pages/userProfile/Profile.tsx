
import useAuth from '../../hooks/useAuth';
import './profile.css';
import ProfileProjects from './profileProject';
const Profile = () => {
  const { user } = useAuth();

  if (!user) {
    return <div className="Profile-center-sourceify Profile-margin-top-16-sourceify">Loading...</div>;
  }

  const { userName, email, verified, createdAt } = user;

  return (
    <div className="Profile-center-sourceify Profile-margin-top-16-sourceify Profile-flex-column-sourceify">
      <h2 className="Profile-heading-sourceify">My Account</h2>
      {!verified && (
        <div className="Profile-alert-sourceify">
          <span className="Profile-alert-icon-sourceify">⚠️</span>
          Please verify your email
        </div>
      )}
      <p className="Profile-text-sourceify">
        UserName:{" "}
        <span className="Profile-text-span-sourceify">
          {userName}
        </span>
      </p>
      <p className="Profile-text-sourceify">
        Email:{" "}
        <span className="Profile-text-span-sourceify">
          {email}
        </span>
      </p>
      <p className="Profile-text-sourceify">
        Created on{" "}
        <span className="Profile-text-span-sourceify">
          {new Date(createdAt).toLocaleDateString("en-US")}
        </span>
      </p>

      <div className="Profile-projects-container">
        <ProfileProjects />
      </div>
    </div>
    
  );
};

export default Profile;
