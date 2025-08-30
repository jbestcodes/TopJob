import { Link } from "react-scroll";

export default function Nav() {
  return (
    <nav className="bg-slate-900 text-white px-6 py-4 flex gap-8 justify-center shadow-md sticky top-0 z-50">
      <a href="/" className="font-bold text-lg tracking-wide">Top Job</a>
      <Link to="about" smooth={true} duration={500} className="cursor-pointer hover:underline">About</Link>
      <Link to="services" smooth={true} duration={500} className="cursor-pointer hover:underline">Services</Link>
      <Link to="contact" smooth={true} duration={500} className="cursor-pointer hover:underline">Contact</Link>
    </nav>
  );
}