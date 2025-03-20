"use client";
import React, { useState, useEffect } from "react";
import { MdDarkMode, MdLightMode } from "react-icons/md";
import { FaUserEdit, FaBuilding, FaLightbulb } from "react-icons/fa";
import { FiChevronsDown, FiChevronsUp } from "react-icons/fi";

const menuItems = [
  {
    title: "Register",
    icon: <FaUserEdit />,
    links: [
      { name: "Donor Registration", path: "/register/donor" },
      { name: "Recipient Registration", path: "/register/recipient" },
      { name: "Hospital & NGO Registration", path: "/register/hospital-ngo" },
    ],
  },
  {
    title: "Hospitals & Partners",
    icon: <FaBuilding />,
    links: [
      { name: "Verified Hospitals", path: "/hospitals/verified" },
      { name: "NGO & Partner List", path: "/hospitals/ngo-partners" },
      { name: "Government Agencies", path: "/hospitals/government" },
    ],
  },
  {
    title: "Awareness Campaigns",
    icon: <FaLightbulb />,
    links: [
      { name: "Upcoming Webinars", path: "/campaigns/webinars" },
      { name: "Organ Donation Events", path: "/campaigns/events" },
      { name: "Awareness Articles", path: "/campaigns/articles" },
    ],
  },
];

interface NavbarProps {
  darkMode: boolean;
  setDarkMode: React.Dispatch<React.SetStateAction<boolean>>;
}

const Navbar: React.FC<NavbarProps> = ({ darkMode, setDarkMode }) => {
  const [activeMenu, setActiveMenu] = useState<string | null>(null);

  useEffect(() => {
    // Load dark mode preference from localStorage
    const storedMode = localStorage.getItem("darkMode");
    if (storedMode === "1") {
      setDarkMode(true);
      document.documentElement.classList.add("dark");
    } else {
      setDarkMode(false);
      document.documentElement.classList.remove("dark");
    }
  }, []);

  const toggleDarkMode = () => {
    setDarkMode((prev) => {
      const newMode = !prev;
      localStorage.setItem("darkMode", newMode ? "1" : "0"); // Store in localStorage
      document.documentElement.classList.toggle("dark", newMode);
      return newMode;
    });
  };

  const toggleMenu = (menuTitle: string) => {
    setActiveMenu(activeMenu === menuTitle ? null : menuTitle);
  };

  return (
    <nav className={`shadow-lg fixed top-0 left-0 w-full z-50 transition duration-300 ${darkMode ? "bg-gray-900 text-white" : "bg-gray-100 text-gray-800"}`}>
      <div className="container flex items-center justify-between p-4 mx-auto">
        {/* Menu Items */}
        <div className="flex items-center gap-4 md:gap-8">
          {menuItems.map((menu) => (
            <div key={menu.title} className="relative group">
              <button
                onClick={() => toggleMenu(menu.title)}
                className="flex items-center gap-2 hover:text-blue-500 dark:hover:text-blue-300"
              >
                {menu.icon}
                <span className="hidden md:inline-flex">{menu.title}</span> 
                {activeMenu === menu.title ? <FiChevronsUp /> : <FiChevronsDown />}
              </button>
              {activeMenu === menu.title && (
                <div className={`absolute left-0 mt-2 shadow-lg rounded-lg p-4 ${darkMode ? "bg-gray-800" : "bg-white"}`}>
                  {menu.links.map((link) => (
                    <a key={link.name} href={link.path} className={`block w-fit px-4 py-2 rounded ${darkMode ? "hover:bg-gray-700" : "hover:bg-gray-100"}`}>
                      {link.name}
                    </a>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Dark Mode Toggle */}
        <button onClick={toggleDarkMode} className="text-2xl focus:outline-none hover:text-blue-500 dark:hover:text-blue-300 transition duration-300">
          {darkMode ? <MdLightMode /> : <MdDarkMode />}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
