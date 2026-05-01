"use client";

import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-100 via-white to-blue-100 px-4 py-12">

      {/* HERO */}
      <div className="max-w-6xl mx-auto text-center">
        <h1 className="text-5xl font-black text-slate-900">
          Student Tools Hub
        </h1>

        <p className="text-slate-600 mt-4 text-lg max-w-2xl mx-auto">
          Fast, accurate academic calculators for CGPA, SGPA, and percentage conversion.
        </p>
      </div>

      {/* TOOL CARDS */}
      <div className="max-w-5xl mx-auto mt-12 grid gap-8 md:grid-cols-2">

        {/* CGPA TOOL */}
        <Link href="/cgpa">
          <div className="group bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition cursor-pointer">

            <h2 className="text-2xl font-bold mb-3">
              CGPA Calculator
            </h2>

            <p className="text-slate-500 mb-6">
              Convert CGPA to percentage and vice versa instantly with accurate formulas.
            </p>

            <span className="text-blue-600 font-bold group-hover:underline">
              Open Tool →
            </span>

          </div>
        </Link>

        {/* SGPA TOOL */}
        <Link href="/sgpa">
          <div className="group bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition cursor-pointer">

            <h2 className="text-2xl font-bold mb-3">
              SGPA Calculator
            </h2>

            <p className="text-slate-500 mb-6">
              Add subjects, credits, and grades to calculate your semester GPA easily.
            </p>

            <span className="text-purple-600 font-bold group-hover:underline">
              Open Tool →
            </span>

          </div>
        </Link>

      </div>

      {/* FUTURE EXPANSION */}
      <div className="max-w-5xl mx-auto mt-12 grid gap-6 md:grid-cols-3">

        <div className="bg-white p-6 rounded-xl shadow opacity-80">
          <h3 className="font-bold">GPA Calculator</h3>
          <p className="text-sm text-slate-500 mt-2">
            Coming soon
          </p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow opacity-80">
          <h3 className="font-bold">Grade Predictor</h3>
          <p className="text-sm text-slate-500 mt-2">
            Coming soon
          </p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow opacity-80">
          <h3 className="font-bold">Percentage Tools</h3>
          <p className="text-sm text-slate-500 mt-2">
            Coming soon
          </p>
        </div>

      </div>

      {/* SEO CONTENT */}
      <div className="max-w-4xl mx-auto mt-14 bg-white p-6 rounded-xl shadow text-slate-700">

        <h2 className="text-2xl font-bold mb-4">
          Academic Calculator Platform for Students
        </h2>

        <p className="leading-7">
          Student Tools Hub provides reliable tools to calculate CGPA, SGPA,
          and academic performance metrics used by universities across India.
          Each tool is designed for accuracy, speed, and ease of use.
        </p>

      </div>

      {/* AD SLOT */}
      <div className="max-w-4xl mx-auto mt-8 p-6 border rounded text-center text-slate-400">
        Advertisement Space
      </div>

    </main>
  );
}