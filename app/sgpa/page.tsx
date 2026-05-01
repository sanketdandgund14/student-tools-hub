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

  const addSubject = () => {
    setSubjects([...subjects, { credits: 0, grade: "O" }]);
  };

  const updateSubject = <K extends keyof Subject>(
  index: number,
  field: K,
  value: Subject[K]
) => {
  const updated = [...subjects];
  updated[index][field] = value;
  setSubjects(updated);
};

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

    if (totalCredits === 0) return 0;

    return (totalPoints / totalCredits).toFixed(2);
  };

  return (
    <div className="min-h-screen bg-slate-100 p-6">
      <h1 className="text-3xl font-bold mb-6">SGPA Calculator</h1>

      {subjects.map((s, i) => (
        <div key={i} className="flex gap-4 mb-3">
          <input
            type="number"
            placeholder="Credits"
            className="p-2 border rounded w-24"
            onChange={(e) =>
              updateSubject(i, "credits", Number(e.target.value))
            }
          />

          <select
            className="p-2 border rounded"
            onChange={(e) =>
  updateSubject(i, "grade", e.target.value)
}
          >
            {Object.keys(gradeMap).map((g) => (
              <option key={g}>{g}</option>
            ))}
          </select>
        </div>
      ))}

      <button
        onClick={addSubject}
        className="bg-green-600 text-white px-4 py-2 rounded mt-2"
      >
        Add Subject
      </button>

      <div className="mt-6 text-lg">
        SGPA: <strong>{calculateSGPA()}</strong>
      </div>
    </div>
  );
}