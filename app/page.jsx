"use client";
import ChangingRole from "./components/Home/ChangingRole";
import "./styles/Home.css";
import Link from "next/link";
import Image from "next/image";

export default function Home() {
  const openCV = () => {
    window.open(
      "https://drive.google.com/file/d/1HEm3k5yqF81DWrHfTQds1b1n3dTrv9mQ/view?usp=drive_link"
    );
  };

  return (
    <div className="home">
      <section className="hero max-h-80vh flex flex-col md:flex-row items-center justify-between p-6 md:p-12">
        <div className="left flex-1 text-center md:text-left mb-6 md:mb-0">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Aku Sarma</h1>
          <div className="text-lg md:text-xl mb-4">
            <ChangingRole />
          </div>
          <div className="space-x-4">
            <button className="bg-blue-500 text-white py-2 px-4 rounded">
              <Link href="/projects">View Projects</Link>
            </button>
            <button
              onClick={openCV}
              className="bg-green-500 text-white py-2 px-4 rounded"
            >
              View CV
            </button>
          </div>
        </div>
        <div className="right flex-1 flex justify-center items-center">
          <img
            src="/static/img/akusarma.jpeg"
            alt="Aku Sarma"
            className="w-[50%] h-auto rounded-lg shadow-lg"
          />
        </div>
      </section>

      <section className="skill">
        <div className="container mx-auto p-6 md:p-12">
          <h2 className="text-2xl font-bold mb-6">Skills</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="card p-4 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold mb-2">Frontend</h3>
              <ul>
                <li>React</li>
                <li>Next.js</li>
                <li>HTML/CSS/JS</li>
                <li>Tailwind CSS</li>
              </ul>
            </div>
            <div className="card p-4 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold mb-2">Backend</h3>
              <ul>
                <li>Node.js</li>
                <li>Express.js</li>
                <li>Django</li>
                <li>MongoDB</li>
                <li>PostgreSQL</li>
              </ul>
            </div>
            <div className="card p-4 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold mb-2">Databse</h3>
              <ul>
                <li>MongoDB</li>
                <li>PostgreSQL</li>
              </ul>
            </div>
            <div className="card p-4 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold mb-2">Languages</h3>
              <ul>
                <li>Python</li>
                <li>JavaScript</li>
              </ul>
            </div>
            <div className="card p-4 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold mb-2">Others</h3>
              <ul>
                <li>Git</li>
                <li>Github</li>
                <li>REST API</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="experience">
        <h2 className="text-center ">Experience</h2>
        <div className="timeline">
          <div className="containr left-container">
            <Image
              src="/download.png"
              alt="Software Development Intern"
              width={100}
              height={100}
            />
            <div className="text-box">
              <h2>Software Development Intern, ICM</h2>
              <small>Feb 2024 - May 2024 · 4 mos</small>
              <p>Guwahati, Assam, India · On-site</p>
              <span className="left-container-arrow"></span>
            </div>
          </div>

          <div className="containr right-container">
            <Image
              src="/download.png"
              alt="GDSC Cloud Computing Head"
              width={100}
              height={100}
            />
            <div className="text-box">
              <h2>GDSC Cloud Computing Head</h2>
              <small>Sep 2023 - Aug 2024 · 1 yr</small>
              <p>Guwahati, Assam, India · On-site</p>
              <span className="right-container-arrow"></span>
            </div>
          </div>

          <div className="containr left-container">
            <Image
              src="/download.png"
              alt="Internal App Handler"
              width={100}
              height={100}
            />
            <div className="text-box">
              <h2>Internal App Handler, AdtU</h2>
              <small>Oct 2023 - Feb 2024 · 5 mos</small>
              <p>Guwahati, Assam, India · On-site</p>
              <span className="left-container-arrow"></span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
