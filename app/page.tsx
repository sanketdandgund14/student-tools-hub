import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-50 px-6 py-12">

      <div className="max-w-5xl mx-auto text-center">
        <h1 className="text-4xl font-bold mb-4">
          Student Tools Hub
        </h1>
        <p className="text-slate-600 mb-8">
          Free tools for students — CGPA, SGPA, GPA calculators & more
        </p>
      </div>

      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">

        <Link href="/cgpa">
          <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg cursor-pointer">
            <h2 className="font-semibold text-lg">CGPA Calculator</h2>
            <p className="text-sm text-slate-500 mt-2">
              Convert CGPA to percentage instantly.
            </p>
          </div>
        </Link>

        <Link href="/sgpa">
          <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg cursor-pointer">
            <h2 className="font-semibold text-lg">SGPA Calculator</h2>
            <p className="text-sm text-slate-500 mt-2">
              Calculate semester GPA easily.
            </p>
          </div>
        </Link>

        <Link href="/gpa">
          <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg cursor-pointer">
            <h2 className="font-semibold text-lg">GPA Calculator</h2>
            <p className="text-sm text-slate-500 mt-2">
              Convert GPA and percentage.
            </p>
          </div>
        </Link>

      </div>

    </div>
  );
}