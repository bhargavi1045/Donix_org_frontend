"use client"
import React, { useState } from 'react';
import { RiHealthBookFill } from "react-icons/ri";
import { IoLogoGameControllerA } from "react-icons/io";
import { TiMessages } from "react-icons/ti";
import { FaUserFriends } from "react-icons/fa";
import { VscGitPullRequestNewChanges } from "react-icons/vsc";
import { MdOutlineEmojiTransportation } from "react-icons/md";
import { BiDonateBlood } from "react-icons/bi";
import './Navbar.css';

const Navbar: React.FC = () => {
  const [collapsed, setCollapsed] = useState(false);

  const toggleNavbar = () => {
    setCollapsed(!collapsed);
  };

  return (
    <nav className={`navbar ${collapsed ? 'collapsed' : ''}`}>
      <ul className="navbar__menu">
        <li className="navbar__item" onClick={toggleNavbar}>
          <a href="#" className="navbar__link">
          <i > <IoLogoGameControllerA size={30} /></i>
            
          </a>
        </li>
        {!collapsed && (
          <>
            <li className="navbar__item">
              <a href="#" className="navbar__link">
              <i > <TiMessages size={30} /></i>
                <span>Messages</span>
              </a>
            </li>
            <li className="navbar__item">
              <a href="#" className="navbar__link">
              <i > <FaUserFriends size={30} /></i>
                <span>Friends</span>
              </a>
            </li>
            <li className="navbar__item">
              <a href="#" className="navbar__link">
              <i > <RiHealthBookFill size={30} /></i>
                <span>Health Tracker</span>
              </a>
            </li>
            <li className="navbar__item">
              <a href="#" className="navbar__link">
              <i > <VscGitPullRequestNewChanges size={30} /></i>
                <span>My Requests</span>
              </a>
            </li>
            <li className="navbar__item">
              <a href="#" className="navbar__link">
              <i > <MdOutlineEmojiTransportation size={30} /></i>
                <span>Transport Tracking</span>
              </a>
            </li>
            <li className="navbar__item">
              <a href="#" className="navbar__link">
              <i > <BiDonateBlood  size={30} /></i>
                <span>Donation History</span>
              </a>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;
