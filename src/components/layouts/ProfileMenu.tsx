import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { User } from "firebase/auth";

import useAuth from "hooks/store/useAuth";

import { IoMdArrowDropdown } from "react-icons/io";

type AuthenticatedTemplateProps = {
  currentUser: User;
};

const AuthenticatedTemplate: React.FC<AuthenticatedTemplateProps> = ({
  currentUser,
}) => {
  const { logout } = useAuth();
  const [isOpenDropdown, setIsOpenDropdown] = useState(false);

  const handleLogout = () => {
    logout();
  };

  return (
    <>
      <div
        className="profile-menu__dropdown"
        onClick={() => setIsOpenDropdown(!isOpenDropdown)}
      >
        <div className="profile-menu__username">
          {currentUser.displayName
            ? currentUser.displayName
            : currentUser.email}
        </div>
        <div
          className="profile-menu__avatar"
          style={{ backgroundImage: `url(${currentUser.photoURL})` }}
        ></div>
        <IoMdArrowDropdown />

        {isOpenDropdown && (
          <div className="dropdown-options">
            <div className="dropdown-options__item">my details</div>
            <div
              className="dropdown-options__item"
              onClick={() => handleLogout()}
            >
              logout
            </div>
          </div>
        )}
      </div>
    </>
  );
};

const UnauthenticatedTemplate: React.FC<{}> = () => {
  return (
    <Link to="/auth">
      <div className="btn-login">Login</div>
    </Link>
  );
};

const ProfileMenu: React.FC<{}> = () => {
  const { currentUser } = useAuth();

  return (
    <div className="profile-menu">
      {currentUser ? (
        <AuthenticatedTemplate currentUser={currentUser} />
      ) : (
        <UnauthenticatedTemplate />
      )}
    </div>
  );
};

export default ProfileMenu;
