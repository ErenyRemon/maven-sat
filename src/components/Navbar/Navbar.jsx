import React, { useState } from "react";
import "./Navbar.css";
import { MdOutlineWhatsapp } from "react-icons/md";
import { FaFacebook } from "react-icons/fa";
import { FaBars, FaTimes } from "react-icons/fa";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="logo">
        <a href="http://localhost:3000/"> <img src="./logo.png" alt="Maven Sat Logo" /></a>
      </div>

       <div className="menu-icon" onClick={() => setIsOpen(true)}>
        <FaBars />
      </div>
      
      {/* <ul className="nav-links"> */}

        <ul className={`nav-links ${isOpen ? "open" : ""}`}>
           <li className="close-btn" onClick={() => setIsOpen(false)}>
          <FaTimes />
        </li>
          <li><a className="contact" href="https://wa.me/201207710703">اتصل بنا</a></li>
          <li><a className="icon" href="https://wa.me/201207710703"><MdOutlineWhatsapp /></a></li>
          <li><a className="icon" href="https://wa.me/201207710703"><FaFacebook /></a></li>
        </ul>
    </nav>
  );
}

export default Navbar;
