import React from 'react';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';
import { logout } from '../lib/api';
import userAvetar from "../assets/images/user-avatar.png";
import './UserMenu.css';

const UserMenu: React.FC = () => {
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
  };
  return (
    <div className="menu-container">
      <button className="menu-button">
        <img className="avatar" src={userAvetar} alt="User Avatar" />
      </button>
      <div className="menu-list">
        <button className="menu-item" onClick={() => navigate('/profile')}>
          Profile
        </button>
        <button className="menu-item" onClick={() => navigate('/settings')}>
          Settings
        </button>
        <button className="menu-item" onClick={handleLogout}>
          Logout
        </button>
      </div>
    </div>
  );
};

export default UserMenu;
