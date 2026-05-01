"use client";

import Link from "next/link";
import { useEffect, useState, useRef } from "react";
import confetti from "canvas-confetti";

export default function CGPA() {
  const [mode, setMode] = useState<"cgpa" | "percentage">("cgpa");

  const [cgpa, setCgpa] = useState("");
  const [percentage, setPercentage] = useState("");

  const [cgpaResult, setCgpaResult] = useState<number | null>(null);
  const [percentageResult, setPercentageResult] = useState<number | null>(null);

  const [error, setError] = useState("");

  const [band, setBand] = useState<string | null>(null);
  const lastBandRef = useRef<string | null>(null);

  // 🎯 Band Logic
  const getBand = (p: number) => {
    if (p >= 90) return "elite";
    if (p >= 80) return "excellent";
    if (p >= 70) return "good";
    if (p >= 60) return "average";
    return "low";
  };

  const bandData: any = {
    elite: {
      label: "Elite",
      msg: "Outstanding performance 🚀",
      color: "from-green-500 to-emerald-600",
      emoji: "🎉🔥",
    },
    excellent: {
      label: "Excellent",
      msg: "Strong academic performance 💪",
      color: "from-blue-500 to-indigo-600",
      emoji: "🚀📈",
    },
    good: {
      label: "Good",
      msg: "Nice progress 👍 Keep pushing",
      color: "from-yellow-500 to-orange-500",
      emoji: "👍",
    },
    average: {
      label: "Average",
      msg: "Can improve with consistency 📚",
      color: "from-orange-500 to-red-500",
      emoji: "⚠️",
    },
    low: {
      label: "Low",
      msg: "Focus on basics and rebuild 📉",
      color: "from-red-600 to-red-800",
      emoji: "🛠",
    },
  };

  // CGPA → %
  useEffect(() => {
    if (mode !== "cgpa") return;

    const value = parseFloat(cgpa);

    if (cgpa === "") {
      setPercentageResult(null);
      setBand(null);
      setError("");
      return;
    }

    if (Number.isNaN(value)) {
      setError("Enter valid CGPA");
      return;
    }

    if (value < 0 || value > 10) {
      setError("CGPA must be 0–10");
      return;
    }

    setError("");

    const percent = value * 9.5;
    setPercentageResult(percent);

    const b = getBand(percent);
    setBand(b);

    // 🎉 Confetti trigger only once
    if (b === "elite" && lastBandRef.current !== "elite") {
      confetti({
        particleCount: 120,
        spread: 70,
        origin: { y: 0.6 },
      });
    }

    lastBandRef.current = b;
  }, [cgpa, mode]);

  // % → CGPA
  useEffect(() => {
    if (mode !== "percentage") return;

    const value = parseFloat(percentage);

    if (percentage === "") {
      setCgpaResult(null);
      setError("");
      return;
    }

    if (Number.isNaN(value)) {
      setError("Enter valid percentage");
      return;
    }

    if (value < 0 || value > 100) {
      setError("Percentage must be 0–100");
      return;
    }

    setError("");
    setCgpaResult(value / 9.5);
  }, [percentage, mode]);

  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-100 px-4 py-10 sm:px-6">

      <section className="mx-auto max-w-6xl grid gap-8 lg:grid-cols-[1fr_1.2fr]">

        {/* LEFT */}
        <div>
          <p className="mb-4 inline-flex rounded-full border bg-white px-4 py-2 text-sm font-semibold text-blue-800 shadow">
            CGPA Conversion Tool
          </p>

          <h1 className="text-4xl font-black text-slate-900 sm:text-5xl">
            CGPA ↔ Percentage
          </h1>

          <p className="mt-4 text-lg text-slate-600">
            Instant conversion using standard formula.
          </p>

          <div className="mt-6 grid grid-cols-2 gap-3">
            <div className="bg-white p-4 rounded-xl shadow">
              <p className="text-sm text-gray-500">Formula</p>
              <p className="font-bold text-xl">× 9.5</p>
            </div>
            <div className="bg-white p-4 rounded-xl shadow">
              <p className="text-sm text-gray-500">Reverse</p>
              <p className="font-bold text-xl">÷ 9.5</p>
            </div>
          </div>
        </div>

        {/* RIGHT TOOL */}
        <div className="bg-white/80 backdrop-blur-xl p-6 rounded-2xl shadow-xl">

          {/* TOGGLE */}
          <div className="flex gap-3 mb-6">
            <button
              onClick={() => setMode("cgpa")}
              className={`flex-1 p-3 rounded-lg font-bold transition ${
                mode === "cgpa" ? "bg-blue-600 text-white" : "bg-slate-100"
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
          {mode === "cgpa" ? (
            <input
              type="number"
              value={cgpa}
              placeholder="Enter CGPA"
              onChange={(e) => setCgpa(e.target.value)}
              className="w-full p-4 border rounded-xl text-lg focus:ring-4 focus:ring-blue-200"
            />
          ) : (
            <input
              type="number"
              value={percentage}
              placeholder="Enter Percentage"
              onChange={(e) => setPercentage(e.target.value)}
              className="w-full p-4 border rounded-xl text-lg focus:ring-4 focus:ring-purple-200"
            />
          )}

          {error && (
            <p className="mt-3 text-red-600 font-semibold">{error}</p>
          )}

          {/* RESULT */}
          <div className="mt-6 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 text-white p-6 text-center shadow-lg transition-all duration-300 hover:scale-[1.02]">

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

          {/* 🎯 FEEDBACK */}
          {band && (
            <div
              className={`mt-6 p-5 rounded-xl text-white bg-gradient-to-r ${
                bandData[band].color
              } animate-fadeIn`}
            >
              <p className="text-sm opacity-80">
                Performance: {bandData[band].label}
              </p>

              <h3 className="text-xl font-bold mt-1">
                {bandData[band].msg}
              </h3>

              <div className="text-3xl mt-2">
                {bandData[band].emoji}
              </div>
            </div>
          )}
        </div>
      </section>

      {/* NAV */}
      <div className="mt-10 text-center">
        <Link href="/sgpa" className="text-blue-600 font-bold underline">
          Try SGPA →
        </Link>
      </div>
    </main>
  );
}