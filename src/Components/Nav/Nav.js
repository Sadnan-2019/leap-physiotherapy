import React from "react";
import { NavLink } from "react-router-dom";

const Nav = () => {
  const active =
    "text-white mx-1 font-medium border-b-2 border-white-900 pb-1 md:text-white-900 ";
  const normal =
    "  mx-1 text-white-600 font-medium font-bold focus:text-white p-0 lg:text-white   ";

  const navItem = (
    <>
      <li className="nav-item p-2 	">
        <NavLink
          className={({ isActive }) => (isActive ? `${active}` : `${normal}`)}
          to="/home"
        >
          Home
        </NavLink>
      </li>

      <li className="nav-item p-2">
        <NavLink
          className={({ isActive }) => (isActive ? `${active}` : `${normal}`)}
          to="/physiotherapy"
        >
          Physiotherapy
        </NavLink>
      </li>
      <li className="nav-item p-2 	">
        <NavLink
          className={({ isActive }) => (isActive ? `${active}` : `${normal}`)}
          to="/spinal-pain"
        >
          Spinal Pain
        </NavLink>
      </li>
      <li className="nav-item p-2 	">
        <NavLink
          className={({ isActive }) => (isActive ? `${active}` : `${normal}`)}
          to="/nursing"
        >
          Pre & Post Operative Rehabilitation
        </NavLink>
      </li>
      {/* <li className="nav-item p-2">
              <NavLink
                className={({ isActive }) => (isActive ? `${active}` : `${normal}`)}
                to="/medical-assistant"
              >
                Medical Assistant
              </NavLink>
            </li>
            <li className="nav-item p-2">
              <NavLink
                className={({ isActive }) => (isActive ? `${active}` : `${normal}`)}
                to="/medical-caregiver"
              >
                Medical Caregiver
              </NavLink>
            </li>
            <li className="nav-item p-2">
              <NavLink
                className={({ isActive }) => (isActive ? `${active}` : `${normal}`)}
                to="/caregiver"
              >
                Caregiver
              </NavLink>
            </li>
            
            <li className="nav-item p-2">
              <NavLink
                className={({ isActive }) => (isActive ? `${active}` : `${normal}`)}
                to="/nanycare"
              >
                Nanycare
              </NavLink>
            </li>
            <li className="nav-item p-2">
              <NavLink
                className={({ isActive }) => (isActive ? `${active}` : `${normal}`)}
                to="/companion"
              >
                Companionship 
              </NavLink>
            </li>
            <li className="nav-item p-2">
              <NavLink
                className={({ isActive }) => (isActive ? `${active}` : `${normal}`)}
                to="/medical-equipment"
              >
                Medical Equipment
              </NavLink>
            </li> */}

      {/* <li className="dropdown dropdown-hover hover:border-none" style={{ backgroundColor: "#453364" }} > 
             
        <div className="flex items-center">
        <label tabIndex={0} className="m-1 text-white" style={{ backgroundColor: "#453364" }}>More</label>
        <svg
                  class="fill-current h-4 w-4 text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />{" "}
                </svg>
        </div>
        
        
        
        <ul tabIndex={0} className="w-24 dropdown-content menu p-2 shadow  rounded-box lg:w-52" style={{ backgroundColor: "#453364" }}>
        <li className="nav-item p-2">
              <NavLink
                className={({ isActive }) => (isActive ? `${active}` : `${normal}`)}
                to="/blog"
              >
                Blog
              </NavLink>
            </li>
            <li className="nav-item p-2">
              <NavLink
                className={({ isActive }) => (isActive ? `${active}` : `${normal}`)}
                to="/about"
              >
                About
              </NavLink>
            </li>
            <li className="nav-item p-2">
              <NavLink
                className={({ isActive }) => (isActive ? `${active}` : `${normal}`)}
                to="/contact"
              >
                Contact
              </NavLink>
            </li>
        </ul>
       
      
      
            </li>
       */}
    </>
  );
  return (
    <div>
      <div className="navbar  " style={{ backgroundColor: "#CB052F" }}>
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              {navItem}
            </ul>
          </div>
          <a className="btn btn-ghost normal-case text-xl">daisyUI</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal p-0">{navItem}</ul>
        </div>
        <div className="navbar-end">
          <a className="btn">Get started</a>
        </div>
      </div>
    </div>
  );
};

export default Nav;
