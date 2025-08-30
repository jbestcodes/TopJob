import Footer from "../components/ui/Footer";
import { FaUserTie, FaUsersCog, FaMoneyCheckAlt, FaChalkboardTeacher, FaClipboardCheck, FaIdBadge } from "react-icons/fa";

export default function Services() {
  return (
    <div className="max-w-5xl mx-auto py-16 px-4">
      <h1 className="text-4xl font-bold text-center text-emerald-800 mb-10">Our Services</h1>
      <div className="space-y-10">
        {/* Recruitment & Staffing */}
        <section className="bg-white rounded-xl shadow p-8 border-t-4 border-emerald-600 flex flex-col items-center">
          <FaUserTie className="text-3xl text-emerald-600 mb-2" />
          <h2 className="text-2xl font-semibold text-emerald-700 mb-3">Recruitment & Staffing</h2>
          <p className="text-slate-700 mb-2">
            We provide end-to-end recruitment solutions for organizations seeking to attract, select, and retain top talent. Our recruitment process is thorough and tailored to your needs, including:
          </p>
          <ul className="list-disc list-inside text-slate-700 ml-4 mb-2">
            <li>Job analysis and profiling</li>
            <li>Advertising and candidate sourcing</li>
            <li>Shortlisting and interviewing</li>
            <li>Reference and background checks</li>
            <li>Onboarding support</li>
          </ul>
          <p className="text-slate-700">
            We ensure the right fit for both employers and job seekers, helping you build a high-performing team.
          </p>
        </section>

        {/* HR Outsourcing */}
        <section className="bg-white rounded-xl shadow p-8 border-t-4 border-emerald-600 flex flex-col items-center">
          <FaUsersCog className="text-3xl text-emerald-600 mb-2" />
          <h2 className="text-2xl font-semibold text-emerald-700 mb-3 text-center">
            HR Outsourcing
          </h2>
          <p className="text-slate-700 mb-2">
            Our HR outsourcing services allow you to focus on your core business while we manage your HR functions. We offer:
          </p>
          <ul className="list-disc list-inside text-slate-700 ml-4 mb-2">
            <li>Employee records management</li>
            <li>Leave and attendance management</li>
            <li>HR policy development and implementation</li>
            <li>Compliance with labor laws and regulations</li>
          </ul>
          <p className="text-slate-700">
            We deliver efficient, confidential, and professional HR support tailored to your organization’s needs.
          </p>
        </section>

        {/* Payroll Management */}
        <section className="bg-white rounded-xl shadow p-8 border-t-4 border-emerald-600">
          <h2 className="text-2xl font-semibold text-emerald-700 mb-3">
            <FaMoneyCheckAlt className="inline-block mr-2 text-emerald-600" />
            Payroll Management
          </h2>
          <p className="text-slate-700 mb-2">
            Our payroll management solutions ensure timely and accurate payroll processing, including:
          </p>
          <ul className="list-disc list-inside text-slate-700 ml-4 mb-2">
            <li>Salary computation and disbursement</li>
            <li>Statutory deductions and remittances (PAYE, NSSF, NHIF, etc.)</li>
            <li>Payslip generation</li>
            <li>Payroll compliance and reporting</li>
          </ul>
          <p className="text-slate-700">
            We guarantee confidentiality and compliance, giving you peace of mind.
          </p>
        </section>

        {/* Training & Development */}
        <section className="bg-white rounded-xl shadow p-8 border-t-4 border-emerald-600">
          <h2 className="text-2xl font-semibold text-emerald-700 mb-3">
            <FaChalkboardTeacher className="inline-block mr-2 text-emerald-600" />
            Training & Development
          </h2>
          <p className="text-slate-700 mb-2">
            We offer tailored training programs to enhance employee skills and organizational growth, including:
          </p>
          <ul className="list-disc list-inside text-slate-700 ml-4 mb-2">
            <li>Leadership and management training</li>
            <li>Customer service excellence</li>
            <li>Team building and motivation</li>
            <li>Performance management workshops</li>
          </ul>
          <p className="text-slate-700">
            Our training is practical, interactive, and designed to deliver measurable results.
          </p>
        </section>

        {/* HR Consultancy */}
        <section className="bg-white rounded-xl shadow p-8 border-t-4 border-emerald-600">
          <h2 className="text-2xl font-semibold text-emerald-700 mb-3">
            <FaClipboardCheck className="inline-block mr-2 text-emerald-600" />
            HR Consultancy
          </h2>
          <p className="text-slate-700 mb-2">
            Our consultancy services provide expert guidance on all HR matters, such as:
          </p>
          <ul className="list-disc list-inside text-slate-700 ml-4 mb-2">
            <li>HR audits and compliance reviews</li>
            <li>Organizational development and restructuring</li>
            <li>Performance management systems</li>
            <li>Employee relations and dispute resolution</li>
          </ul>
          <p className="text-slate-700">
            We help you align your HR strategy with your business objectives.
          </p>
        </section>

        {/* Background Checks */}
        <section className="bg-white rounded-xl shadow p-8 border-t-4 border-emerald-600">
          <h2 className="text-2xl font-semibold text-emerald-700 mb-3">
            <FaIdBadge className="inline-block mr-2 text-emerald-600" />
            Background Checks
          </h2>
          <p className="text-slate-700 mb-2">
            We conduct thorough background checks to help you make informed hiring decisions, including:
          </p>
          <ul className="list-disc list-inside text-slate-700 ml-4 mb-2">
            <li>Reference checks</li>
            <li>Academic and professional verification</li>
            <li>Criminal record checks</li>
            <li>Credit history checks</li>
          </ul>
          <p className="text-slate-700">
            Our process is discreet, accurate, and reliable.
          </p>
        </section>
      </div>
      <Footer />
    </div>
  );
}