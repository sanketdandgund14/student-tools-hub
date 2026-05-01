export const metadata = {
  title: "CGPA to Percentage Calculator (India)",
  description:
    "Convert CGPA to percentage instantly using the standard 9.5 formula used in Indian universities.",
};

export default function Page() {
  return (
    <main className="min-h-screen bg-slate-100 px-6 py-12">

      <div className="max-w-3xl mx-auto bg-white p-8 rounded-xl shadow">

        <h1 className="text-3xl font-bold mb-4">
          CGPA to Percentage Calculator
        </h1>

        <p className="text-slate-600 mb-6">
          Use the standard formula: <strong>Percentage = CGPA × 9.5</strong>
        </p>

        {/* INPUT */}
        <input
          type="number"
          placeholder="Enter CGPA"
          className="w-full p-3 border rounded mb-4"
          id="cgpaInput"
          onInput={(e) => {
            const value = (e.target as HTMLInputElement).value;
            const result = document.getElementById("result");

            if (!value) {
              if (result) result.innerText = "--";
              return;
            }

            const percentage = Number(value) * 9.5;

            if (result) result.innerText = percentage.toFixed(2);
          }}
        />

        {/* RESULT */}
        <div className="bg-blue-600 text-white p-6 rounded text-center text-xl font-bold">
          Percentage: <span id="result">--</span>
        </div>

        {/* SEO CONTENT */}
        <div className="mt-8 text-slate-700 leading-7">
          <h2 className="text-xl font-bold mb-2">
            How to Convert CGPA to Percentage
          </h2>

          <p>
            In most Indian universities, the percentage is calculated by multiplying
            CGPA by 9.5. This formula is widely used in CBSE and engineering colleges.
          </p>
        </div>

      </div>

    </main>
  );
}