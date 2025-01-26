'use client';
import { useState } from 'react';
import Image from 'next/image';

const DarkModeToogle = () => {
  const [dark, setDark] = useState(false);

  const darkModeHandler = () => {
    setDark(!dark);
    document.body.classList.toggle("dark");
  };

  return (
    <button 
      onClick={() => darkModeHandler()} 
      className="fixed top-4 left-4 p-2 bg-gray-800 text-white rounded-full w-8 hover:scale-125 active:scale-100 hover:shadow-lg"
    >
      {
        dark && <Image src="/static/icons/darkMode/sunny.png" alt="sun" width={24} height={24} />
      }
      {
        !dark && <Image src="/static/icons/darkMode/crescent-moon.png" alt="moon" width={24} height={24} />
      }
    </button>
  );
}

export default DarkModeToogle;