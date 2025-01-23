import Link from "next/link";

const Navbar = () => {
  return (
    <div>
      <Link href="/">Home</Link>
      <Link href="/projects">Projects</Link>
      <Link href="/contact">contact</Link>
    </div>
  );
};

export default Navbar;
