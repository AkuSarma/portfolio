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
      className="fixed top-4 left-4 p-2 bg-gray-800 text-white rounded-full"
    >
      {
        dark && <>dark</> // render sunny when dark is true
      }
      {
        !dark && <>not dark</> // render moon when dark is false
      }
    </button>
  );
}

export default DarkModeToogle