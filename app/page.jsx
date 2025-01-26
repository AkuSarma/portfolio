'use client';
import Link from "next/link";
import Image from "next/image";
import ChangeRole from "./components/ChangeRole";

export default function Home() {
  const openCV = () => {
    window.open(
      "https://drive.google.com/file/d/1HEm3k5yqF81DWrHfTQds1b1n3dTrv9mQ/view?usp=drive_link"
    );
  };

  return (
    <div className="home min-h-svh flex flex-row justify-center items-center w-full px-[20vw] bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-100">
      <div className="left w-full text-lg">
        <p className="text-2xl font-semibold">Hi, I'm</p>
        <p className="text-4xl font-bold mt-2">Aku Sarma</p>
        <p className="text-2xl mt-2">
          a <span className="text-blue-500 dark:text-blue-300"><ChangeRole/></span>
        </p>
        <div className="social-media-links flex flex-row justify-between items-center w-1/2 mt-4">
          <Link href="mailto:akusarma1702@gmail.com">
            <Image
              className="hover:scale-125 hover:shadow-sm rounded-md dark:shadow-white shadow-black"
              src="/static/icons/social-media/gmail.png"
              alt="gmail"
              width={"25"}
              height={"25"}
            />
          </Link>
          <Link href="https://github.com/AkuSarma">
            <Image
              className="hover:scale-125 hover:shadow-sm rounded-md dark:shadow-white shadow-black"
              src="/static/icons/social-media/github.png"
              alt="github"
              width={"25"}
              height={"25"}
            />
          </Link>
          <Link href="https://www.instagram.com/aku_sarma_/">
            <Image
              className="hover:scale-125 hover:shadow-sm rounded-md dark:shadow-white shadow-black"
              src="/static/icons/social-media/instagram.png"
              alt="instagram"
              width={"25"}
              height={"25"}
            />
          </Link>
          <Link href="https://x.com/AkuSarma">
            <Image
              className="hover:scale-125 hover:shadow-sm rounded-md dark:shadow-white shadow-black"
              src="/static/icons/social-media/twitter.png"
              alt="twitter"
              width={"25"}
              height={"25"}
            />
          </Link>
        </div>
        <div className="button-group mt-4">
          <button
            className="uppercase py-2 px-4 rounded-lg bg-slate-900 dark:bg-slate-100 border-2 border-transparent dark:text-slate-900 text-white text-md mr-4 hover:bg-slate-700 dark:hover:bg-slate-300"
            onClick={openCV}
          >
            My Resume
          </button>
          <button className="uppercase py-2 px-4 rounded-lg bg-transparent border-2 border-slate-900 dark:border-slate-100 text-slate-900 dark:text-slate-100 hover:bg-slate-900 dark:hover:bg-slate-100 hover:text-white dark:hover:text-slate-900 text-md">
            <Link href="projects"></Link>My Projects
          </button>
        </div>
      </div>
      <div className="right w-full flex flex-row justify-center items-center">
        <div className="border p-2 rounded-lg dark:border-slate-900 border-slate-900 w-fit h-fit relative">
          <Image
            className="animate-bounce rounded-lg"
            src="/static/img/akusarma.jpeg"
            alt="Aku Sarma"
            width={"250"}
            height={"250"}
          />
        </div>
      </div>
    </div>
  );
}
