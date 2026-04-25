import Link from "next/link";

{/* Tools Section */}
<div className="max-w-5xl mx-auto mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">

  <Link href="/tools/cgpa">
    <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg cursor-pointer">
      <h2 className="font-semibold text-lg">CGPA Calculator</h2>
      <p className="text-sm text-slate-500 mt-2">
        Convert CGPA to percentage instantly.
      </p>
    </div>
  </Link>

  <Link href="/tools/sgpa">
    <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg cursor-pointer">
      <h2 className="font-semibold text-lg">SGPA Calculator</h2>
      <p className="text-sm text-slate-500 mt-2">
        Calculate semester GPA easily.
      </p>
    </div>
  </Link>

  <Link href="/tools/ats">
    <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg cursor-pointer">
      <h2 className="font-semibold text-lg">ATS Resume Checker</h2>
      <p className="text-sm text-slate-500 mt-2">
        Check resume compatibility with job roles.
      </p>
    </div>
  </Link>

</div>