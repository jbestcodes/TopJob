import { useEffect, useState } from "react";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    fetch('https://formspree.io/f/yourFormID', {
      method: 'POST',
      headers: { 'Accept': 'application/json' },
      body: new FormData(e.target),
    })
      .then(response => {
        if (response.ok) setSubmitted(true);
        else alert("There was an error. Please try again.");
      });
  }

  useEffect(() => {
    if (submitted) {
      const timer = setTimeout(() => setSubmitted(false), 5000); // 5 seconds
      return () => clearTimeout(timer);
    }
  }, [submitted]);

  return (
    <main className="min-h-screen flex items-center justify-center bg-gradient-to-b from-indigo-50 to-white px-4">
      <section className="w-full max-w-lg mx-auto py-12">
        <h1 className="text-4xl font-bold text-center text-indigo-800 mb-2">Partner With Us</h1>
        <p className="text-center text-slate-600 mb-8">
          We’d love to hear from you. Fill out the form below or email us directly at{" "}
          <a href="mailto:info@topjob.co.ke" className="text-indigo-700 underline">info@topjob.co.ke</a>
        </p>
        {submitted ? (
          <div className="bg-green-100 text-green-800 p-4 rounded text-center mb-6 font-semibold">
            Thank you for reaching out! We will get back to you soon.
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="bg-white rounded-xl shadow-lg p-8 space-y-6">
            <div>
              <label className="block mb-2 font-medium text-slate-700" htmlFor="name">Name</label>
              <input
                id="name"
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                required
                className="w-full border border-slate-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-200"
                placeholder="Your Name"
              />
            </div>
            <div>
              <label className="block mb-2 font-medium text-slate-700" htmlFor="email">Email</label>
              <input
                id="email"
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                required
                className="w-full border border-slate-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-200"
                placeholder="you@email.com"
              />
            </div>
            <div>
              <label className="block mb-2 font-medium text-slate-700" htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                value={form.message}
                onChange={handleChange}
                required
                rows={5}
                className="w-full border border-slate-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-200"
                placeholder="How can we help you?"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-indigo-700 hover:bg-indigo-800 text-white font-semibold py-3 rounded-lg shadow transition"
            >
              Send Message
            </button>
          </form>
        )}
      </section>
    </main> 
  );
}