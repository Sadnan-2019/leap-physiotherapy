import React, { useState, useEffect, useRef } from "react";
import { NavLink, Link } from "react-router-dom";
import { BsWhatsapp } from "react-icons/bs";
import "./Nav.css";

const Nav = () => {
  // Track which dropdown is open on click
  const [openDropdown, setOpenDropdown] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  const navRef = useRef(null);

  // Close dropdowns if clicking anywhere outside the navbar
  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (navRef.current && !navRef.current.contains(event.target)) {
        setOpenDropdown(null);
        setMobileMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleOutsideClick);
    return () => document.removeEventListener("mousedown", handleOutsideClick);
  }, []);

  const toggleDropdown = (name, e) => {
    e.preventDefault();
    e.stopPropagation();
    setOpenDropdown(openDropdown === name ? null : name);
  };

  const handleLinkClick = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    setOpenDropdown(null);
    setMobileMenuOpen(false);
  };

  const activeClass = "text-white text-sm font-semibold border-b-2 border-white pb-1";
  const normalClass = "text-slate-200 text-sm font-medium hover:text-white transition duration-200";

  const servicesList = [
    { to: "/physiotherapy", label: "Physiotherapy" },
    { to: "/electrothyrapy", label: "Electrotherapy" },
    { to: "/manualtherapy", label: "Manual Therapy" },
    { to: "/sports-injuries", label: "Sports Injuries" },
    { to: "/rehabilitation", label: "Rehabilitation" },
    { to: "/therapeutic-exercise", label: "Therapeutic Exercise" },
    { to: "/kinesio-taping-therapy", label: "Kinesio Taping Therapy" },
    { to: "/dryneedling-acupuncture", label: "Dry Needling / Acupuncture" },
  ];

  const conditionsList = [
    { to: "/back-pain", label: "Back Pain" },
    { to: "/neck-pain", label: "Neck Pain" },
    { to: "/shoulder-pain", label: "Shoulder Pain" },
    { to: "/elbow-pain", label: "Elbow Pain" },
    { to: "/knee-pain", label: "Knee Pain" },
  ];

  return (
  <nav ref={navRef} className="sticky top-0 z-50 bg-[#2622B7] shadow-md text-white">
    {/* Wrapped in a relative container to align the floating elements seamlessly */}
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
      <div className="flex items-center justify-between lg:justify-center h-16">
        
        {/* Mobile Menu Button Container (Kept on the far left via absolute placement) */}
        <div className="flex lg:hidden absolute left-4">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="inline-flex items-center justify-center p-2 rounded-md text-white hover:bg-blue-700 focus:outline-none transition duration-200"
            aria-label="Toggle Menu"
          >
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Centered Desktop Navigation Links */}
        <div className="hidden lg:flex items-center space-x-8 justify-center w-full">
          <NavLink to="/home" className={({ isActive }) => isActive ? activeClass : normalClass} onClick={handleLinkClick}>
            Home
          </NavLink>

          {/* Clickable Services Dropdown */}
          <div className="relative">
            <button 
              onClick={(e) => toggleDropdown("services", e)}
              className={`${normalClass} flex items-center space-x-1 focus:outline-none`}
            >
              <span>Services</span>
              <svg className={`w-4 h-4 transform transition-transform duration-200 ${openDropdown === "services" ? "rotate-180" : ""}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" /></svg>
            </button>
            {openDropdown === "services" && (
              <div className="absolute left-1/2 -translate-x-1/2 mt-2 w-56 rounded-xl shadow-xl bg-blue-600 border border-white/10 overflow-hidden py-1 z-50 animate-fadeIn">
                {servicesList.map((item) => (
                  <NavLink key={item.to} to={item.to} className={({ isActive }) => `block px-4 py-2.5 text-sm ${isActive ? "bg-blue-800 text-white font-bold" : "text-blue-50 hover:bg-blue-700"}`} onClick={handleLinkClick}>
                    {item.label}
                  </NavLink>
                ))}
              </div>
            )}
          </div>

          {/* Clickable Conditions Dropdown */}
          <div className="relative">
            <button 
              onClick={(e) => toggleDropdown("conditions", e)}
              className={`${normalClass} flex items-center space-x-1 focus:outline-none`}
            >
              <span>Conditions</span>
              <svg className={`w-4 h-4 transform transition-transform duration-200 ${openDropdown === "conditions" ? "rotate-180" : ""}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" /></svg>
            </button>
            {openDropdown === "conditions" && (
              <div className="absolute left-1/2 -translate-x-1/2 mt-2 w-52 rounded-xl shadow-xl bg-[#3E84DC] border border-white/10 overflow-hidden py-1 z-50 animate-fadeIn">
                {conditionsList.map((item) => (
                  <NavLink key={item.to} to={item.to} className={({ isActive }) => `block px-4 py-2.5 text-sm ${isActive ? "bg-blue-800 text-white font-bold" : "text-blue-50 hover:bg-blue-500"}`} onClick={handleLinkClick}>
                    {item.label}
                  </NavLink>
                ))}
              </div>
            )}
          </div>

          <NavLink to="/team" className={({ isActive }) => isActive ? activeClass : normalClass} onClick={handleLinkClick}>Meet The Team</NavLink>
          <NavLink to="/blog" className={({ isActive }) => isActive ? activeClass : normalClass} onClick={handleLinkClick}>Blog</NavLink>
          <NavLink to="/about" className={({ isActive }) => isActive ? activeClass : normalClass} onClick={handleLinkClick}>About</NavLink>
          <NavLink to="/contact" className={({ isActive }) => isActive ? activeClass : normalClass} onClick={handleLinkClick}>Contacts</NavLink>
        </div>

        {/* WhatsApp Button Action (Kept on the far right via absolute placement) */}
        <div className="flex items-center absolute right-4 sm:right-6 lg:right-8">
          <a
            className="bg-green-500 hover:bg-green-600 text-white p-2.5 rounded-full shadow-lg transition duration-300 transform hover:scale-105 flex items-center justify-center whatsapp-flicker"
            href="https://wa.me/+8801673615587"
            title="WHATSAPP CHAT"
            target="_blank"
            rel="noopener noreferrer"
          >
            <BsWhatsapp className="w-5 h-5" />
          </a>
        </div>

      </div>
    </div>

    {/* Mobile Sidebar/Drawer Menu */}
    {mobileMenuOpen && (
      <div className="lg:hidden bg-[#1d1a94] border-t border-white/10 px-4 py-4 space-y-3 max-h-[calc(100vh-4rem)] overflow-y-auto animate-fadeIn">
        <NavLink to="/home" className="block py-2 text-base font-medium text-slate-200 hover:text-white" onClick={handleLinkClick}>Home</NavLink>
        
        {/* Mobile Services Accordion */}
        <div>
          <button onClick={(e) => toggleDropdown("services", e)} className="w-full flex justify-between items-center py-2 text-base font-medium text-slate-200 hover:text-white">
            <span>Services</span>
            <svg className={`w-4 h-4 transform ${openDropdown === "services" ? "rotate-180" : ""}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" /></svg>
          </button>
          {openDropdown === "services" && (
            <div className="pl-4 mt-1 space-y-1 bg-black/10 rounded-lg py-1">
              {servicesList.map((item) => (
                <NavLink key={item.to} to={item.to} className="block py-2 px-3 text-sm text-slate-300 hover:text-white" onClick={handleLinkClick}>{item.label}</NavLink>
              ))}
            </div>
          )}
        </div>

        {/* Mobile Conditions Accordion */}
        <div>
          <button onClick={(e) => toggleDropdown("conditions", e)} className="w-full flex justify-between items-center py-2 text-base font-medium text-slate-200 hover:text-white">
            <span>Conditions</span>
            <svg className={`w-4 h-4 transform ${openDropdown === "conditions" ? "rotate-180" : ""}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" /></svg>
          </button>
          {openDropdown === "conditions" && (
            <div className="pl-4 mt-1 space-y-1 bg-black/10 rounded-lg py-1">
              {conditionsList.map((item) => (
                <NavLink key={item.to} to={item.to} className="block py-2 px-3 text-sm text-slate-300 hover:text-white" onClick={handleLinkClick}>{item.label}</NavLink>
              ))}
            </div>
          )}
        </div>

        <NavLink to="/team" className="block py-2 text-base font-medium text-slate-200 hover:text-white" onClick={handleLinkClick}>Meet The Team</NavLink>
        <NavLink to="/blog" className="block py-2 text-base font-medium text-slate-200 hover:text-white" onClick={handleLinkClick}>Blog</NavLink>
        <NavLink to="/about" className="block py-2 text-base font-medium text-slate-200 hover:text-white" onClick={handleLinkClick}>About</NavLink>
        <NavLink to="/contact" className="block py-2 text-base font-medium text-slate-200 hover:text-white" onClick={handleLinkClick}>Contacts</NavLink>
      </div>
    )}
  </nav>
);
};

export default Nav;