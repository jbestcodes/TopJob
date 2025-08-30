// src/pages/HomePage.jsx
import { useEffect, useState } from "react";
import ClientsSlider from "../components/ClientsSlider";
import Footer from "../components/ui/Footer";

const slides = [
  {
    title: "About Us",
    description: "Top Job Human Resource Consulting is a leading HR firm in Kenya, providing innovative and customized HR solutions to organizations and individuals.",
    color: "from-blue-700 to-blue-900",
    section: "about"
  },
  {
    title: "Our Services",
    description: "We offer Recruitment, Outsourcing, Payroll, Training, and HR Consultancy services tailored to your business needs.",
    color: "from-emerald-600 to-teal-700",
    section: "services"
  },
  {
    title: "Contact Us",
    description: "Partner with Top Job for reliable, professional, and efficient HR solutions. Get in touch today.",
    color: "from-indigo-700 to-purple-800",
    section: "contact"
  },
];

export default function HomePage() {
  const [current, setCurrent] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // Auto-slide every 4 seconds unless paused
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [isPaused, slides.length]);

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-slate-50 to-slate-200">
      <main className="flex-1 w-full max-w-6xl mx-auto px-4">
        {/* Hero Section */}
        <section
          className="relative flex flex-col items-center justify-center text-center py-20 md:py-32 shadow-lg min-h-[350px] md:min-h-[420px] bg-slate-900"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div className="w-full max-w-3xl mx-auto px-2 md:px-0">
            <h1 className="text-3xl md:text-5xl font-extrabold mb-6 tracking-tight drop-shadow-lg leading-tight text-yellow-300" style={{textShadow: '0 2px 8px rgba(0,0,0,0.25)'}}>
              Top Job Human Resource Consulting
            </h1>
            <div
              className={`relative rounded-xl p-6 md:p-10 mt-6 mb-2 shadow-lg border min-h-[120px] md:min-h-[160px] flex flex-col items-center justify-center transition-all duration-700 cursor-pointer bg-gradient-to-r ${slides[current].color} text-white`}
              onClick={() => {
                const section = document.getElementById(slides[current].section);
                if (section) section.scrollIntoView({ behavior: 'smooth' });
              }}
              title="Click to jump to section"
            >
              <h2 className="text-2xl md:text-3xl font-semibold mb-2 animate-fade-in">
                {slides[current].title}
              </h2>
              <p className="max-w-xl mx-auto text-base md:text-xl font-medium animate-fade-in">
                {slides[current].description}
              </p>
            </div>
            {/* Slide controls */}
            <div className="flex justify-center gap-3 mt-6">
              {slides.map((slide, idx) => (
                <button
                  key={idx}
                  className={`w-3 h-3 rounded-full border-2 border-white transition-all duration-300 ${current === idx ? 'bg-white/90 scale-125' : 'bg-white/40 hover:bg-white/70'}`}
                  aria-label={`Go to slide ${idx + 1}`}
                  onClick={() => setCurrent(idx)}
                  style={{ outline: current === idx ? '2px solid #fff' : 'none' }}
                />
              ))}
            </div>
            <div className="mt-2 text-xs text-white/70">(Hover to pause slides, click slide to jump to section)</div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-16 bg-white border-b border-slate-200 scroll-mt-24">
          <div className="max-w-4xl mx-auto rounded-xl shadow-md bg-slate-50 p-8 md:p-12">
            <h2 className="text-3xl font-bold text-blue-900 mb-4 text-center">About Us</h2>
            <p className="text-lg text-slate-700 leading-relaxed text-center">
              Top Job Human Resource Consulting is a leading HR firm in Kenya, providing innovative and customized HR solutions to organizations and individuals. 
              <br /><br />
              Our mission is to empower businesses and professionals to achieve their goals through effective human resource management. We are committed to delivering value, professionalism, and integrity in all our engagements.
              <br /><br />
              With a team of experienced HR practitioners, Top Job offers a wide range of services designed to meet the unique needs of our clients across various industries.
            </p>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="py-20 bg-emerald-50 border-b border-slate-200 scroll-mt-24">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-emerald-800 mb-10 text-center">Our Services</h2>
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              <div className="bg-white rounded-lg shadow p-8 border-t-4 border-emerald-600 flex flex-col h-full">
                <h3 className="text-xl font-semibold text-emerald-700 mb-2">Recruitment & Staffing</h3>
                <p className="text-slate-700 flex-1">
                  We provide end-to-end recruitment solutions, helping organizations attract, select, and retain top talent. Our process ensures the right fit for both employers and job seekers.
                </p>
              </div>
              <div className="bg-white rounded-lg shadow p-8 border-t-4 border-emerald-600 flex flex-col h-full">
                <h3 className="text-xl font-semibold text-emerald-700 mb-2">HR Outsourcing</h3>
                <p className="text-slate-700 flex-1">
                  Top Job offers comprehensive HR outsourcing services, allowing you to focus on your core business while we handle your HR functions efficiently and professionally.
                </p>
              </div>
              <div className="bg-white rounded-lg shadow p-8 border-t-4 border-emerald-600 flex flex-col h-full">
                <h3 className="text-xl font-semibold text-emerald-700 mb-2">Payroll Management</h3>
                <p className="text-slate-700 flex-1">
                  Our payroll management solutions ensure timely and accurate payroll processing, statutory compliance, and confidentiality for your organization.
                </p>
              </div>
              <div className="bg-white rounded-lg shadow p-8 border-t-4 border-emerald-600 flex flex-col h-full">
                <h3 className="text-xl font-semibold text-emerald-700 mb-2">Training & Development</h3>
                <p className="text-slate-700 flex-1">
                  We offer tailored training programs to enhance employee skills, productivity, and organizational growth.
                </p>
              </div>
              <div className="bg-white rounded-lg shadow p-8 border-t-4 border-emerald-600 flex flex-col h-full">
                <h3 className="text-xl font-semibold text-emerald-700 mb-2">HR Consultancy</h3>
                <p className="text-slate-700 flex-1">
                  Our HR consultancy services cover compliance, performance management, organizational development, and more, providing expert guidance for your HR challenges.
                </p>
              </div>
              <div className="bg-white rounded-lg shadow p-8 border-t-4 border-emerald-600 flex flex-col h-full">
                <h3 className="text-xl font-semibold text-emerald-700 mb-2">Background Checks</h3>
                <p className="text-slate-700 flex-1">
                  We conduct thorough background checks to help you make informed hiring decisions and maintain a trustworthy workforce.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Clients Section */}
        <section className="py-16 bg-white">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-blue-900 mb-8">Our Clients</h2>
            <ClientsSlider />
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-16 bg-indigo-50 scroll-mt-24">
          <div className="max-w-3xl mx-auto rounded-xl shadow-md bg-white p-8 md:p-12 text-center border-t-4 border-indigo-700">
            <h2 className="text-3xl font-bold text-indigo-800 mb-4">Contact Us</h2>
            <p className="text-lg text-slate-700 mb-6">
              Partner with Top Job Human Resource Consulting for reliable, professional, and efficient HR solutions. 
              <br /><br />
              Email: <a href="mailto:info@topjob.co.ke" className="text-indigo-700 underline">info@topjob.co.ke</a>
              <br />
              Phone: <span className="text-indigo-700">+254 700 000 000</span>
              <br /><br />
              We look forward to working with you!
            </p>
            <a href="mailto:info@topjob.co.ke" className="inline-block bg-indigo-700 hover:bg-indigo-800 text-white font-semibold py-3 px-8 rounded-lg shadow transition">Email Us</a>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}