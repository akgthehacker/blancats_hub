"use client";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white">
      {/* Label */}
      <h1 className="text-5xl font-bold mb-16" style={{ transform: "translateY(-20px)" }}>
        Blancats Hub
      </h1>

      {/* Buttons */}
      <div className="flex flex-col sm:flex-row gap-8">
        <button
          className="px-8 py-4 bg-purple-600 hover:bg-purple-700 rounded-lg text-xl font-semibold transition"
          onClick={() => router.push("/ips")}
        >
          IP's
        </button>
        <button
          className="px-8 py-4 bg-purple-600 hover:bg-purple-700 rounded-lg text-xl font-semibold transition"
          onClick={() => router.push("/links")}
        >
          Links
        </button>
      </div>
    </div>
  );
}
