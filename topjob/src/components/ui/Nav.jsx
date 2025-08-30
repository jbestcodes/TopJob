import { Link as RouterLink } from "react-router-dom";

export default function Nav() {
  return (
    <nav className="bg-slate-900 text-white px-6 py-4 flex gap-8 justify-center shadow-md sticky top-0 z-50">
      <RouterLink to="/" className="font-bold text-lg tracking-wide">Top Job</RouterLink>
      <RouterLink to="/services" className="cursor-pointer hover:underline">Services</RouterLink>
      <RouterLink to="/contact" className="cursor-pointer hover:underline">Contact</RouterLink>
      <RouterLink to="/structure" className="cursor-pointer hover:underline">Structure</RouterLink> {/* Optional */}
    </nav>
  );
}