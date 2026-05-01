"use client";

import { useState } from "react";

type Subject = {
  credits: number;
  grade: string;
};

const gradeMap: Record<string, number> = {
  O: 10,
  A: 9,
  B: 8,
  C: 7,
  D: 6,
  F: 0,
};

export default function SGPA() {
  const [subjects, setSubjects] = useState<Subject[]>([
    { credits: 0, grade: "O" },
  ]);

  // Add subject
  const addSubject = () => {
    setSubjects([...subjects, { credits: 0, grade: "O" }]);
  };

  // Remove subject
  const removeSubject = (index: number) => {
    const updated = subjects.filter((_, i) => i !== index);
    setSubjects(updated);
  };

  // Update subject
  const updateSubject = (
    index: number,
    field: keyof Subject,
    value: number | string
  ) => {
    const updated = [...subjects];
    updated[index] = {
      ...updated[index],
      [field]: value,
    };
    setSubjects(updated);
  };

  // Calculate SGPA
  const calculateSGPA = () => {
    let totalCredits = 0;
    let totalPoints = 0;

    subjects.forEach((s) => {
      const gradeValue = gradeMap[s.grade];
      if (s.credits > 0) {
        totalCredits += s.credits;
        totalPoints += s.credits * gradeValue;
      }
    });

    if (totalCredits === 0) return "0.00";

    return (totalPoints / totalCredits).toFixed(2);
  };

  // Total credits
  const totalCredits = subjects.reduce(
    (acc, s) => acc + (s.credits || 0),
    0
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-100 to-slate-200 py-10 px-4">

      <div className="max-w-4xl mx-auto">

        {/* Header */}
        <div className="text-center mb-10">
          <h1 className="text-4xl font-bold text-slate-800">
            SGPA Calculator
          </h1>
          <p className="text-slate-600 mt-2">
            Calculate your semester GPA instantly
          </p>
        </div>

        {/* Main Card */}
        <div className="bg-white rounded-2xl shadow-lg p-6 transition-all">

          {/* Table Header */}
          <div className="grid grid-cols-4 gap-4 mb-4 text-sm font-semibold text-gray-500">
            <span>Subject</span>
            <span>Credits</span>
            <span>Grade</span>
            <span>Action</span>
          </div>

          {/* Subject Inputs */}
          {subjects.map((s, i) => (
            <div
              key={i}
              className="grid grid-cols-4 gap-4 mb-3 items-center"
            >
              <span className="font-medium text-gray-700">
                Subject {i + 1}
              </span>

              <input
                type="number"
                min="0"
                value={s.credits || ""}
                placeholder="Credits"
                className="p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                onChange={(e) =>
                  updateSubject(i, "credits", Number(e.target.value))
                }
              />

              <select
                value={s.grade}
                className="p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                onChange={(e) =>
                  updateSubject(i, "grade", e.target.value)
                }
              >
                {Object.keys(gradeMap).map((g) => (
                  <option key={g}>{g}</option>
                ))}
              </select>

              <button
                onClick={() => removeSubject(i)}
                disabled={subjects.length === 1}
                className="bg-red-500 hover:bg-red-600 text-white px-3 py-2 rounded-lg disabled:opacity-40"
              >
                Remove
              </button>
            </div>
          ))}

          {/* Add Button */}
          <button
            onClick={addSubject}
            className="mt-4 bg-green-600 hover:bg-green-700 text-white px-5 py-2 rounded-lg transition"
          >
            + Add Subject
          </button>

          {/* Divider */}
          <div className="my-6 border-t" />

          {/* Summary Section */}
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">

            <div className="text-center md:text-left">
              <p className="text-gray-500">Total Credits</p>
              <h2 className="text-2xl font-bold text-slate-700">
                {totalCredits}
              </h2>
            </div>

            <div className="bg-green-100 px-8 py-5 rounded-xl text-center shadow-inner">
              <p className="text-gray-600 text-sm">Your SGPA</p>
              <h2 className="text-4xl font-bold text-green-700">
                {calculateSGPA()}
              </h2>
            </div>

          </div>

        </div>

        {/* Footer Tip */}
        <div className="text-center mt-8 text-gray-500 text-sm">
          Tip: Enter correct credits for accurate SGPA calculation
        </div>

      </div>
    </div>
  );
}