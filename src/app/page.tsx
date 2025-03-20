"use client";
import React, { useState, useEffect } from "react";
import Navbar from "../components/Landing_page/Navbar";
import Hero from "@/components/Landing_page/hero";

const Home: React.FC = () => {
  const [darkMode, setDarkMode] = useState<boolean>(() => {
    if (typeof window !== "undefined") {
      return localStorage.getItem("darkMode") === "1"; // Retrieve from localStorage
    }
    return false; // Default to false (light mode)
  });

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    localStorage.setItem("darkMode", darkMode ? "1" : "0"); // Save to localStorage
  }, [darkMode]);

  return (
    <div className={`${darkMode ? "dark" : ""} `}>
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
        <Hero darkMode={darkMode} />
    </div>
  );
};

export default Home;
