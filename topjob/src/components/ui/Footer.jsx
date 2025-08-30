export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white mt-12">
      <div className="max-w-6xl mx-auto px-4 py-10 flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="text-center md:text-left">
          <div className="text-lg font-semibold mb-2">Our Philosophy</div>
          <div className="italic text-slate-200 mb-4">"We deliver what we promise."</div>
          <div className="text-slate-300 text-sm">
            Top Job is a professional services firm registered in Kenya offering Human Resource Consulting and related solutions.
          </div>
        </div>
        <div className="text-center md:text-right">
          <div className="text-lg font-semibold mb-2">Contact Us</div>
          <div className="text-slate-300 text-sm">Address: Nairobi, Kenya</div>
          <div className="text-slate-300 text-sm">
            E-mail: <a href="mailto:info@topjob.co.ke" className="underline text-indigo-300">info@topjob.co.ke</a>
          </div>
        </div>
      </div>
      <div className="text-center text-xs text-slate-500 py-2 border-t border-slate-800">
        &copy; {new Date().getFullYear()} Top Job Human Resource Consulting. All rights reserved.
      </div>
    </footer>
  );
}