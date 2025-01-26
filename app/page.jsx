'use client';
import Link from "next/link";
import Image from "next/image";

export default function Home() {
  const openCV = () => {
    window.open(
      "https://drive.google.com/file/d/1HEm3k5yqF81DWrHfTQds1b1n3dTrv9mQ/view?usp=drive_link"
    );
  };

  return (
    <div className="home min-h-svh flex flex-col justify-center items-center px-[20vw] bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-100">
      <div className="left">
        <p>Hi, I'm</p>
        <p>Aku Sarma</p>
        <p>
          a <span>fullstack developer</span>
        </p>
        <div className="social-media-links">
          <Link href="mailto:akusarma1702@gmail.com">
            <Image src="/static/icons/social-media/gmail.png" alt="gmail" width={'25'} height={'25'}/>
          </Link>
          <Link href="https://github.com/AkuSarma">
            <Image src="/static/icons/social-media/github.png" alt="github" width={'25'} height={'25'}/>
          </Link>
          <Link href="https://www.instagram.com/aku_sarma_/">
            <Image src="/static/icons/social-media/instagram.png" alt="instagram" width={'25'} height={'25'}/>
          </Link>
          <Link href="https://x.com/AkuSarma">
            <Image src="/static/icons/social-media/twitter.png" alt="twitter" width={'25'} height={'25'}/>
          </Link>
        </div>
        <div className="button-group">
          <button onClick={openCV}>My Resume</button>
          <button>
            <Link href="projects"></Link>My Projects
          </button>
        </div>
      </div>
      <div className="right">
        <div className="border">
          <Image src="/static/img/akusarma.jpeg" alt="Aku Sarma" width={'25'} height={'25'}/>
        </div>
      </div>
    </div>
  );
}
