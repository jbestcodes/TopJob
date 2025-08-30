export default function Structure() {
  return (
    <div className="max-w-4xl mx-auto py-16 px-4">
      <h1 className="text-4xl font-bold text-center text-blue-900 mb-8">Our Structure</h1>

      {/* Organization Structure */}
      <div className="bg-white rounded-xl shadow p-8 border-t-4 border-blue-700 mb-10">
        <h2 className="text-2xl font-bold text-blue-800 mb-4">Structure of Organization</h2>
        <ul className="list-disc list-inside text-slate-700 mb-6 ml-4 space-y-1">
          <li>The ultimate authority is the Board of Directors.</li>
          <li>
            The General Manager/Outsourcing Manager is held exclusively responsible for daily management. The main departments include:
            <ul className="list-disc list-inside ml-6 mt-2 space-y-1">
              <li>Manpower Department</li>
              <li>Sales & Marketing Department</li>
              <li>Administration Department</li>
              <li>Finance Department</li>
              <li>Technical Support Department</li>
            </ul>
          </li>
        </ul>
        <h3 className="text-xl font-semibold text-blue-700 mt-6 mb-2">Main Executives</h3>
        <ul className="list-disc list-inside text-slate-700 ml-4 space-y-1">
          <li>
            <span className="font-semibold">Name:</span> Ezekiel Omukuyia Luchera &mdash; <span className="font-semibold">Post:</span> Director, Administration
          </li>
          <li>
            <span className="font-semibold">Name:</span> Pauline Dalitzu &mdash; <span className="font-semibold">Post:</span> Director
          </li>
        </ul>
      </div>

      {/* Preposition */}
      <div className="bg-blue-50 rounded-xl shadow p-8 border-t-4 border-blue-400 mb-10">
        <h2 className="text-2xl font-bold text-blue-800 mb-4">Our Approach</h2>
        <p className="text-slate-700 mb-4">
          We are a Human Resource outsourcing company with a wealth of labor-related management skills. The challenge facing organizations today is how to get the right personnel and manage them effectively for growth and profitability. More than ever, companies are looking for ways to increase productivity and efficiency while reducing costs.
        </p>
        <p className="text-slate-700 mb-4">
          Outsourcing major administrative functions, especially HR, is a popular way to reduce overheads and increase profitability. By partnering with Top Job, you gain access to skilled professionals, cost savings, and the ability to focus on your core business while we handle your HR needs.
        </p>
        <ul className="list-disc list-inside text-slate-700 ml-4 mb-4">
          <li>Employment benefit management</li>
          <li>Healthcare and medical schemes</li>
          <li>Insurance schemes</li>
          <li>Compensation and dispute resolution</li>
          <li>Safety inspection</li>
          <li>Labor-related legal responsibilities</li>
        </ul>
        <p className="text-slate-700">
          As your HR partner, we take over all labor-related legal responsibilities for our employees, allowing you to focus on your business while we provide professional, cost-effective HR solutions.
        </p>
      </div>

      {/* Why Outsource Manpower */}
      <div className="bg-white rounded-xl shadow p-8 border-t-4 border-blue-700 mb-10">
        <h2 className="text-2xl font-bold text-blue-800 mb-4">Why Outsource Manpower</h2>
        <ul className="list-disc list-inside text-slate-700 ml-4 space-y-2">
          <li>Focus on your core business</li>
          <li>Economical &mdash; reduces costs</li>
          <li>Improved compliance and accuracy</li>
          <li>Access to advanced technology and expertise</li>
          <li>Ability to offer services you otherwise could not</li>
          <li>Greater specialist knowledge and experience</li>
          <li>Move HR up the value chain (focus on policy and decision making)</li>
          <li>Support organizational growth and scalability</li>
        </ul>
        <p className="text-slate-700 mt-4">
          Outsourcing HR functions allows your business to save time, reduce errors, and focus on strategic growth, while we handle the complexities of HR management.
        </p>
      </div>

      {/* Why Contract Top Job Manpower Services */}
      <div className="bg-blue-50 rounded-xl shadow p-8 border-t-4 border-blue-400 mb-10">
        <h2 className="text-2xl font-bold text-blue-800 mb-4">Why Contract Top Job Manpower Services?</h2>
        <p className="text-slate-700 mb-4">
          We provide integrated services to effectively manage manpower responsibilities contracted to us. By outsourcing to Top Job, you relieve your firm of many manpower administration backlogs that do not add value to your business or operations. We offer:
        </p>
        <ul className="list-disc list-inside text-slate-700 ml-4 mb-4">
          <li>Unskilled temporary manpower management (long and short term)</li>
          <li>Management of contract workers (skilled and unskilled)</li>
          <li>Merchandising, sales promotions, and branding</li>
          <li>Skilled manpower provision (recruiting)</li>
          <li>Employment benefit and healthcare schemes</li>
          <li>Insurance and compensation management</li>
          <li>Dispute resolution and safety inspection</li>
          <li>Labor-related legal responsibilities</li>
          <li>Industrial trainings</li>
        </ul>
        <p className="text-slate-700">
          Our services help you save time, reduce costs, and focus on what you do best, while we handle your HR and manpower needs.
        </p>
      </div>

      {/* Training Opportunities */}
      <div className="bg-white rounded-xl shadow p-8 border-t-4 border-blue-700 mb-10">
        <h2 className="text-2xl font-bold text-blue-800 mb-4">Training Opportunities</h2>
        <p className="text-slate-700 mb-4">
          We offer training to both casual and contracted employees to make them more responsive and effective at their workstations. Our training covers:
        </p>
        <ul className="list-disc list-inside text-slate-700 ml-4 space-y-2">
          <li>Fire fighting</li>
          <li>First Aid</li>
          <li>Customer care</li>
          <li>Target achievement and productivity</li>
          <li>HIV-AIDS management</li>
          <li>Conflict management</li>
          <li>Stress management</li>
        </ul>
      </div>

      {/* Org Chart Illustration */}
      <div className="mt-12 flex flex-col items-center">
        <div className="bg-blue-700 text-white px-6 py-3 rounded-t-lg font-bold">Board of Directors</div>
        <div className="bg-blue-600 text-white px-6 py-2 font-semibold">General Manager / Outsourcing Manager</div>
        <div className="flex flex-col md:flex-row gap-4 mt-2">
          <div className="bg-blue-100 text-blue-900 px-4 py-2 rounded font-semibold">Manpower Dept.</div>
          <div className="bg-blue-100 text-blue-900 px-4 py-2 rounded font-semibold">Sales & Marketing Dept.</div>
          <div className="bg-blue-100 text-blue-900 px-4 py-2 rounded font-semibold">Administration Dept.</div>
          <div className="bg-blue-100 text-blue-900 px-4 py-2 rounded font-semibold">Finance Dept.</div>
          <div className="bg-blue-100 text-blue-900 px-4 py-2 rounded font-semibold">Technical Support Dept.</div>
        </div>
      </div>
    </div>
  );
}