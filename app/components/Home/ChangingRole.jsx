'use client';
import React, { useState, useEffect } from "react";
import "../../styles/ChangingRoles.css";

const Roles = [
  "Full-Stack Developer",
  "MERN Stack",
  "PostgreSQL",
  "Django Developer",
  "Mobile App Creator",
  "Flutter",
  "Supabase",
  "IoT Enthusiast",
];

const ChangingRole = () => {
  const [currentRole, setCurrentRole] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRole((prevRole) => (prevRole + 1) % Roles.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="role-container">
      <span className="role">{Roles[currentRole]}</span>
    </div>
  );
}

export default ChangingRole;
