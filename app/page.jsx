'use client';
import ChangingRole from "./components/Home/ChangingRole";
import './styles/Home.css'
import Link from "next/link";


export default function Home() {
  const openCV = () => {
    window.open(
      "https://drive.google.com/file/d/1HEm3k5yqF81DWrHfTQds1b1n3dTrv9mQ/view?usp=drive_link"
    );
  }

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
      </div>
  );
}
