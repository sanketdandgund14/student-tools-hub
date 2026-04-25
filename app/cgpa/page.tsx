"use client";
import { useState } from "react";
import Link from "next/link";

export default function CGPA() {
  const [cgpa, setCgpa] = useState("");
  const [result, setResult] = useState<number | null>(null);
  const [error, setError] = useState("");

  const calculate = () => {
    const value = parseFloat(cgpa);

    if (isNaN(value)) {
      setError("Please enter a valid CGPA");
      setResult(null);
      return;
    }

    if (value < 0 || value > 10) {
      setError("CGPA must be between 0 and 10");
      setResult(null);
      return;
    }

    setError("");
    setResult(value * 9.5);
  };

  return (
    <div className="min-h-screen bg-slate-50 px-6 py-12">

      {/* HEADER */}
      <div className="max-w-4xl mx-auto text-center mb-10">
        <h1 className="text-4xl font-bold text-slate-900">
          CGPA to Percentage Calculator
        </h1>
        <p className="text-slate-600 mt-3">
          Instantly convert CGPA into percentage using standard formulas used in Indian universities.
        </p>
      </div>

      {/* CALCULATOR */}
      <div className="max-w-md mx-auto bg-white p-6 rounded-2xl shadow-md border">
        <label className="block text-sm font-medium mb-2">
          Enter your CGPA
        </label>

        <input
          type="number"
          step="0.01"
          placeholder="e.g. 7.5"
          value={cgpa}
          onChange={(e) => setCgpa(e.target.value)}
          className="w-full border border-slate-200 p-3 rounded-lg mb-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        {error && (
          <p className="text-red-500 text-sm mb-3">{error}</p>
        )}

        <button
          onClick={calculate}
          className="w-full bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-lg font-semibold transition"
        >
          Calculate Percentage
        </button>

        {result !== null && (
          <div className="mt-5 text-center">
            <p className="text-slate-600">Your Percentage</p>
            <h2 className="text-3xl font-bold text-blue-600">
              {result.toFixed(2)}%
            </h2>
          </div>
        )}
      </div>

      {/* AD SLOT 1 */}
      <div className="max-w-3xl mx-auto mt-8 p-6 border rounded-xl text-center text-slate-400">
        Advertisement
      </div>

      {/* SEO CONTENT */}
      <div className="max-w-3xl mx-auto mt-12 text-slate-700 leading-relaxed">

        <h2 className="text-2xl font-bold mb-4">
          CGPA to Percentage Calculator (India Guide)
        </h2>

        <p className="mb-4">
          CGPA (Cumulative Grade Point Average) is widely used in Indian universities to evaluate academic performance. 
          Instead of raw marks, students are graded on a scale (usually 10).
        </p>

        <p className="mb-4">
          To convert CGPA into percentage, most institutions follow a standard formula:
        </p>

        <p className="font-semibold text-lg mb-4">
          Percentage = CGPA × 9.5
        </p>

        <h3 className="text-xl font-semibold mt-6 mb-2">
          Example Calculation
        </h3>

        <p className="mb-4">
          If your CGPA is 7.2:
          <br />
          7.2 × 9.5 = 68.4%
        </p>

        <h3 className="text-xl font-semibold mt-6 mb-2">
          Why CGPA Conversion Matters
        </h3>

        <ul className="list-disc pl-6 mb-4">
          <li>Required for job placements</li>
          <li>Used in higher education applications</li>
          <li>Needed for scholarships and eligibility</li>
        </ul>

        <h3 className="text-xl font-semibold mt-6 mb-2">
          University Differences
        </h3>

        <p className="mb-4">
          Not all universities follow the same formula. Some use CGPA × 10 or custom calculations.
          Always verify with your university guidelines.
        </p>

      </div>

      {/* AD SLOT 2 */}
      <div className="max-w-3xl mx-auto mt-8 p-6 border rounded-xl text-center text-slate-400">
        Advertisement
      </div>

      {/* FAQ */}
      <div className="max-w-3xl mx-auto mt-12 text-slate-700">

        <h2 className="text-2xl font-bold mb-4">
          Frequently Asked Questions
        </h2>

        <h3 className="font-semibold mt-4">
          Is CGPA × 9.5 always correct?
        </h3>
        <p className="mb-3">
          No. While widely used, some universities use different formulas.
        </p>

        <h3 className="font-semibold mt-4">
          What is a good CGPA?
        </h3>
        <p className="mb-3">
          A CGPA above 8 is generally considered strong in most institutions.
        </p>

        <h3 className="font-semibold mt-4">
          Can I use this for VTU / AKTU / Anna University?
        </h3>
        <p className="mb-3">
          Yes, but always verify official formulas since they may differ.
        </p>

        <h3 className="font-semibold mt-4">
          What is the maximum CGPA?
        </h3>
        <p className="mb-3">
          Most universities use a 10-point scale.
        </p>

      </div>

      {/* INTERNAL LINKING */}
      <div className="max-w-3xl mx-auto mt-10 text-center">
        <p className="text-slate-600">
          Need semester-wise calculation? Try our{" "}
          <Link href="/sgpa" className="text-blue-600 font-semibold underline">
            SGPA Calculator
          </Link>
        </p>
      </div>

    </div>
  );
}