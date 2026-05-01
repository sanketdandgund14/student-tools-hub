"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export default function CGPA() {
  const [mode, setMode] = useState<"cgpa" | "percentage">("cgpa");

  const [cgpa, setCgpa] = useState("");
  const [percentage, setPercentage] = useState("");

  const [cgpaResult, setCgpaResult] = useState<number | null>(null);
  const [percentageResult, setPercentageResult] = useState<number | null>(null);

  const [error, setError] = useState("");

  // CGPA → Percentage (instant)
  useEffect(() => {
    if (mode !== "cgpa") return;

    const value = parseFloat(cgpa);

    if (cgpa === "") {
      setPercentageResult(null);
      setError("");
      return;
    }

    if (Number.isNaN(value)) {
      setError("Enter a valid CGPA");
      setPercentageResult(null);
      return;
    }

    if (value < 0 || value > 10) {
      setError("CGPA must be between 0 and 10");
      setPercentageResult(null);
      return;
    }

    setError("");
    setPercentageResult(value * 9.5);
  }, [cgpa, mode]);

  // Percentage → CGPA (instant)
  useEffect(() => {
    if (mode !== "percentage") return;

    const value = parseFloat(percentage);

    if (percentage === "") {
      setCgpaResult(null);
      setError("");
      return;
    }

    if (Number.isNaN(value)) {
      setError("Enter a valid percentage");
      setCgpaResult(null);
      return;
    }

    if (value < 0 || value > 100) {
      setError("Percentage must be between 0 and 100");
      setCgpaResult(null);
      return;
    }

    setError("");
    setCgpaResult(value / 9.5);
  }, [percentage, mode]);

  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-100 px-4 py-10 sm:px-6">

      <section className="mx-auto max-w-6xl grid gap-8 lg:grid-cols-[1fr_1.2fr]">

        {/* LEFT SIDE (SEO + INFO) */}
        <div>
          <p className="mb-4 inline-flex rounded-full border border-blue-200 bg-white/80 px-4 py-2 text-sm font-semibold text-blue-800 shadow-sm">
            CGPA Conversion Tool
          </p>

          <h1 className="text-4xl font-black text-slate-950 sm:text-5xl">
            CGPA ↔ Percentage Calculator
          </h1>

          <p className="mt-4 text-lg text-slate-600 leading-8">
            Convert CGPA to percentage or percentage to CGPA instantly using standard Indian formulas.
          </p>

          <div className="mt-6 grid grid-cols-2 gap-3">
            <div className="bg-white p-4 rounded-xl shadow">
              <p className="text-sm text-gray-500">Formula</p>
              <p className="font-bold text-xl">CGPA × 9.5</p>
            </div>
            <div className="bg-white p-4 rounded-xl shadow">
              <p className="text-sm text-gray-500">Reverse</p>
              <p className="font-bold text-xl">÷ 9.5</p>
            </div>
          </div>
        </div>

        {/* RIGHT SIDE (TOOL) */}
        <div className="bg-white/80 backdrop-blur-xl p-6 rounded-2xl shadow-xl">

          {/* TOGGLE */}
          <div className="flex gap-3 mb-6">
            <button
              onClick={() => setMode("cgpa")}
              className={`flex-1 p-3 rounded-lg font-bold transition ${
                mode === "cgpa"
                  ? "bg-blue-600 text-white"
                  : "bg-slate-100"
              }`}
            >
              CGPA → %
            </button>

            <button
              onClick={() => setMode("percentage")}
              className={`flex-1 p-3 rounded-lg font-bold transition ${
                mode === "percentage"
                  ? "bg-purple-600 text-white"
                  : "bg-slate-100"
              }`}
            >
              % → CGPA
            </button>
          </div>

          {/* INPUT */}
          <div>
            {mode === "cgpa" ? (
              <input
                type="number"
                value={cgpa}
                placeholder="Enter CGPA (0–10)"
                onChange={(e) => setCgpa(e.target.value)}
                className="w-full p-4 border rounded-xl text-lg focus:ring-4 focus:ring-blue-200"
              />
            ) : (
              <input
                type="number"
                value={percentage}
                placeholder="Enter Percentage (0–100)"
                onChange={(e) => setPercentage(e.target.value)}
                className="w-full p-4 border rounded-xl text-lg focus:ring-4 focus:ring-purple-200"
              />
            )}
          </div>

          {/* ERROR */}
          {error && (
            <p className="mt-3 text-red-600 font-semibold">{error}</p>
          )}

          {/* RESULT */}
          <div className="mt-6 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 text-white p-6 text-center shadow-lg">

            <p className="text-sm opacity-80">
              {mode === "cgpa" ? "Percentage" : "CGPA"}
            </p>

            <h2 className="text-5xl font-black mt-2">
              {mode === "cgpa"
                ? percentageResult !== null
                  ? `${percentageResult.toFixed(2)}%`
                  : "--"
                : cgpaResult !== null
                ? cgpaResult.toFixed(2)
                : "--"}
            </h2>

          </div>

        </div>
      </section>

      {/* QUICK TABLE */}
      <section className="mt-12 max-w-4xl mx-auto bg-white p-6 rounded-xl shadow">
        <h2 className="text-xl font-bold mb-4">Quick Reference</h2>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-sm">
          {[
            ["10", "95%"],
            ["9", "85.5%"],
            ["8", "76%"],
            ["7", "66.5%"],
            ["6", "57%"],
            ["5", "47.5%"],
          ].map(([c, p]) => (
            <div key={c} className="bg-slate-100 p-3 rounded-lg text-center">
              <p className="font-bold">{c}</p>
              <p>{p}</p>
            </div>
          ))}
        </div>
      </section>

      {/* SEO CONTENT */}
      <section className="mt-12 max-w-4xl mx-auto space-y-6 text-slate-700">

        <div className="bg-white p-6 rounded-xl shadow">
          <h2 className="text-2xl font-bold">
            CGPA to Percentage Guide
          </h2>
          <p className="mt-3">
            CGPA is widely used in Indian universities. The most common conversion formula is CGPA × 9.5.
          </p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow">
          <h2 className="text-2xl font-bold">FAQ</h2>
          <p className="mt-3">
            Not all universities use the same formula. Always verify official conversion rules.
          </p>
        </div>

      </section>

      {/* NAVIGATION */}
      <div className="mt-10 text-center">
        <Link
          href="/sgpa"
          className="text-blue-600 font-bold underline"
        >
          Try SGPA Calculator →
        </Link>
      </div>

    </main>
  );
}