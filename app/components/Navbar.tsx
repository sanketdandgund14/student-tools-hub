import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-black text-white p-4 flex justify-between">
      <h1 className="font-bold">Student Tools Hub</h1>

      <div className="flex gap-4">
        <Link href="/">Home</Link>
        <Link href="/cgpa">CGPA</Link>
        <Link href="/sgpa">SGPA</Link>
      </div>
    </nav>
  );
}