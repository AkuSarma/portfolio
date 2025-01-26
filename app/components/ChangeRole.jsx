import React, { useEffect, useState } from 'react';

const roles = ["Fullstack developer", "UI/UX Developer", "Mobile App Developer", "IoT Enthusiast"];

const ChangeRole = () => {
  const [currentRole, setCurrentRole] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRole((prevRole) => (prevRole + 1) % roles.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <span className="animate-fade">
      {roles[currentRole]}
    </span>
  );
};

export default ChangeRole;