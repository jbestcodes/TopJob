import { Link as RouterLink } from "react-router-dom";

export default function Nav() {
  return (
    <nav className="w-full bg-slate-800/95 text-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        {/* Left: Logo, Name, Tagline */}
        <div className="flex flex-col items-start">
          <div className="flex items-center gap-2">
            <img src={`${import.meta.env.BASE_URL}logo.png`} alt="Top Job Logo" className="h-10 w-10 object-contain rounded" />
            <span className="font-bold text-xl tracking-wide">Top Job</span>
          </div>
          <span className="text-xs text-slate-200 mt-1">
            Your Trusted Partner in HR Excellence
          </span>
        </div>
        {/* Right: Navbar links */}
        <div className="flex items-center gap-6">
          <RouterLink to="/" className="cursor-pointer hover:underline">Home</RouterLink>
          <RouterLink to="/services" className="cursor-pointer hover:underline">Services</RouterLink>
          <RouterLink to="/contact" className="cursor-pointer hover:underline">Contact</RouterLink>
          <RouterLink to="/structure" className="cursor-pointer hover:underline">Structure</RouterLink>
        </div>
      </div>
    </nav>
  );
}