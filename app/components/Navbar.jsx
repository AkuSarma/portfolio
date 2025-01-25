import Link from "next/link";
import '../styles/Navbar.css';

const Navbar = () => {
  return (
    <div className="navbar">
      <Link href="/">
        <img src="static/icons/house.png" alt="Home" />
        <span>Home</span>
      </Link>
      <Link href="/about">
        <img src="static/icons/info.png" alt="About me" />
        <span>About me</span>
      </Link>
      <Link href="/projects">
        <img src="static/icons/project.png" alt="Projects" />
        <span>Projects</span>
      </Link>
      <Link href="/contact">
        <img src="static/icons/communicate.png" alt="Contact me" />
        <span>contact me</span>
      </Link>
    </div>
  );
};

export default Navbar;
