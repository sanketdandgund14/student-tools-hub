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

      {/* POPULAR SECTION */}
      <section className="max-w-5xl mx-auto mt-12 text-center">
        <h2 className="text-3xl font-bold mb-4">
          Popular Student Calculators
        </h2>

        <p className="text-slate-500 mb-6">
          Quickly calculate CGPA, SGPA, and percentage using standard formulas used in Indian universities.
        </p>
      </section>

      {/* TOOL CARDS */}
      <div className="max-w-5xl mx-auto mt-8 grid gap-8 md:grid-cols-2">

        {/* CGPA TOOL */}
        <Link href="/cgpa">
          <div className="card group bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition cursor-pointer hover:-translate-y-1">

            <h2 className="text-2xl font-bold mb-2">
              CGPA Calculator
            </h2>

            <p className="text-slate-500 mb-4">
              Convert CGPA ↔ Percentage instantly (9.5 formula supported).
            </p>

            <div className="text-sm text-green-600 mb-4">
              ✔ Most used tool
            </div>

            <span className="text-blue-600 font-bold group-hover:underline">
              Open Tool →
            </span>

          </div>
        </Link>

        {/* SGPA TOOL */}
        <Link href="/sgpa">
          <div className="card group bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition cursor-pointer hover:-translate-y-1">

            <h2 className="text-2xl font-bold mb-2">
              SGPA Calculator
            </h2>

            <p className="text-slate-500 mb-4">
              Add subjects, credits, and grades to calculate your semester GPA easily.
            </p>

            <div className="text-sm text-purple-600 mb-4">
              ✔ Save semesters & track CGPA
            </div>

            <span className="text-purple-600 font-bold group-hover:underline">
              Open Tool →
            </span>

          </div>
        </Link>

      </div>

      {/* WHY USE SECTION */}
      <section className="max-w-5xl mx-auto mt-16 grid md:grid-cols-3 gap-6 text-center">

        <div className="bg-white p-6 rounded-xl shadow">
          <h3 className="font-bold text-lg">Accurate Formulas</h3>
          <p className="text-slate-500 text-sm mt-2">
            Based on standard university grading systems.
          </p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow">
          <h3 className="font-bold text-lg">Instant Results</h3>
          <p className="text-slate-500 text-sm mt-2">
            Real-time calculations without reloads.
          </p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow">
          <h3 className="font-bold text-lg">Save Progress</h3>
          <p className="text-slate-500 text-sm mt-2">
            Store semesters and track your academic performance.
          </p>
        </div>

      </section>

      {/* FUTURE TOOLS */}
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

      {/* INTERNAL SEO LINKS */}
      <section className="max-w-4xl mx-auto mt-16 text-center">

        <h2 className="text-2xl font-bold mb-4">
          Explore More Tools
        </h2>

        <div className="flex flex-wrap justify-center gap-4 text-blue-600">

          <Link href="/cgpa">
            <span className="hover:underline">
              CGPA to Percentage Calculator
            </span>
          </Link>

          <Link href="/cgpa">
            <span className="hover:underline">
              Percentage to CGPA Calculator
            </span>
          </Link>

        </div>

      </section>

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

      {/* CTA SECTION */}
      <section className="max-w-4xl mx-auto mt-16 text-center bg-gradient-to-r from-blue-500 to-purple-600 text-white p-8 rounded-xl">

        <h2 className="text-2xl font-bold mb-3">
          Start Calculating Your Grades
        </h2>

        <p className="mb-6">
          Use our free tools to track and improve your academic performance.
        </p>

        <Link href="/cgpa">
          <button className="bg-white text-black px-6 py-3 rounded-lg font-bold">
            Try CGPA Calculator
          </button>
        </Link>

      </section>

      {/* AD SLOT */}
      <div className="max-w-4xl mx-auto mt-8 p-6 border rounded text-center text-gray-400">
        <div className="h-32 flex items-center justify-center">
          Ad Slot (728x90)
        </div>
      </div>

    </main>
  );
}