"use client";
import { useState } from "react";

const ipList = [
  "104.218.50.66",
  "104.243.38.18",
  "104.243.43.17",
  "66.23.193.126",
  "152.53.81.196",
];

export default function IpsPage() {
  const [search, setSearch] = useState("");

  const filteredIps = ipList.filter((ip) => ip.includes(search));

  const copyToClipboard = (ip: string) => {
    navigator.clipboard.writeText(ip);
    alert(`Copied ${ip}`);
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white p-8">
      <h1 className="text-4xl font-bold mb-6 text-purple-500">IP List</h1>
      <input
        type="text"
        placeholder="Search IP..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="px-4 py-2 mb-4 w-full max-w-md rounded bg-gray-800 text-white"
      />
      <ul className="space-y-2">
        {filteredIps.map((ip) => (
          <li key={ip} className="flex justify-between items-center bg-gray-800 p-2 rounded">
            <span>{ip}</span>
            <button
              onClick={() => copyToClipboard(ip)}
              className="bg-purple-600 hover:bg-purple-700 px-3 py-1 rounded"
            >
              Copy
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
