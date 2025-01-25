'use client';
import "./styles/Home.css";
import Link from "next/link";

export default function Home() {
  const openCV = () => {
    window.open(
      "https://drive.google.com/file/d/1HEm3k5yqF81DWrHfTQds1b1n3dTrv9mQ/view?usp=drive_link"
    );
  };

  return (
    <div className="home min-h-svh flex flex-col justify-center items-center px-[20vw] bg-white dark:bg-slate-700 text-slate-900 dark:text-slate-100">
      <h2>Aku Sarma</h2>
      <p>Hi! I'm a Full Stack Developer</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit quos quod esse fuga hic ducimus cupiditate nisi vitae eveniet ipsam! Asperiores dignissimos quaerat quasi optio sit sunt, repellendus eos placeat!</p>
      <div className="home__buttons flex flex-col md:flex-row">
        <Link href="/about">
          <button>About Me</button>
        </Link>
        <button onClick={openCV}>Resume</button>
      </div>
    </div>
  );
}
