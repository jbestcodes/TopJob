// src/pages/HomePage.jsx
import { useEffect, useState } from "react";
import ClientsSlider from "../components/ClientsSlider";
import Footer from "../components/ui/Footer";
import { FaUserTie, FaUsersCog, FaMoneyCheckAlt, FaChalkboardTeacher, FaClipboardCheck, FaIdBadge } from "react-icons/fa";

const slides = [
  {
    type: "text",
    title: "About Us",
    description: "Top Job Human Resource Consulting is a leading HR firm in Kenya, providing innovative and customized HR solutions to organizations and individuals.",
    color: "from-blue-700 to-blue-900",
  },
  {
    type: "image",
    image: `${import.meta.env.BASE_URL}hr.png`,
    alt: "HR Illustration",
    color: "from-emerald-600 to-teal-700",
  },
  {
    type: "text",
    title: "Our Services",
    description: "We offer Recruitment, Outsourcing, Payroll, Training, and HR Consultancy services tailored to your business needs.",
    color: "from-emerald-700 to-blue-700",
  },
  {
    type: "text",
    title: "Contact Us",
    description: "Partner with Top Job for reliable, professional, and efficient HR solutions. Get in touch today.",
    color: "from-indigo-700 to-purple-800",
  },
];

export default function HomePage() {
  const [current, setCurrent] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [isPaused]);

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-slate-50 to-slate-200">
      <main className="flex-1 w-full">
        {/* Hero Section */}
        <section
          className="relative flex flex-col items-center justify-center text-center px-4 py-10 md:py-16 shadow-lg min-h-[250px] md:min-h-[320px] bg-gradient-to-r from-indigo-100 via-indigo-200 to-indigo-100"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div className="w-full max-w-2xl mx-auto z-10">
            {slides[current].type === "text" ? (
              <>
                <h1 className="text-2xl md:text-4xl font-extrabold mb-4 tracking-tight drop-shadow-lg leading-tight text-indigo-900">
                  {slides[current].title}
                </h1>
                <p className="text-indigo-800 text-base md:text-xl mb-2">
                  {slides[current].description}
                </p>
              </>
            ) : (
              <img
                src={slides[current].image}
                alt={slides[current].alt}
                className="mx-auto w-80 h-40 md:w-[32rem] md:h-48 object-contain rounded-xl shadow-lg"
              />
            )}
          </div>
          {/* Slide controls */}
          <div className="flex justify-center gap-3 mt-4 z-10">
            {slides.map((slide, idx) => (
              <button
                key={idx}
                className={`w-3 h-3 rounded-full border-2 border-indigo-400 transition-all duration-300 ${current === idx ? 'bg-indigo-400 scale-125' : 'bg-indigo-200 hover:bg-indigo-300'}`}
                aria-label={`Go to slide ${idx + 1}`}
                onClick={() => setCurrent(idx)}
                style={{ outline: current === idx ? '2px solid #6366f1' : 'none' }}
              />
            ))}
          </div>
          <div className="mt-2 text-xs text-indigo-500 z-10">(Hover to pause slides)</div>
          {/* Background image */}
          <div
            className="absolute inset-0 w-full h-full z-0"
            style={{
              backgroundImage: `url(${import.meta.env.BASE_URL}background.png)`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              opacity: 0.25,
            }}
          />
          {/* Optional color overlay */}
          <div className="absolute inset-0 bg-indigo-100/60 z-0" />
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
              <div className="bg-white rounded-lg shadow p-8 border-t-4 border-emerald-600 flex flex-col h-full items-center">
                <FaUserTie className="text-3xl text-emerald-600 mb-3" />
                <h3 className="text-xl font-semibold text-emerald-700 mb-2">Recruitment & Staffing</h3>
                <p className="text-slate-700 flex-1">
                  We provide end-to-end recruitment solutions, helping organizations attract, select, and retain top talent. Our process ensures the right fit for both employers and job seekers.
                </p>
              </div>
              <div className="bg-white rounded-lg shadow p-8 border-t-4 border-emerald-600 flex flex-col h-full items-center">
                <FaUsersCog className="text-3xl text-emerald-600 mb-3" />
                <h3 className="text-xl font-semibold text-emerald-700 mb-2">HR Outsourcing</h3>
                <p className="text-slate-700 flex-1">
                  Top Job offers comprehensive HR outsourcing services, allowing you to focus on your core business while we handle your HR functions efficiently and professionally.
                </p>
              </div>
              <div className="bg-white rounded-lg shadow p-8 border-t-4 border-emerald-600 flex flex-col h-full items-center">
                <FaMoneyCheckAlt className="text-3xl text-emerald-600 mb-3" />
                <h3 className="text-xl font-semibold text-emerald-700 mb-2">Payroll Management</h3>
                <p className="text-slate-700 flex-1">
                  Our payroll management solutions ensure timely and accurate payroll processing, statutory compliance, and confidentiality for your organization.
                </p>
              </div>
              <div className="bg-white rounded-lg shadow p-8 border-t-4 border-emerald-600 flex flex-col h-full items-center">
                <FaChalkboardTeacher className="text-3xl text-emerald-600 mb-3" />
                <h3 className="text-xl font-semibold text-emerald-700 mb-2">Training & Development</h3>
                <p className="text-slate-700 flex-1">
                  We offer tailored training programs to enhance employee skills, productivity, and organizational growth.
                </p>
              </div>
              <div className="bg-white rounded-lg shadow p-8 border-t-4 border-emerald-600 flex flex-col h-full items-center">
                <FaClipboardCheck className="text-3xl text-emerald-600 mb-3" />
                <h3 className="text-xl font-semibold text-emerald-700 mb-2">HR Consultancy</h3>
                <p className="text-slate-700 flex-1">
                  Our HR consultancy services cover compliance, performance management, organizational development, and more, providing expert guidance for your HR challenges.
                </p>
              </div>
              <div className="bg-white rounded-lg shadow p-8 border-t-4 border-emerald-600 flex flex-col h-full items-center">
                <FaIdBadge className="text-3xl text-emerald-600 mb-3" />
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