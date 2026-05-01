"use client";

import { useEffect, useMemo, useState } from "react";

type Subject = {
  name: string;
  credits: number;
  grade: string;
};

type Semester = {
  sgpa: number;
  credits: number;
};

const gradeMap: Record<string, number> = {
  O: 10,
  A: 9,
  B: 8,
  C: 7,
  D: 6,
  F: 0,
};

const emptySubject = (): Subject => ({
  name: "",
  credits: 0,
  grade: "O",
});

const loadSemesters = (): Semester[] => {
  if (typeof window === "undefined") return [];
  try {
    const data = localStorage.getItem("semesters");
    return data ? JSON.parse(data) : [];
  } catch {
    return [];
  }
};

export default function SGPA() {
  const [subjects, setSubjects] = useState<Subject[]>([emptySubject()]);
  const [semesters, setSemesters] = useState<Semester[]>(loadSemesters);
  const [toast, setToast] = useState("");

  // Save to localStorage
  useEffect(() => {
    localStorage.setItem("semesters", JSON.stringify(semesters));
  }, [semesters]);

  // Calculation
  const totals = useMemo(() => {
    let credits = 0;
    let points = 0;

    subjects.forEach((s) => {
      if (s.credits > 0) {
        credits += s.credits;
        points += s.credits * gradeMap[s.grade];
      }
    });

    return { credits, points };
  }, [subjects]);

  const sgpa =
    totals.credits === 0 ? 0 : totals.points / totals.credits;

  const cgpa =
    semesters.length === 0
      ? 0
      : semesters.reduce((acc, sem) => {
          acc.points += sem.sgpa * sem.credits;
          acc.credits += sem.credits;
          return acc;
        }, { points: 0, credits: 0 }).points /
        semesters.reduce((a, b) => a + b.credits, 0);

  // Handlers
  const updateSubject = (
    index: number,
    field: keyof Subject,
    value: string | number
  ) => {
    setSubjects((prev) =>
      prev.map((s, i) =>
        i === index ? { ...s, [field]: value } : s
      )
    );
  };

  const addSubject = () => {
    setSubjects((prev) => [...prev, emptySubject()]);
  };

  const removeSubject = (index: number) => {
    if (subjects.length === 1) return;
    setSubjects((prev) => prev.filter((_, i) => i !== index));
  };

  const saveSemester = () => {
    if (totals.credits === 0) return;

    setSemesters((prev) => [
      ...prev,
      {
        sgpa: Number(sgpa.toFixed(2)),
        credits: totals.credits,
      },
    ]);

    setToast("Semester saved successfully");
    setTimeout(() => setToast(""), 2000);
  };

  const resetSemester = () => {
    setSubjects([emptySubject()]);
  };

  const deleteSemester = (index: number) => {
    setSemesters((prev) => prev.filter((_, i) => i !== index));
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 via-slate-100 to-purple-100 p-6 animate-fadeIn">

      {/* Toast */}
      {toast && (
        <div className="fixed top-5 right-5 bg-green-600 text-white px-4 py-2 rounded-lg shadow-lg z-50 animate-bounce">
          {toast}
        </div>
      )}

      <div className="max-w-6xl mx-auto">

        {/* HEADER */}
        <div className="text-center mb-10">
          <h1 className="text-5xl font-black text-slate-800">
            SGPA Calculator
          </h1>
          <p className="text-slate-600 mt-3 text-lg">
            Advanced semester planner with CGPA tracking
          </p>
        </div>

        <div className="grid lg:grid-cols-[1fr_350px] gap-6">

          {/* LEFT PANEL */}
          <div className="bg-white/80 backdrop-blur-xl p-6 rounded-2xl shadow-xl">

            {/* SUBJECT LIST */}
            <div className="space-y-3">
              {subjects.map((s, i) => (
                <div
                  key={i}
                  className="grid md:grid-cols-4 gap-3 p-3 bg-slate-50 rounded-xl transition-all duration-300 hover:scale-[1.01] hover:shadow-md"
                >
                  <input
                    type="text"
                    placeholder={`Subject ${i + 1} (e.g. Maths)`}
                    value={s.name}
                    onChange={(e) =>
                      updateSubject(i, "name", e.target.value)
                    }
                    className="p-2 border rounded-lg focus:ring-2 focus:ring-blue-400"
                  />

                  <input
                    type="number"
                    placeholder="Credits"
                    value={s.credits || ""}
                    onChange={(e) =>
                      updateSubject(i, "credits", Number(e.target.value))
                    }
                    className="p-2 border rounded-lg focus:ring-2 focus:ring-blue-400"
                  />

                  <select
                    value={s.grade}
                    onChange={(e) =>
                      updateSubject(i, "grade", e.target.value)
                    }
                    className="p-2 border rounded-lg focus:ring-2 focus:ring-blue-400"
                  >
                    {Object.keys(gradeMap).map((g) => (
                      <option key={g}>{g}</option>
                    ))}
                  </select>

                  <button
                    onClick={() => removeSubject(i)}
                    className="bg-red-500 hover:bg-red-600 text-white rounded-lg transition-all duration-300 active:scale-90"
                  >
                    Remove
                  </button>
                </div>
              ))}
            </div>

            {/* BUTTONS */}
            <div className="flex flex-wrap gap-3 mt-5">
              <button
                onClick={addSubject}
                className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg transition-all duration-300 hover:scale-105"
              >
                + Add Subject
              </button>

              <button
                onClick={saveSemester}
                className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-all duration-300 hover:scale-105"
              >
                Save Semester
              </button>

              <button
                onClick={resetSemester}
                className="bg-gray-400 hover:bg-gray-500 text-white px-4 py-2 rounded-lg"
              >
                Reset
              </button>
            </div>

            {/* SUMMARY */}
            <div className="mt-6 flex justify-between items-center">
              <div>
                <p className="text-gray-500">Credits</p>
                <h2 className="text-2xl font-bold">
                  {totals.credits}
                </h2>
              </div>

              <div className="bg-green-100 px-6 py-4 rounded-xl shadow-inner text-center">
                <p className="text-sm">SGPA</p>
                <h2 className="text-4xl font-bold text-green-700 transition-all">
                  {sgpa.toFixed(2)}
                </h2>
              </div>
            </div>

          </div>

          {/* RIGHT PANEL */}
          <div className="space-y-5">

            {/* CGPA */}
            <div className="bg-purple-100 p-6 rounded-2xl text-center shadow">
              <p className="text-gray-600">Final CGPA</p>
              <h2 className="text-5xl font-black text-purple-700">
                {cgpa ? cgpa.toFixed(2) : "0.00"}
              </h2>
            </div>

            {/* SAVED SEMESTERS */}
            <div className="bg-white p-5 rounded-2xl shadow">
              <h3 className="font-semibold mb-3">
                Saved Semesters
              </h3>

              {semesters.length === 0 ? (
                <p className="text-gray-400 text-sm">
                  No data yet
                </p>
              ) : (
                <div className="space-y-2">
                  {semesters.map((s, i) => (
                    <div
                      key={i}
                      className="flex justify-between items-center bg-slate-100 p-2 rounded-lg"
                    >
                      <span>Sem {i + 1}</span>
                      <span>{s.sgpa}</span>
                      <button
                        onClick={() => deleteSemester(i)}
                        className="text-red-500 text-sm"
                      >
                        Delete
                      </button>
                    </div>
                  ))}
                </div>
              )}
            </div>

          </div>
        </div>
      </div>
    </main>
  );
}