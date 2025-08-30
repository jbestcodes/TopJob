import { useState } from "react";

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

  return (
    <div className="max-w-xl mx-auto py-16 px-4">
      <h2 className="text-3xl font-bold text-indigo-800 mb-4 text-center">Contact Us</h2>
      <p className="text-lg text-slate-700 mb-6 text-center">
        Email: <a href="mailto:info@topjob.co.ke" className="text-indigo-700 underline">info@topjob.co.ke</a>
      </p>
      {submitted ? (
        <div className="bg-green-100 text-green-800 p-4 rounded text-center mb-6">
          Thank you for contacting us! We will get back to you soon.
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="bg-white rounded-xl shadow-md p-8 space-y-6">
          <div>
            <label className="block mb-2 font-medium text-slate-700">Name</label>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              required
              className="w-full border border-slate-300 rounded px-4 py-2"
            />
          </div>
          <div>
            <label className="block mb-2 font-medium text-slate-700">Email</label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              required
              className="w-full border border-slate-300 rounded px-4 py-2"
            />
          </div>
          <div>
            <label className="block mb-2 font-medium text-slate-700">Message</label>
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              required
              rows={5}
              className="w-full border border-slate-300 rounded px-4 py-2"
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
    </div>
  );
}