import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import Logo from "./SpaceLogo";
import "./styles/Nav.css";

const Nav = () => (
  <div className="w-full h-screen overflow-y-auto overflow-x-hidden">
    <div className="nav-container w-full px-2 lg:px-10">
      <nav className="w-full nav-bar h-[1.5cm] flex flex-row items-center justify-between shadow-md">
        <div className="nav header flex flex-row gap-2">
          <img src="" alt="logo" />
          <h1>Space Travellers&apos;s Hub</h1>
        </div>
        <ul className="nav-links text-blue-600 flex flex-row gap-3 text-[17px]">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? "underline font-bold" : ""
              }
            >
              Rockets
            </NavLink>
          </li>
          <li className="">
            <NavLink
              to="/Missions"
              className={({ isActive }) =>
                isActive ? "underline font-bold" : ""
              }
            >
              Missions
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/MyProfile"
              className={({ isActive }) =>
                isActive ? "underline font-bold" : ""
              }
            >
              My Profile
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
    <Outlet />
  </div>
);

export default Nav;
