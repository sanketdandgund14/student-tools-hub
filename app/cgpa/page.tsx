"use client";
import { useState } from "react";

export default function CGPA() {
  const [cgpa, setCgpa] = useState("");
  const [result, setResult] = useState<number | null>(null);

  const calculate = () => {
    const value = parseFloat(cgpa);
    if (!isNaN(value)) {
      setResult(value * 9.5);
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 px-6 py-12">

      {/* Calculator */}
      <div className="max-w-md mx-auto bg-white p-6 rounded-xl shadow">
        {/* your calculator UI */}
      </div>

      {/* SEO Content */}
      <div className="max-w-3xl mx-auto mt-12 text-slate-700">
        {/* KEEP your existing SEO text here */}
      </div>

      {/* FAQ */}
      <div className="max-w-3xl mx-auto mt-12 text-slate-700">
        {/* KEEP your FAQ section here */}
      </div>

      {/* Ads */}
      <div className="max-w-3xl mx-auto mt-8 p-6 border rounded text-center text-slate-400">
        Advertisement Space
      </div>

    </div>
  );
}   