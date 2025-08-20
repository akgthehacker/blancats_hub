"use client";
import { useState } from "react";

const ipList = [
  { name: "Utopia", ip: "104.218.50.66" },
  { name: "Shadow", ip: "104.243.38.18" },
  { name: "Falcon", ip: "104.243.43.17" },
  { name: "Interstellar", ip: "66.23.193.126" },
  { name: "Froggys", ip: "152.53.81.196" },
  { name: "Vapor", ip: "199.180.255.67" },
  { name: "Lunar", ip: "66.23.198.228" },
  { name: "UniUB", ip: "104.243.42.228" },
  { name: "Bolt", ip: "104.36.85.232" },
  { name: "Szvy", ip: "152.53.38.100" },
  { name: "55gms", ip: "152.53.37.155" },
  { name: "Void", ip: "152.53.80.168" },
  { name: "Vyper", ip: "152.53.53.8" },
  { name: "Meximath", ip: "152.53.80.107" },
  { name: "Obscura", ip: "151.101.65.194" },
  { name: "Waves", ip: "172.96.142.25" },
  { name: "Ocular", ip: "172.93.100.82" },
  { name: "BordomV2", ip: "152.53.36.42" },
  { name: "VPLAZA", ip: "213.136.73.63" },
  { name: "Night", ip: "104.243.45.193" },
  { name: "Velera", ip: "152.53.83.13" },
];

export default function IpsPage() {
  const [search, setSearch] = useState("");

  const filteredIps = ipList.filter(
    (item) =>
      item.name.toLowerCase().includes(search.toLowerCase()) ||
      item.ip.includes(search)
  );

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    alert(`Copied ${text}`);
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white p-8">
      <h1 className="text-4xl font-bold mb-6 text-purple-500">IP List</h1>

      <input
        type="text"
        placeholder="Search by name or IP..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="px-4 py-2 mb-6 w-full max-w-md rounded bg-gray-800 text-white"
      />

      <ul className="space-y-2">
        {filteredIps.map((item) => (
          <li
            key={item.ip}
            className="flex justify-between items-center bg-gray-800 p-3 rounded hover:bg-gray-700 transition"
          >
            <span>
              <span className="font-semibold">{item.name}</span> - {item.ip}
            </span>
            <button
              onClick={() => copyToClipboard(item.ip)}
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
