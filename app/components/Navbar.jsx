'use client';
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";

const Navbar = () => {

  return (
    <div className="navbar flex flex-row justify-between items-center md:w-[40%] mx-auto absolute bottom-2 md:left-[30vw] dark:bg-black dark:text-white bg-white text-black dark:border-gray-300 border-slate-900 border-1 p-4 rounded-lg dark:shadow-white shadow-black shadow-md w-full left-0">
      <Link href="/" className="flex flex-row items-center justify-center hover:scale-125" >
        <Image
          src="/static/icons/navbar/home.png"
          alt="Home"
          width={24}
          height={24}
        />
        <span>Home</span>
      </Link>
      <Link href="/about" className="flex flex-row items-center justify-center hover:scale-125" >
        <Image
          src="/static/icons/navbar/about.png"
          alt="About me"
          width={24}
          height={24}
        />
        <span>About me</span>
      </Link>
      <Link
        href="/projects"
        className="flex flex-row items-center justify-center hover:scale-125"
       >
        <Image
          src="/static/icons/navbar/project.png"
          alt="Projects"
          width={24}
          height={24}
        />
        <span>Projects</span>
      </Link>
      <Link
        href="/contact"
        className="flex flex-row items-center justify-center hover:scale-125"
       >
        <Image
          src="/static/icons/navbar/contact.png"
          alt="Contact me"
          width={24}
          height={24}
        />
        <span>contact me</span>
      </Link>
    </div>
  );
};

export default Navbar;
