"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export default function Home() {
  const [cgpa, setCgpa] = useState("");
  const [percentage, setPercentage] = useState("");
  const [cgpaResult, setCgpaResult] = useState<number | null>(null);
  const [percentageResult, setPercentageResult] = useState<number | null>(null);

  // CGPA → %
  useEffect(() => {
    const v = parseFloat(cgpa);
    if (!isNaN(v) && v >= 0 && v <= 10) {
      setPercentageResult(v * 9.5);
    } else {
      setPercentageResult(null);
    }
  }, [cgpa]);

  // % → CGPA
  useEffect(() => {
    const v = parseFloat(percentage);
    if (!isNaN(v) && v >= 0 && v <= 100) {
      setCgpaResult(v / 9.5);
    } else {
      setCgpaResult(null);
    }
  }, [percentage]);

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-100 via-white to-blue-100 px-4 py-10">

      {/* HERO */}
      <div className="max-w-6xl mx-auto text-center mb-12">
        <h1 className="text-5xl font-black text-slate-900">
          Student Tools Hub
        </h1>
        <p className="text-slate-600 mt-3 text-lg">
          All-in-one academic calculator for CGPA, SGPA, and percentage conversions
        </p>
      </div>

      {/* CALCULATORS */}
      <div className="max-w-6xl mx-auto grid gap-8 md:grid-cols-2">

        {/* CGPA → % */}
        <div className="bg-white p-6 rounded-2xl shadow-xl">
          <h2 className="text-xl font-bold mb-4">
            CGPA → Percentage
          </h2>

          <input
            type="number"
            placeholder="Enter CGPA"
            value={cgpa}
            onChange={(e) => setCgpa(e.target.value)}
            className="w-full p-4 border rounded-xl mb-4"
          />

          <div className="bg-blue-600 text-white p-5 rounded-xl text-center">
            <p className="text-sm opacity-80">Percentage</p>
            <h2 className="text-4xl font-bold">
              {percentageResult !== null
                ? `${percentageResult.toFixed(2)}%`
                : "--"}
            </h2>
          </div>
        </div>

        {/* % → CGPA */}
        <div className="bg-white p-6 rounded-2xl shadow-xl">
          <h2 className="text-xl font-bold mb-4">
            Percentage → CGPA
          </h2>

          <input
            type="number"
            placeholder="Enter Percentage"
            value={percentage}
            onChange={(e) => setPercentage(e.target.value)}
            className="w-full p-4 border rounded-xl mb-4"
          />

          <div className="bg-purple-600 text-white p-5 rounded-xl text-center">
            <p className="text-sm opacity-80">CGPA</p>
            <h2 className="text-4xl font-bold">
              {cgpaResult !== null
                ? cgpaResult.toFixed(2)
                : "--"}
            </h2>
          </div>
        </div>

      </div>

      {/* MAIN TOOL LINKS */}
      <div className="max-w-5xl mx-auto mt-12 grid gap-6 md:grid-cols-3">

        <Link href="/cgpa">
          <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg cursor-pointer transition">
            <h3 className="font-bold text-lg">CGPA Tool</h3>
            <p className="text-sm text-slate-500 mt-2">
              Convert CGPA to percentage with detailed explanation
            </p>
          </div>
        </Link>

        <Link href="/sgpa">
          <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg cursor-pointer transition">
            <h3 className="font-bold text-lg">SGPA Tool</h3>
            <p className="text-sm text-slate-500 mt-2">
              Calculate semester GPA with subjects and credits
            </p>
          </div>
        </Link>

        <div className="bg-white p-6 rounded-xl shadow opacity-70">
          <h3 className="font-bold text-lg">More Tools</h3>
          <p className="text-sm text-slate-500 mt-2">
            Coming soon (GPA, Grade Predictor, etc.)
          </p>
        </div>

      </div>

      {/* SEO SECTION */}
      <div className="max-w-4xl mx-auto mt-12 bg-white p-6 rounded-xl shadow text-slate-700">
        <h2 className="text-2xl font-bold mb-4">
          About This Calculator
        </h2>
        <p>
          This platform provides accurate CGPA, SGPA, and percentage conversion tools
          used by Indian universities. All calculations follow standard formulas like
          CGPA × 9.5.
        </p>
      </div>

      {/* AD SPACE */}
      <div className="max-w-4xl mx-auto mt-8 p-6 border rounded text-center text-slate-400">
        Advertisement Space
      </div>

    </main>
  );
}