import React, { useState } from 'react';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';
import { logout } from '../lib/api';
import userAvetar from "../assets/images/user-avatar.png";
import './UserMenu.css';

const UserMenu: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const { mutate: signOut } = useMutation({
    mutationFn: logout,
    onSettled: () => {
      queryClient.clear();
      navigate('/login', { replace: true });
    },
  });

  const handleLogout = () => {
    signOut();
    setIsMenuOpen(false); // Close menu on logout
  };

  const handleNavigation = (path: string) => {
    navigate(path);
    setIsMenuOpen(false); // Close menu on navigation
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="menu-container">
      <button className="menu-button" onClick={toggleMenu}>
        <img className="avatar" src={userAvetar} alt="User Avatar" />
      </button>
      {isMenuOpen && (
        <div className="menu-list">
          <button className="menu-item" onClick={() => handleNavigation('/profile')}>
            Profile
          </button>
          <button className="menu-item" onClick={() => handleNavigation('/settings')}>
            Settings
          </button>
          <button className="menu-item" onClick={handleLogout}>
            Logout
          </button>
        </div>
      )}
    </div>
  );
};

export default UserMenu;
