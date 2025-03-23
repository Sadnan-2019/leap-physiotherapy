import React from "react";
import { NavLink, Link } from "react-router-dom";
import "./Nav.css";

import { BsWhatsapp } from "react-icons/bs";
// import ReactWhatsapp from "react-whatsapp";

const Nav = () => {

  const gotoBtn = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };
  
  const active =
    "text-white  text-xs lg:font-medium text-sm border-b-2 border-white-900 pb-1 md:text-white-900 ";
  const normal =
    "   text-white-600 text-xs lg:font-medium text-sm  font-medium font-bold focus:text-white p-0 lg:text-white    ";

  const navItem = (
    <>
      <li rel="canonical"  className="p-2 nav-item " onClick={gotoBtn}>
        <NavLink
          className={({ isActive }) => (isActive ? `${active}` : `${normal}`)}
          to="/home"
        >
          Home
        </NavLink>
      </li>
      <li rel="canonical"  className="p-2 text-white dropdown dropdown-hover hover:border-none " onClick={gotoBtn}>
        <NavLink className="p-0 mx-1 text-xs font-medium text-white-600 lg:font-medium lg:text-sm focus:text-white lg:text-white ">
          Services
        </NavLink>

        <ul
          tabIndex={0}
          className="p-2 bg-blue-600 shadow w-44 dropdown-content menu rounded-box lg:w-52 "
        >
          <li className="dropdown dropdown-hover hover:border-none ">
            <li className="p-2 nav-item ">
              <NavLink
                className={({ isActive }) =>
                  isActive ? `${active}` : `${normal}`
                }
                to="/physiotherapy"
              >
                Physiotherapy
              </NavLink>
            </li>
            <li className="p-2 nav-item">
              <NavLink
                className={({ isActive }) =>
                  isActive ? `${active}` : `${normal}`
                }
                to="/electrothyrapy"
              >
                Electrotherapy
              </NavLink>
            </li>
            <li className="p-2 nav-item">
              <NavLink
                className={({ isActive }) =>
                  isActive ? `${active}` : `${normal}`
                }
                to="/manualtherapy"
              >
                Manual Therapy
              </NavLink>
            </li>
            <li className="p-2 nav-item">
              <NavLink
                className={({ isActive }) =>
                  isActive ? `${active}` : `${normal}`
                }
                to="/sports-injuries"
              >
                Sports Injuries
              </NavLink>
            </li>
            <li className="p-2 nav-item">
              <NavLink
                className={({ isActive }) =>
                  isActive ? `${active}` : `${normal}`
                }
                to="/rehabilitation"
              >
                Rehabilitation
              </NavLink>
            </li>
            <li className="p-2 nav-item">
              <NavLink
                className={({ isActive }) =>
                  isActive ? `${active}` : `${normal}`
                }
                to="/therapeutic-exercise"
              >
                Therapeutic exercise
              </NavLink>
            </li>
            <li className="p-2 nav-item">
              <NavLink
                className={({ isActive }) =>
                  isActive ? `${active}` : `${normal}`
                }
                to="/kinesio-taping-therapy"
              >
                Kinesio Taping Therapy
              </NavLink>
            </li>
            <li className="p-2 nav-item">
              <NavLink
                className={({ isActive }) =>
                  isActive ? `${active}` : `${normal}`
                }
                to="/dryneedling-acupuncture"
              >
                Dry <br></br>needling/Acupuncture
              </NavLink>
            </li>
          </li>
        </ul>
      </li>
      <li rel="canonical"  className="p-2 text-white dropdown dropdown-hover hover:border-none "onClick={gotoBtn}>
        <NavLink className="p-0 mx-1 text-xs font-medium text-white-600 lg:font-medium lg:text-sm focus:text-white lg:text-white ">
          Conditions
        </NavLink>

        <ul
          tabIndex={0}
          className="w-32 p-2 shadow dropdown-content menu rounded-box lg:w-52"
          style={{ backgroundColor: "#3E84DC" }}
        >
          <li rel="canonical"  className="p-2 nav-item">
            <NavLink
              className={({ isActive }) =>
                isActive ? `${active}` : `${normal}`
              }
              to="/back-pain"
            >
              Back Pain
            </NavLink>
          </li>
          <li rel="canonical"   className="p-2 nav-item">
            <NavLink
              className={({ isActive }) =>
                isActive ? `${active}` : `${normal}`
              }
              to="/neck-pain"
            >
              Neck Pain
            </NavLink>
          </li>
          <li rel="canonical"  className="p-2 nav-item">
            <NavLink
              className={({ isActive }) =>
                isActive ? `${active}` : `${normal}`
              }
              to="/shoulder-pain"
            >
              Shoulder Pain
            </NavLink>
          </li>
          <li rel="canonical"  className="p-2 nav-item">
            <NavLink
              className={({ isActive }) =>
                isActive ? `${active}` : `${normal}`
              }
              to="/elbow-pain"
            >
              Elbow Pain
            </NavLink>
          </li>
          <li rel="canonical"   className="p-2 nav-item">
            <NavLink
              className={({ isActive }) =>
                isActive ? `${active}` : `${normal}`
              }
              to="/knee-pain"
            >
              Knee Pain
            </NavLink>
          </li>
          
        </ul>
      </li>
      <li rel="canonical"  className="p-2 nav-item " onClick={gotoBtn}>
        <NavLink
          className={({ isActive }) => (isActive ? `${active}` : `${normal}`)}
          to="/team"
        >
          Meet The Team
        </NavLink>
      </li>
    
      <li rel="canonical"  className="p-2 nav-item" onClick={gotoBtn}>
        <NavLink
          className={({ isActive }) => (isActive ? `${active}` : `${normal}`)}
          to="/blog"
        >
          Blog
        </NavLink>
      </li>
      <li rel="canonical"  className="p-2 nav-item " onClick={gotoBtn}>
        <NavLink
          className={({ isActive }) => (isActive ? `${active}` : `${normal}`)}
          to="/about"
        >
          About
        </NavLink>
      </li>

      <li rel="canonical"  className="p-2 nav-item " onClick={gotoBtn}>
        <NavLink
          className={({ isActive }) => (isActive ? `${active}` : `${normal}`)}
          to="/contact"
        >
          Contacts
        </NavLink>
      </li>
    </>
  );
  return (
    <div className="sticky top-0 z-50">
      <div
        className="navbar bg-gradient-to-r from-[#2622B7]  to-[#2622B7]  "
        // data-aos="fade-down"
        // data-aos-duration="3000"
        // data-aos-offset="300"
        // data-aos-delay="5000"
      >
        <div className="navbar-start">
          <div className="dropdown">
            <label
              tabIndex={0}
              className="btn lg:hidden bg-gradient-to-r from-[#d3d7db]  to-[#2e723d]"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5  bg-gradient-to-r from-[#d3d7db]  to-[#829b88]"
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
              className="menu menu-compact dropdown-content mt-3 p-2 shadow text-white bg-gradient-to-r from-[#034ca7]  to-[#5f7499]   w-52"
            >
              {navItem}
            </ul>
          </div>
          {/* <div className="navbar-end">
          <a className="btn">Get started</a>
        </div> */}
        </div>
        <div className="hidden navbar-center lg:flex">
          <ul className="p-0 menu-horizontal">{navItem}</ul>
        </div>
        <div className="navbar-end">
          <a
            className="bg-green-500 rounded-full btn btn-sm animate-pulse whatsup "
            href="https://wa.me/+8801673615587"
            // href="https://wa.me/+8801767564737"
            title="WHATSAPP CHAT"
          >
            {" "}
            <BsWhatsapp></BsWhatsapp>
          </a>
        </div>
      </div>
    </div>
  );
};
export default Nav;
