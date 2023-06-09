import React from 'react';
import { Link } from 'react-router-dom';
import { Navigate } from 'react-router-dom';

export const NavigationBar = () => {
  const handleLogout = () => {
    localStorage.removeItem('token');
    window.location.replace('/');
  };

  return (
    <div className="navbar mb-9 flex items-center justify-between bg-gray-800 px-6">
      <div className="flex flex-col items-start ">
        <Link to={'/'}>
          <h1 className=" text-xl text-gray-200">Training Tracker</h1>
        </Link>
      </div>
      <div className="">
        <ul className="menu menu-horizontal px-1">
          <div className="dropdown-end dropdown">
            <label tabIndex={0} className="btn-ghost btn-circle avatar btn">
              <div className="flex w-12 items-center justify-center rounded-full border-2 border-gray-700  bg-gray-700/80"></div>
            </label>
            <ul tabIndex={0} className="menu-compact dropdown-content menu rounded-box mt-3 w-52  border-2 border-gray-800/30 bg-gray-900 p-2   shadow-2xl">
              <li>
                <Link to={'/settings'} className="text-lg">
                  Settings
                </Link>
              </li>
              <li>
                <a className="text-lg" onClick={handleLogout}>
                  Logout
                </a>
              </li>
            </ul>
          </div>
        </ul>
      </div>
    </div>
  );
};
