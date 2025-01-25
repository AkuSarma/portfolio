import Link from "next/link";
import Image from "next/image";
import '../styles/Navbar.css';

const Navbar = () => {
  return (
    <div className="navbar">
      <Link href="/">
        <Image src="/static/icons/house.png" alt="Home" width={24} height={24} />
        <span>Home</span>
      </Link>
      <Link href="/about">
        <Image src="/static/icons/info.png" alt="About me" width={24} height={24} />
        <span>About me</span>
      </Link>
      <Link href="/projects">
        <Image src="/static/icons/project.png" alt="Projects" width={24} height={24} />
        <span>Projects</span>
      </Link>
      <Link href="/contact">
        <Image src="/static/icons/communicate.png" alt="Contact me" width={24} height={24} />
        <span>contact me</span>
      </Link>
    </div>
  );
};

export default Navbar;
