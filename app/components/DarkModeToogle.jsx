'use client';
import {useState} from 'react'

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
        dark && <img src="static/icons/sunny.png" alt="sun"/>
      }
      {
        !dark && <img src="static/icons/crescent-moon.png" alt="moon"/>
      }
    </button>
  );
}

export default DarkModeToogle